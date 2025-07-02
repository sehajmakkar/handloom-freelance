import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative gradient-warm bg-mandala-pattern overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-weave-pattern opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-8">
          {/* Company Name & Tagline */}
          <div className="space-y-4">
            <h1 className="font-playfair text-4xl sm:text-6xl lg:text-7xl font-bold text-earth-900 text-shadow">
              <span className="text-terracotta-500">Haryana</span> Handicrafts
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-earth-700 font-medium max-w-2xl mx-auto">
              Where Heritage Meets Modern Elegance
            </p>
            <div className="flex items-center justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-ochre-500 fill-current" />
              ))}
              <span className="text-earth-600 ml-2 font-medium">Trusted by 10,000+ customers</span>
            </div>
          </div>

          {/* Product Showcase Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
            {/* Main Featured Product */}
            <div className="col-span-2 lg:col-span-2 lg:row-span-2 relative group">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden card-shadow-lg h-64 sm:h-80 lg:h-96">
                <Image
                  src="/saree1.webp"
                  alt="Handwoven Silk Saree"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/40 backdrop-blur-sm rounded-lg p-3">
                  <h3 className="text-cream-50 font-playfair text-lg sm:text-xl lg:text-2xl font-bold mb-1">
                    Handwoven Silk Saree
                  </h3>
                  <p className="text-cream-200 text-sm lg:text-base">From ₹299</p>
                </div>
                <div className="absolute top-4 right-4 gradient-terracotta text-cream-50 px-3 py-1 rounded-full text-xs font-semibold">
                  Bestseller
                </div>
              </div>
            </div>

            {/* Secondary Products */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden card-shadow h-32 sm:h-40 lg:h-44">
                <Image
                  src="/vase.jpg"
                  alt="Ceramic Vase"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 bg-white/50 backdrop-blur-sm rounded p-2">
                  <h4 className="text-cream-50 font-semibold text-sm lg:text-base">Ceramic Vase</h4>
                  <p className="text-cream-200 text-xs">₹89</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden card-shadow h-32 sm:h-40 lg:h-44">
                <Image
                  src="/jute.webp"
                  alt="Jute Wall Art"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 bg-white/50 backdrop-blur-sm rounded p-2">
                  <h4 className="text-cream-50 font-semibold text-sm lg:text-base">Jute Wall Art</h4>
                  <p className="text-cream-200 text-xs">₹45</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden card-shadow h-32 sm:h-40 lg:h-44">
                <Image
                  src="/jewel.jpg"
                  alt="Wooden Jewelry Box"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 bg-white/50 backdrop-blur-sm rounded p-2">
                  <h4 className="text-cream-50 font-semibold text-sm lg:text-base">Jewelry Box</h4>
                  <p className="text-cream-200 text-xs">₹129</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden card-shadow h-32 sm:h-40 lg:h-44">
                <Image
                  src="/block.jpeg"
                  alt="Block Print Textile"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 bg-white/50 backdrop-blur-sm rounded p-2">
                  <h4 className="text-cream-50 font-semibold text-sm lg:text-base">Block Print</h4>
                  <p className="text-cream-200 text-xs">₹79</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link
              href="/products"
              className="flex-1 inline-flex items-center justify-center px-8 py-4 gradient-terracotta text-cream-50 rounded-full hover:shadow-xl transition-all duration-300 font-semibold transform hover:scale-105"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/bulk-inquiry"
              className="flex-1 inline-flex items-center justify-center px-8 py-4 border-2 border-sage-400 text-sage-700 rounded-full hover:gradient-sage hover:text-cream-50 transition-all duration-300 font-semibold transform hover:scale-105"
            >
              Bulk Orders
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto pt-8 border-t border-earth-200">
            <div className="text-center">
              <div className="font-playfair text-2xl sm:text-3xl font-bold text-terracotta-600">500+</div>
              <div className="text-earth-600 text-sm font-medium">Artisans</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-2xl sm:text-3xl font-bold text-sage-600">25+</div>
              <div className="text-earth-600 text-sm font-medium">Years</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-2xl sm:text-3xl font-bold text-ochre-500">10k+</div>
              <div className="text-earth-600 text-sm font-medium">Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-4 sm:left-8 gradient-sage p-3 sm:p-4 rounded-2xl card-shadow-lg border-2 border-sage-200 hidden sm:block">
        <div className="text-center">
          <div className="font-playfair text-lg font-bold text-earth-900">100%</div>
          <div className="text-earth-700 text-xs">Authentic</div>
        </div>
      </div>

      <div className="absolute top-32 right-4 sm:right-8 gradient-warm p-3 sm:p-4 rounded-2xl card-shadow border-2 border-ochre-300 hidden sm:block">
        <div className="text-center">
          <div className="font-playfair text-lg font-bold text-ochre-600">★★★★★</div>
          <div className="text-earth-700 text-xs">Premium</div>
        </div>
      </div>

      <div className="absolute bottom-20 left-4 sm:left-8 gradient-terracotta p-3 sm:p-4 rounded-2xl card-shadow-lg border-2 border-terracotta-200 hidden lg:block">
        <div className="text-center">
          <div className="font-playfair text-lg font-bold text-cream-50">Free</div>
          <div className="text-cream-200 text-xs">Shipping</div>
        </div>
      </div>
    </section>
  )
}