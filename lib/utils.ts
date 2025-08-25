import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatWhatsAppLink(number: string, message?: string): string {
  const cleanNumber = number.replace(/\D/g, "")
  const encodedMessage = message ? encodeURIComponent(message) : ""
  return `https://wa.me/${cleanNumber}${encodedMessage ? `?text=${encodedMessage}` : ""}`
}

export function formatPhoneNumber(number: string): string {
  const cleaned = number.replace(/\D/g, "")
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`
  }
  return number
}

export function generateMetadata(title: string, description?: string, path?: string) {
  return {
    title,
    description: description || "FluxCapital - More Than Investment, It's Momentum.",
    openGraph: {
      title,
      description: description || "FluxCapital - More Than Investment, It's Momentum.",
      url: `https://fluxtrading.in${path || ""}`,
    },
    twitter: {
      title,
      description: description || "FluxCapital - More Than Investment, It's Momentum.",
    },
  }
}
