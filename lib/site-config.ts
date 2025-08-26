export const siteConfig = {
  name: "FluxCapital",
  tagline: "More Than Investment, It's Momentum.",
  description:
    "FluxCapital is a discipline-first trade advisory guiding thoughtful investors with research-backed strategy, risk control, and clear communication.",
  url: "https://fluxtrading.in",

  // Contact Information
  email: "fluxcapital11@gmail.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919876543210",
  instagram: "https://www.instagram.com/fluxcapital_?igsh=ZzNwb3V2NGZ4d2d2",

  // Business Details
  address: "Mumbai, Maharashtra, India",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM IST",
  mapLink: "https://maps.google.com",

  // Owner/CEO
  owner: {
    name: "Ayushi Patel",
    title: "Owner, Author & CEO",
    bio: "Ayushi Patel brings over a decade of experience in financial markets, specializing in risk-controlled trading strategies and disciplined investment approaches.",
  },

  // Brand Values
  values: ["Integrity", "Prudence", "Discipline", "Transparency"],

  // Navigation
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Performance", href: "/performance" },
    { name: "Pricing", href: "/pricing" },
    { name: "Insights", href: "/insights" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ],

  // Services
  services: [
    {
      name: "Trade Consultancy & Advisory",
      description: "Expert guidance on equity and derivative trading strategies",
      icon: "TrendingUp",
    },
    {
      name: "Portfolio Strategy",
      description: "Comprehensive portfolio construction and optimization",
      icon: "PieChart",
    },
    {
      name: "Risk Management",
      description: "Advanced risk assessment and mitigation strategies",
      icon: "Shield",
    },
    {
      name: "Research & Insights",
      description: "In-depth market analysis and investment research",
      icon: "Search",
    },
    {
      name: "Training & Workshops",
      description: "Educational programs for informed investment decisions",
      icon: "GraduationCap",
    },
  ],
} as const

export type SiteConfig = typeof siteConfig
