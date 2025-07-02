import Hero from "../components/Hero"
import ProductCard from "../components/ProductCard"
import Link from "next/link"
import { ArrowRight, Award, Leaf, Heart, Globe } from "lucide-react"

// Sample products data
const featuredProducts = [
  {
    id: "1",
    name: "Handwoven Silk Saree",
    category: "Textiles",
    price: 299.99,
    image: "/saree.webp",
    material: "Pure Silk",
    bulkAvailable: true,
    description: "Exquisite handwoven silk saree with traditional motifs, crafted by master weavers.",
  },
  {
    id: "2",
    name: "Ceramic Vase Set",
    category: "Home Decor",
    price: 89.99,
    image: "/vase.jpg",
    material: "Clay & Glaze",
    bulkAvailable: true,
    description: "Beautiful ceramic vases with hand-painted designs, perfect for modern homes.",
  },
  {
    id: "3",
    name: "Jute Wall Hanging",
    category: "Home Decor",
    price: 45.99,
    image: "/jute.webp",
    material: "Natural Jute",
    bulkAvailable: false,
    description: "Eco-friendly jute wall hanging with intricate macrame patterns.",
  },
  {
    id: "4",
    name: "Handcrafted Jewelry Box",
    category: "Accessories",
    price: 129.99,
    image: "/jewel.jpg",
    material: "Rosewood",
    bulkAvailable: true,
    description: "Elegant wooden jewelry box with traditional carvings and velvet lining.",
  },
]

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Featured Products */}
      <section className="py-20 gradient-sage bg-weave-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-1 gradient-terracotta rounded-full"></div>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-earth-900 text-shadow">
                Featured Collections
              </h2>
              <div className="w-16 h-1 gradient-terracotta rounded-full"></div>
            </div>
            <p className="text-earth-700 max-w-3xl mx-auto text-lg leading-relaxed">
              Discover our most popular handcrafted pieces, each telling a unique story of tradition and artistry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center px-12 py-4 gradient-terracotta text-cream-50 rounded-full hover:shadow-xl transition-all duration-300 font-bold text-lg transform hover:scale-105"
            >
              View All Products
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 gradient-warm bg-mandala-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-1 gradient-sage rounded-full"></div>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-earth-900 text-shadow">Our Values</h2>
              <div className="w-16 h-1 gradient-sage rounded-full"></div>
            </div>
            <p className="text-earth-700 max-w-3xl mx-auto text-lg leading-relaxed">
              Every piece we create is guided by our commitment to quality, sustainability, and cultural preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center gradient-warm p-8 rounded-2xl card-shadow-lg border-2 border-terracotta-200 hover:border-terracotta-400 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 gradient-terracotta rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="w-10 h-10 text-cream-50" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-earth-900 mb-3">Premium Quality</h3>
              <p className="text-earth-600 leading-relaxed">
                Each product undergoes rigorous quality checks to ensure excellence.
              </p>
            </div>

            <div className="text-center gradient-sage p-8 rounded-2xl card-shadow-lg border-2 border-sage-200 hover:border-sage-400 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-sage-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Leaf className="w-10 h-10 text-cream-50" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-earth-900 mb-3">Sustainable</h3>
              <p className="text-earth-600 leading-relaxed">
                Eco-friendly materials and processes that respect our environment.
              </p>
            </div>

            <div className="text-center gradient-warm p-8 rounded-2xl card-shadow-lg border-2 border-ochre-200 hover:border-ochre-400 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-ochre-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-10 h-10 text-cream-50" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-earth-900 mb-3">Artisan Support</h3>
              <p className="text-earth-600 leading-relaxed">
                Fair wages and support for traditional craftspeople and their families.
              </p>
            </div>

            <div className="text-center gradient-sage p-8 rounded-2xl card-shadow-lg border-2 border-rust-200 hover:border-rust-400 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-rust-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Globe className="w-10 h-10 text-cream-50" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-earth-900 mb-3">Global Reach</h3>
              <p className="text-earth-600 leading-relaxed">
                Bringing authentic crafts to customers worldwide with care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-terracotta bg-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-mandala-pattern opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-cream-50 mb-6 text-shadow">
            Ready to Start Your Journey?
          </h2>
          <p className="text-terracotta-100 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re looking for a single special piece or planning a bulk order, we&apos;re here to help you discover
            the perfect handcrafted treasures.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-12 py-4 bg-cream-50 text-terracotta-600 rounded-full hover:bg-cream-100 hover:shadow-xl transition-all duration-300 font-bold text-lg transform hover:scale-105"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-12 py-4 border-3 border-cream-50 text-cream-50 rounded-full hover:bg-cream-50 hover:text-terracotta-600 transition-all duration-300 font-bold text-lg transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
