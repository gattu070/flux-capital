import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | FluxCapital",
  description: "Join FluxCapital and build your career in trade consultancy and financial advisory services.",
}

const openPositions = [
  {
    title: "Senior Compliance Analyst",
    department: "Compliance",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "3-5 years",
    description: "Lead compliance reviews and regulatory analysis for our growing client base.",
    requirements: [
      "CA/CS/CFA qualification preferred",
      "Strong knowledge of SEBI regulations",
      "Experience in financial services compliance",
      "Excellent analytical and communication skills",
    ],
  },
  {
    title: "Business Development Associate",
    department: "Sales",
    location: "Remote/Mumbai",
    type: "Full-time",
    experience: "2-4 years",
    description: "Drive business growth by identifying and developing new client relationships.",
    requirements: [
      "MBA or equivalent business qualification",
      "Experience in B2B sales, preferably financial services",
      "Strong networking and relationship-building skills",
      "Results-driven with proven track record",
    ],
  },
  {
    title: "Research Analyst Intern",
    department: "Research",
    location: "Mumbai, India",
    type: "Internship",
    experience: "0-1 years",
    description: "Support our research team in market analysis and regulatory updates.",
    requirements: [
      "Currently pursuing or recently completed finance/economics degree",
      "Strong analytical and research skills",
      "Proficiency in Excel and financial modeling",
      "Keen interest in financial markets",
    ],
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Professional Growth",
    description:
      "Accelerate your career with mentorship from industry experts and exposure to diverse financial markets.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work in a supportive environment that values innovation, integrity, and continuous learning.",
  },
  {
    icon: MapPin,
    title: "Flexible Work",
    description: "Enjoy flexible working arrangements with options for remote work and flexible hours.",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Maintain a healthy work-life balance with competitive leave policies and wellness programs.",
  },
]

export default function CareersPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
            Build Your Career with FluxCapital
          </h1>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto mb-8">
            Join our team of financial experts and help shape the future of trade consultancy. We're looking for
            passionate professionals who share our commitment to excellence.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-12">Why Choose FluxCapital?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-navy-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <CardTitle className="text-navy-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-12">Open Positions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-navy-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-navy-900 mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-navy-100 text-navy-700">
                          {position.department}
                        </Badge>
                        <Badge variant="outline" className="border-gold-300 text-gold-700">
                          {position.type}
                        </Badge>
                        <Badge variant="outline" className="border-navy-300 text-navy-700">
                          {position.experience}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-sm text-navy-600 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-700 mb-4">{position.description}</p>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Key Requirements:</h4>
                    <ul className="list-disc list-inside text-navy-600 space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a
                      href="/contact"
                      className="bg-gold-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gold-600 transition-colors inline-block"
                    >
                      Apply Now
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-navy-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-8">Application Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gold-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Submit Application</h3>
              <p className="text-navy-600">Send your resume and cover letter through our contact form.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gold-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Initial Screening</h3>
              <p className="text-navy-600">We'll review your application and conduct a preliminary interview.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gold-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Final Interview</h3>
              <p className="text-navy-600">Meet with our team for a comprehensive discussion about the role.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Don't See the Right Role?</h2>
          <p className="text-xl text-navy-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to
            contribute to FluxCapital.
          </p>
          <a
            href="/contact"
            className="bg-navy-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors inline-block"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </>
  )
}
