import type { Metadata } from "next"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Insights & Analysis | FluxCapital",
  description:
    "Expert insights on trading, compliance, and financial markets from FluxCapital's team of professionals.",
}

const articles = [
  {
    slug: "sebi-new-regulations-2024",
    title: "SEBI's New Regulations for 2024: What Traders Need to Know",
    excerpt:
      "A comprehensive breakdown of the latest SEBI regulations and their impact on individual and institutional traders.",
    author: "Ayushi Patel",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Regulation",
    featured: true,
  },
  {
    slug: "risk-management-strategies",
    title: "Advanced Risk Management Strategies for Modern Traders",
    excerpt: "Explore sophisticated risk management techniques that professional traders use to protect their capital.",
    author: "Ayushi Patel",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Trading",
  },
  {
    slug: "compliance-checklist-2024",
    title: "The Ultimate Compliance Checklist for Financial Advisors",
    excerpt: "A detailed checklist to ensure your advisory practice meets all regulatory requirements in 2024.",
    author: "Ayushi Patel",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Compliance",
  },
  {
    slug: "algorithmic-trading-regulations",
    title: "Navigating Algorithmic Trading Regulations in India",
    excerpt: "Understanding the regulatory framework for algorithmic trading and how to ensure compliance.",
    author: "Ayushi Patel",
    date: "2023-12-28",
    readTime: "10 min read",
    category: "Technology",
  },
  {
    slug: "market-volatility-analysis",
    title: "Market Volatility Analysis: Opportunities and Risks",
    excerpt: "How to identify and capitalize on market volatility while managing associated risks effectively.",
    author: "Ayushi Patel",
    date: "2023-12-20",
    readTime: "9 min read",
    category: "Analysis",
  },
  {
    slug: "fintech-compliance-guide",
    title: "Fintech Compliance: A Comprehensive Guide for Startups",
    excerpt: "Essential compliance considerations for fintech startups entering the Indian market.",
    author: "Ayushi Patel",
    date: "2023-12-15",
    readTime: "11 min read",
    category: "Fintech",
  },
]

const categories = ["All", "Regulation", "Trading", "Compliance", "Technology", "Analysis", "Fintech"]

export default function InsightsPage() {
  const featuredArticle = articles.find((article) => article.featured)
  const regularArticles = articles.filter((article) => !article.featured)

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">Insights & Analysis</h1>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Stay informed with expert insights on trading, compliance, and financial markets. Our team shares practical
            knowledge to help you navigate the complex world of finance.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <Card className="border-gold-200 bg-gradient-to-r from-gold-50 to-navy-50 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-gold-500 text-white">Featured</Badge>
                  <Badge variant="outline" className="border-navy-300 text-navy-700">
                    {featuredArticle.category}
                  </Badge>
                </div>
                <CardTitle className="text-2xl md:text-3xl font-serif text-navy-900 mb-4">
                  {featuredArticle.title}
                </CardTitle>
                <p className="text-lg text-navy-600 mb-6">{featuredArticle.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-navy-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredArticle.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                  <span>By {featuredArticle.author}</span>
                </div>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/insights/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 ${
                  category === "All"
                    ? "bg-navy-900 text-white hover:bg-navy-800"
                    : "border-navy-300 text-navy-700 hover:bg-navy-50"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularArticles.map((article) => (
            <Card key={article.slug} className="border-navy-200 hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader className="flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-navy-300 text-navy-700">
                    {article.category}
                  </Badge>
                  <span className="text-sm text-navy-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl font-serif text-navy-900 mb-3 line-clamp-2">{article.title}</CardTitle>
                <p className="text-navy-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-navy-500 mt-auto">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span>By {article.author}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-700 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-navy-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Stay Updated</h2>
          <p className="text-navy-200 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, regulatory updates, and market analysis delivered to
            your inbox.
          </p>
          <Link
            href="/contact"
            className="bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors inline-block"
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </>
  )
}
