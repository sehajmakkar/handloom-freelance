import Image from "next/image"
import { Users, Award, Leaf, Heart, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-earth-100 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-earth-900 mb-6">Our Story</h1>
            <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
              For over three generations, we've been preserving the ancient art of handloom weaving and traditional
              handicrafts, connecting skilled artisans with the world.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-earth-900 mb-6">
                A Legacy of Craftsmanship
              </h2>
              <div className="space-y-6 text-earth-700">
                <p className="leading-relaxed">
                  Founded in 1975 by Master Craftsman Arjun Sharma, Artisan Threads began as a small workshop in the
                  heart of India's textile region. What started as a passion project to preserve traditional weaving
                  techniques has grown into a global platform connecting hundreds of skilled artisans with customers
                  worldwide.
                </p>
                <p className="leading-relaxed">
                  Our journey has been guided by a simple yet powerful belief: that traditional crafts are not just
                  products, but carriers of culture, stories, and the dreams of the artisans who create them. Every
                  thread woven, every pattern carved, and every piece painted carries forward centuries of inherited
                  wisdom.
                </p>
                <p className="leading-relaxed">
                  Today, we work with over 500 artisan families across India, providing them with fair wages,
                  sustainable livelihoods, and a global platform to showcase their incredible talents. Our commitment
                  extends beyond business – we're preserving cultural heritage for future generations.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Artisan at work"
                width={600}
                height={500}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-terracotta-500 text-cream-50 p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">1975</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-earth-900 mb-4">Our Values</h2>
            <p className="text-earth-600 max-w-2xl mx-auto">
              Every decision we make is guided by our core values that shape how we work with artisans, serve our
              customers, and impact our communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-cream-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-cream-50" />
              </div>
              <h3 className="font-semibold text-earth-900 mb-3">Quality Excellence</h3>
              <p className="text-earth-600 text-sm">
                We maintain the highest standards in every product, ensuring each piece meets our rigorous quality
                benchmarks.
              </p>
            </div>

            <div className="text-center bg-cream-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-sage-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-cream-50" />
              </div>
              <h3 className="font-semibold text-earth-900 mb-3">Sustainability</h3>
              <p className="text-earth-600 text-sm">
                We use eco-friendly materials and processes, supporting sustainable practices that protect our
                environment.
              </p>
            </div>

            <div className="text-center bg-cream-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-terracotta-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-cream-50" />
              </div>
              <h3 className="font-semibold text-earth-900 mb-3">Artisan Empowerment</h3>
              <p className="text-earth-600 text-sm">
                We provide fair wages, skill development, and long-term partnerships that empower artisan communities.
              </p>
            </div>

            <div className="text-center bg-cream-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-sage-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-cream-50" />
              </div>
              <h3 className="font-semibold text-earth-900 mb-3">Cultural Preservation</h3>
              <p className="text-earth-600 text-sm">
                We actively work to preserve traditional crafts and techniques, passing them on to future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artisan Partners */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-earth-900 mb-4">Our Artisan Partners</h2>
            <p className="text-earth-600 max-w-2xl mx-auto">
              Meet some of the talented artisans who bring our products to life with their skill, passion, and
              dedication to their craft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Meera Devi",
                craft: "Block Printing",
                experience: "20 years",
                location: "Rajasthan",
                story:
                  "Meera learned block printing from her grandmother and now teaches the craft to young women in her village.",
              },
              {
                name: "Ravi Kumar",
                craft: "Handloom Weaving",
                experience: "15 years",
                location: "Tamil Nadu",
                story:
                  "Ravi specializes in traditional silk weaving and has won several awards for his intricate designs.",
              },
              {
                name: "Lakshmi Sharma",
                craft: "Pottery",
                experience: "25 years",
                location: "Gujarat",
                story:
                  "Lakshmi creates beautiful ceramic pieces using techniques passed down through five generations.",
              },
            ].map((artisan, index) => (
              <div key={index} className="bg-cream-50 rounded-xl p-6 border border-earth-200">
                <div className="w-20 h-20 bg-earth-300 rounded-full mx-auto mb-4"></div>
                <div className="text-center">
                  <h3 className="font-semibold text-earth-900 mb-1">{artisan.name}</h3>
                  <p className="text-terracotta-600 text-sm font-medium mb-1">{artisan.craft}</p>
                  <p className="text-earth-600 text-xs mb-3">
                    {artisan.experience} • {artisan.location}
                  </p>
                  <p className="text-earth-700 text-sm leading-relaxed">{artisan.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Practices */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-earth-900 mb-6">
                Sustainable Practices
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sage-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Leaf className="w-4 h-4 text-cream-50" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-900 mb-2">Natural Materials</h3>
                    <p className="text-earth-700 text-sm">
                      We use only natural, biodegradable materials like organic cotton, silk, jute, and natural dyes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sage-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-cream-50" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-900 mb-2">Fair Trade</h3>
                    <p className="text-earth-700 text-sm">
                      All our artisan partners receive fair wages and work in safe, healthy environments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sage-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-cream-50" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-900 mb-2">Carbon Neutral Shipping</h3>
                    <p className="text-earth-700 text-sm">
                      We offset our shipping emissions and use minimal, recyclable packaging materials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Sustainable practices"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-terracotta-500 to-terracotta-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-cream-50 mb-4">Join Our Journey</h2>
          <p className="text-terracotta-100 text-lg mb-8 max-w-2xl mx-auto">
            When you choose Artisan Threads, you're not just buying a product – you're supporting traditional crafts,
            empowering artisan communities, and preserving cultural heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 bg-cream-50 text-terracotta-600 rounded-lg hover:bg-cream-100 transition-colors font-medium"
            >
              Explore Our Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-cream-50 text-cream-50 rounded-lg hover:bg-cream-50 hover:text-terracotta-600 transition-colors font-medium"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
