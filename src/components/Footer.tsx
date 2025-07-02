import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-earth-800 text-cream-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-weave-pattern opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 gradient-terracotta rounded-full flex items-center justify-center shadow-lg">
                <span className="text-cream-50 font-bold text-xl">AT</span>
              </div>
              <span className="font-playfair text-2xl font-bold text-cream-50">Artisan Threads</span>
            </div>
            <p className="text-earth-300 leading-relaxed">
              Preserving traditional craftsmanship while creating beautiful, sustainable textiles for the modern world.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-terracotta-600 rounded-full flex items-center justify-center text-cream-50 hover:bg-terracotta-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-sage-600 rounded-full flex items-center justify-center text-cream-50 hover:bg-sage-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-ochre-600 rounded-full flex items-center justify-center text-cream-50 hover:bg-ochre-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-cream-50 mb-6 border-b-2 border-terracotta-500 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products"
                  className="text-earth-300 hover:text-terracotta-400 transition-colors flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-terracotta-500 rounded-full"></span>
                  <span>All Products</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-earth-300 hover:text-sage-400 transition-colors flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-sage-500 rounded-full"></span>
                  <span>Our Story</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/bulk-inquiry"
                  className="text-earth-300 hover:text-ochre-400 transition-colors flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-ochre-500 rounded-full"></span>
                  <span>Bulk Orders</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-earth-300 hover:text-terracotta-400 transition-colors flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-terracotta-500 rounded-full"></span>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-cream-50 mb-6 border-b-2 border-sage-500 pb-2 inline-block">
              Categories
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products?category=textiles"
                  className="text-earth-300 hover:text-terracotta-400 transition-colors flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-terracotta-500 rounded-full"></span>
                  <span>Handloom Textiles</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=home-decor"
                  className="text-earth-300 hover:text-sage-400 transition-colors flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-sage-500 rounded-full"></span>
                  <span>Home Decor</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=accessories"
                  className="text-earth-300 hover:text-ochre-400 transition-colors flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-ochre-500 rounded-full"></span>
                  <span>Accessories</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=pottery"
                  className="text-earth-300 hover:text-rust-400 transition-colors flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-rust-500 rounded-full"></span>
                  <span>Pottery & Ceramics</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-cream-50 mb-6 border-b-2 border-ochre-500 pb-2 inline-block">
              Stay Connected
            </h3>
            <p className="text-earth-300 mb-6 leading-relaxed">
              Subscribe to get updates on new collections and artisan stories.
            </p>
            <div className="space-y-4">
              <div className="flex rounded-full overflow-hidden shadow-lg">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-earth-700 text-cream-100 placeholder-earth-400 focus:outline-none focus:bg-earth-600"
                />
                <button className="px-6 py-3 gradient-terracotta text-cream-50 hover:shadow-lg transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-3 text-earth-300">
                <div className="w-8 h-8 bg-terracotta-600 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-cream-50" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-earth-300">
                <div className="w-8 h-8 bg-sage-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-cream-50" />
                </div>
                <span>123 Artisan Street, Craft City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-earth-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-earth-400">© 2024 Artisan Threads. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/privacy" className="text-earth-400 hover:text-terracotta-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-earth-400 hover:text-sage-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
