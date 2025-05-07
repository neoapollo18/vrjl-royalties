"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll event listener to detect when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black bg-opacity-90 py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-white font-bold text-2xl tracking-tight">VRJL</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-12">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/#features" className="nav-link">
            Features
          </Link>
          <Link href="/#contact" className="nav-link">
            Contact
          </Link>
          <Link href="/signup" className="btn-primary">
            Get Started
          </Link>
        </nav>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 absolute top-16 left-0 right-0 p-6 z-50">
          <nav className="flex flex-col space-y-8">
            <Link href="/" className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/#features" className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
            <Link href="/#contact" className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link href="/signup" className="btn-primary block text-center" onClick={() => setMobileMenuOpen(false)}>
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
