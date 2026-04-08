"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full"
    >
      <div className="mx-auto mt-4 w-full max-w-6xl px-4 md:px-6">
        <div className={`rounded-2xl border transition-all duration-300 ${
          scrolled 
            ? "border-slate-200/80 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-xl" 
            : "border-white/40 bg-white/70 backdrop-blur-md"
        }`}>
          <div className="flex h-16 items-center justify-between px-6">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/smart-logo.png"
                alt="Smart.R"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="#product"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600"
              >
                Product
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600"
              >
                Pricing
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600"
              >
                About Us
              </Link>
            </nav>

            {/* Book a Demo Button */}
            <div className="hidden md:block">
              <Button 
                className="rounded-full bg-emerald-500 px-6 font-semibold text-white shadow-md shadow-emerald-500/20 transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                Book a Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden rounded-lg p-2 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="size-6 text-slate-700" /> : <Menu className="size-6 text-slate-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mx-auto mt-2 w-full max-w-6xl px-4 md:hidden"
        >
          <div className="rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-xl backdrop-blur-xl">
            <nav className="flex flex-col gap-4">
              <Link
                href="#product"
                className="text-lg font-medium text-slate-700 transition-colors hover:text-emerald-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Product
              </Link>
              <Link
                href="#pricing"
                className="text-lg font-medium text-slate-700 transition-colors hover:text-emerald-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#about"
                className="text-lg font-medium text-slate-700 transition-colors hover:text-emerald-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Book a Demo in Mobile Menu */}
              <Button 
                className="mt-4 w-full rounded-full bg-emerald-500 py-6 text-lg font-semibold text-white shadow-md shadow-emerald-500/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Demo
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
