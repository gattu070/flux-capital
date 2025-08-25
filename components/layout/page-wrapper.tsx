import type { ReactNode } from "react"
import { TopBar } from "./top-bar"
import { Header } from "./header"
import { Footer } from "./footer"

interface PageWrapperProps {
  children: ReactNode
  showTopBar?: boolean
}

export function PageWrapper({ children, showTopBar = true }: PageWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showTopBar && <TopBar />}
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
