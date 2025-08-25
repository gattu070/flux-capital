import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

// Rate limiting - simple in-memory store (in production, use Redis or similar)
const rateLimit = new Map<string, { count: number; resetTime: number }>()

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message too long"),
})

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5

  const record = rateLimit.get(ip)

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown"
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["fluxcapital11@gmail.com"],
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0d1b2a; color: #f7f5ef; padding: 20px; text-align: center;">
            <h1 style="margin: 0; color: #c2a15a;">FluxCapital</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">New Contact Form Submission</p>
          </div>
          
          <div style="padding: 30px; background: #f7f5ef;">
            <h2 style="color: #0d1b2a; margin-top: 0;">Contact Details</h2>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #0d1b2a;">Name:</strong><br>
              <span style="color: #666;">${validatedData.name}</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #0d1b2a;">Email:</strong><br>
              <a href="mailto:${validatedData.email}" style="color: #c2a15a;">${validatedData.email}</a>
            </div>
            
            ${
              validatedData.phone
                ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #0d1b2a;">Phone:</strong><br>
              <span style="color: #666;">${validatedData.phone}</span>
            </div>
            `
                : ""
            }
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #0d1b2a;">Message:</strong><br>
              <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #c2a15a; margin-top: 10px;">
                ${validatedData.message.replace(/\n/g, "<br>")}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.email}
${validatedData.phone ? `Phone: ${validatedData.phone}` : ""}

Message:
${validatedData.message}

Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email. Please try again or contact us directly." },
        { status: 500 },
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! We'll get back to you within 24 hours.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Please check your form data and try again.", details: error.errors },
        { status: 400 },
      )
    }

    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 })
  }
}
