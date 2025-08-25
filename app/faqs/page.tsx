import type { Metadata } from "next"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | FluxCapital",
  description: "Get answers to common questions about FluxCapital's trade consultancy and advisory services.",
}

const faqs = [
  {
    question: "What makes FluxCapital different from other trade consultancies?",
    answer:
      "FluxCapital combines deep regulatory expertise with practical market experience. Our founder, Ayushi Patel, brings years of hands-on trading and compliance knowledge, ensuring our advice is both legally sound and commercially viable.",
  },
  {
    question: "Do you provide investment advice or manage client funds?",
    answer:
      "No, FluxCapital is a consultancy firm that provides advisory services, compliance guidance, and educational content. We do not provide investment advice, manage client funds, or guarantee trading profits.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with individual traders, proprietary trading firms, fintech startups, investment advisors, and financial institutions looking to enhance their trading operations and ensure regulatory compliance.",
  },
  {
    question: "How do your engagement models work?",
    answer:
      "We offer three main engagement models: Essential (one-time consultations), Professional (ongoing monthly support), and Enterprise (comprehensive partnership). Each is tailored to different business needs and scales.",
  },
  {
    question: "What regulatory frameworks do you specialize in?",
    answer:
      "We specialize in Indian financial regulations including SEBI guidelines, RBI norms, and international frameworks like MiFID II. Our expertise covers compliance for trading, advisory services, and fintech operations.",
  },
  {
    question: "Can you help with SEBI registration and licensing?",
    answer:
      "Yes, we provide comprehensive support for SEBI registrations including Investment Advisor, Research Analyst, and Portfolio Manager licenses. We guide you through the entire application process.",
  },
  {
    question: "Do you offer training programs?",
    answer:
      "Yes, we conduct specialized training programs on trading compliance, risk management, and regulatory requirements. These can be customized for your team's specific needs.",
  },
  {
    question: "How quickly can you start working on my project?",
    answer:
      "For Essential consultations, we typically begin within 48 hours. Professional and Enterprise engagements usually commence within 5-7 business days after agreement finalization.",
  },
  {
    question: "What information do you need to get started?",
    answer:
      "We'll need details about your business model, current operations, regulatory concerns, and specific objectives. A preliminary discussion helps us understand your requirements better.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we work with international clients, particularly those looking to enter Indian markets or understand Indian regulatory requirements. However, our primary expertise is in Indian financial regulations.",
  },
  {
    question: "How do you ensure confidentiality?",
    answer:
      "All client information is protected under strict confidentiality agreements. We follow industry-standard data protection practices and never share client details or strategies.",
  },
  {
    question: "What's included in your compliance audits?",
    answer:
      "Our compliance audits include a comprehensive review of your operations, identification of regulatory gaps, risk assessment, and detailed recommendations with implementation timelines.",
  },
  {
    question: "Can you help with ongoing compliance monitoring?",
    answer:
      "Yes, our Professional and Enterprise plans include ongoing compliance monitoring, regular updates on regulatory changes, and periodic reviews to ensure continued adherence.",
  },
  {
    question: "Do you provide documentation templates?",
    answer:
      "Yes, we provide customized documentation including compliance manuals, risk management frameworks, client agreements, and regulatory filing templates.",
  },
  {
    question: "How do you stay updated with regulatory changes?",
    answer:
      "We maintain active relationships with regulatory bodies, participate in industry forums, and continuously monitor official communications to ensure our advice reflects the latest requirements.",
  },
  {
    question: "What happens if regulations change during our engagement?",
    answer:
      "We proactively monitor regulatory changes and immediately inform our clients of any impacts. Professional and Enterprise clients receive updated guidance as part of their ongoing support.",
  },
  {
    question: "Can you help with technology compliance?",
    answer:
      "Yes, we assist with technology-related compliance including algorithmic trading approvals, system audits, data protection requirements, and fintech regulatory frameworks.",
  },
  {
    question: "Do you offer emergency consultation services?",
    answer:
      "Yes, we provide urgent consultation services for time-sensitive regulatory matters. Emergency consultations are available within 24 hours for existing clients.",
  },
  {
    question: "How do you measure success in your engagements?",
    answer:
      "Success is measured through regulatory compliance achievement, risk reduction, operational efficiency improvements, and client satisfaction. We provide regular progress reports and metrics.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "We offer a satisfaction guarantee on our Essential consultations. For ongoing engagements, we work closely with clients to ensure expectations are met. Specific terms are outlined in our service agreements.",
  },
]

export default function FAQsPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, processes, and expertise. Can't find what you're
              looking for? Contact us directly.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-navy-200 rounded-lg px-6 py-2 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-navy-900 hover:text-gold-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-navy-700 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center">
            <div className="bg-navy-50 rounded-xl p-8">
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Still Have Questions?</h3>
              <p className="text-navy-600 mb-6">
                Our team is here to help. Get in touch for personalized answers to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  className="bg-navy-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
