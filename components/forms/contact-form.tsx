"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message too long"),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    try {
      contactSchema.parse(formData)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<ContactFormData> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setSubmitMessage(result.message)
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setSubmitStatus("error")
        setSubmitMessage(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === "success") {
    return (
      <Card className="border-[var(--fc-gold-500)]/20">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-[var(--fc-gold-500)] mx-auto mb-4" />
          <h3 className="font-heading text-2xl font-bold text-[var(--fc-navy-900)] mb-2">Message Sent!</h3>
          <p className="text-muted-foreground mb-6">{submitMessage}</p>
          <Button
            onClick={() => setSubmitStatus("idle")}
            variant="outline"
            className="border-[var(--fc-gold-500)] text-[var(--fc-gold-600)] hover:bg-[var(--fc-gold-500)] hover:text-[var(--fc-navy-900)]"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-[var(--fc-gold-500)]/20">
      <CardHeader>
        <CardTitle className="font-heading text-2xl text-[var(--fc-navy-900)]">Send us a Message</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you within 24 hours during business hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {submitStatus === "error" && (
            <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
              <p className="text-red-700 text-sm">{submitMessage}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[var(--fc-navy-900)]">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`border-[var(--fc-gold-500)]/20 focus:border-[var(--fc-gold-500)] ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Your full name"
                required
              />
              {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[var(--fc-navy-900)]">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`border-[var(--fc-gold-500)]/20 focus:border-[var(--fc-gold-500)] ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="your.email@example.com"
                required
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-[var(--fc-navy-900)]">
              Phone Number (Optional)
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="border-[var(--fc-gold-500)]/20 focus:border-[var(--fc-gold-500)]"
              placeholder="+91 98765 43210"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-[var(--fc-navy-900)]">
              Message *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={`border-[var(--fc-gold-500)]/20 focus:border-[var(--fc-gold-500)] min-h-[120px] ${
                errors.message ? "border-red-500" : ""
              }`}
              placeholder="Tell us about your investment goals, questions, or how we can help you..."
              required
            />
            {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
            <p className="text-xs text-muted-foreground">{formData.message.length}/1000 characters</p>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[var(--fc-gold-500)] hover:bg-[var(--fc-gold-600)] text-[var(--fc-navy-900)] py-6 text-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Sending Message...
              </>
            ) : (
              "Send Message"
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
