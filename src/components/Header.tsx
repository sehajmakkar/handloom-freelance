"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingBag, Users } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="gradient-warm shadow-lg border-b-2 border-terracotta-200 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-terracotta rounded-full flex items-center justify-center shadow-lg">
              <span className="text-cream-50 font-bold text-lg">HH</span>
            </div>
            <span className="font-playfair text-2xl font-bold text-earth-800 text-shadow">Haryana Handlooms</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-earth-700 hover:text-terracotta-600 font-medium transition-all duration-300 hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-earth-700 hover:text-terracotta-600 font-medium transition-all duration-300 hover:scale-105"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-earth-700 hover:text-terracotta-600 font-medium transition-all duration-300 hover:scale-105"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-earth-700 hover:text-terracotta-600 font-medium transition-all duration-300 hover:scale-105"
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/bulk-inquiry"
              className="flex items-center space-x-2 px-6 py-2 border-2 border-sage-400 text-sage-700 rounded-full hover:bg-sage-50 hover:border-sage-500 transition-all duration-300 font-medium shadow-md"
            >
              <Users className="w-4 h-4" />
              <span>Bulk Inquiry</span>
            </Link>
            <Link
              href="/products"
              className="flex items-center space-x-2 px-6 py-2 gradient-terracotta text-cream-50 rounded-full hover:shadow-lg transition-all duration-300 font-medium transform hover:scale-105"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shop Retail</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-earth-700">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-earth-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-earth-700 hover:text-terracotta-600 transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-earth-700 hover:text-terracotta-600 transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-earth-700 hover:text-terracotta-600 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-earth-700 hover:text-terracotta-600 transition-colors">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link
                  href="/bulk-inquiry"
                  className="flex items-center justify-center space-x-2 px-4 py-2 border border-earth-300 text-earth-700 rounded-md"
                >
                  <Users className="w-4 h-4" />
                  <span>Bulk Inquiry</span>
                </Link>
                <Link
                  href="/products"
                  className="flex items-center justify-center space-x-2 px-4 py-2 bg-terracotta-500 text-cream-50 rounded-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Shop Retail</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
