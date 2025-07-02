"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ShoppingCart,
  MessageCircle,
  Heart,
  Share2,
  Star,
  Truck,
  Shield,
  RotateCcw,
  Plus,
  Minus,
  Zap,
} from "lucide-react"

// Sample product data - in a real app, this would come from an API
const product = {
  id: "1",
  name: "Handwoven Silk Saree",
  category: "Textiles",
  price: 299.99,
  originalPrice: 399.99,
  bulkPrice: "Starting from ₹199 (Min. 50 pieces)",
  images: [
    "/saree.webp",
    "/saree1.webp",
  ],
  material: "Pure Silk",
  colors: ["Crimson Red", "Royal Blue", "Emerald Green", "Golden Yellow"],
  sizes: ["Free Size", "Petite", "Plus Size"],
  bulkAvailable: true,
  description:
    "This exquisite handwoven silk saree represents the pinnacle of traditional Indian craftsmanship. Each thread is carefully selected and woven by master artisans who have inherited their skills through generations.",
  features: [
    "Hand-woven by master artisans",
    "100% pure mulberry silk",
    "Traditional motifs and patterns",
    "Natural dyes used for coloring",
    "Comes with matching blouse piece",
    "Dry clean recommended",
  ],
  specifications: {
    Length: "6.5 meters",
    Width: "1.2 meters",
    Weight: "650 grams",
    "Thread Count": "400 per inch",
    Origin: "Varanasi, India",
    Care: "Dry clean only",
  },
  artisan: {
    name: "Rajesh Kumar",
    experience: "25 years",
    location: "Varanasi, India",
    image: "/placeholder.svg?height=100&width=100",
  },
  rating: 4.8,
  reviews: 127,
  inStock: true,
  stockCount: 15,
  estimatedDelivery: "5-7 business days",
}

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("features")

  const handleWhatsAppBulkInquiry = () => {
    const message = `Hi! I am interested in bulk ordering the ${product.name}. 
    
Product Details:
- Name: ${product.name}
- Price: ₹${product.price}
- Color: ${selectedColor}
- Size: ${selectedSize}

Please provide bulk pricing and minimum order quantity details.`

    const whatsappUrl = `https://wa.me/9028320000?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleWhatsAppSingleInquiry = () => {
    const message = `Hi! I have a question about the ${product.name}.
    
Product Details:
- Name: ${product.name}
- Price: ₹${product.price}
- Color: ${selectedColor}
- Size: ${selectedSize}

Could you please help me with more information?`

    const whatsappUrl = `https://wa.me/9028320000?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-earth-600 mb-8">
          <Link href="/" className="hover:text-terracotta-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-terracotta-600">
            Products
          </Link>
          <span>/</span>
          <span className="text-earth-900">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center space-x-2 text-earth-600 hover:text-terracotta-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden gradient-sage card-shadow-lg">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-xl overflow-hidden card-shadow transition-all duration-300 ${
                    selectedImage === index ? "ring-4 ring-terracotta-500" : "hover:ring-2 ring-earth-300"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="gradient-terracotta text-cream-50 px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-earth-600 hover:text-terracotta-600 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-earth-600 hover:text-terracotta-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <h1 className="font-playfair text-3xl lg:text-4xl font-bold text-earth-900 mb-4">{product.name}</h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? "text-ochre-500 fill-current" : "text-earth-300"
                      }`}
                    />
                  ))}
                  <span className="text-earth-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="text-3xl font-bold text-earth-900">₹{product.price}</div>
                <div className="text-xl text-earth-500 line-through">₹{product.originalPrice}</div>
                <div className="gradient-sage text-cream-50 px-3 py-1 rounded-full text-sm font-semibold">25% OFF</div>
              </div>

              {product.bulkAvailable && (
                <div className="gradient-warm p-4 rounded-xl border-2 border-sage-300 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="w-5 h-5 text-sage-600" />
                    <span className="font-semibold text-earth-900">Bulk Pricing Available</span>
                  </div>
                  <p className="text-earth-700">{product.bulkPrice}</p>
                </div>
              )}

              <p className="text-earth-700 leading-relaxed mb-6">{product.description}</p>
            </div>

            {/* Product Options */}
            <div className="space-y-6">
              {/* Color Selection */}
              <div>
                <h3 className="font-semibold text-earth-900 mb-3">Color: {selectedColor}</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                        selectedColor === color
                          ? "border-terracotta-500 gradient-terracotta text-cream-50"
                          : "border-earth-300 text-earth-700 hover:border-terracotta-300"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="font-semibold text-earth-900 mb-3">Size: {selectedSize}</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                        selectedSize === size
                          ? "border-sage-500 gradient-sage text-cream-50"
                          : "border-earth-300 text-earth-700 hover:border-sage-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="font-semibold text-earth-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border-2 border-earth-300 rounded-full">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-earth-100 rounded-l-full transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                      className="p-2 hover:bg-earth-100 rounded-r-full transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-earth-600 text-sm">{product.stockCount} pieces available</span>
                </div>
              </div>
            </div>

            {/* Stock Status */}
            {product.inStock && (
              <div className="flex items-center space-x-2 text-sage-600">
                <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
                <span className="text-sm font-medium">In Stock - Ready to ship</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex items-center justify-center space-x-2 px-6 py-4 gradient-terracotta text-cream-50 rounded-full hover:shadow-xl transition-all duration-300 font-semibold transform hover:scale-105">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={handleWhatsAppSingleInquiry}
                  className="flex items-center justify-center space-x-2 px-6 py-4 border-2 border-sage-400 text-sage-700 rounded-full hover:gradient-sage hover:text-cream-50 transition-all duration-300 font-semibold transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Ask Question</span>
                </button>
              </div>

              {product.bulkAvailable && (
                <button
                  onClick={handleWhatsAppBulkInquiry}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 gradient-sage text-cream-50 rounded-full hover:shadow-xl transition-all duration-300 font-semibold transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp for Bulk Order</span>
                </button>
              )}

              <div className="text-center text-sm text-earth-600">
                <Truck className="w-4 h-4 inline mr-1" />
                Estimated delivery: {product.estimatedDelivery}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-earth-200">
              <div className="text-center">
                <div className="w-12 h-12 gradient-sage rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-cream-50" />
                </div>
                <div className="text-xs text-earth-600 font-medium">Authentic Guarantee</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gradient-terracotta rounded-full flex items-center justify-center mx-auto mb-2">
                  <Truck className="w-6 h-6 text-cream-50" />
                </div>
                <div className="text-xs text-earth-600 font-medium">Free Shipping</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gradient-warm rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-ochre-400">
                  <RotateCcw className="w-6 h-6 text-ochre-600" />
                </div>
                <div className="text-xs text-earth-600 font-medium">Easy Returns</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b-2 border-earth-200">
            <nav className="flex space-x-8">
              {["features", "specifications", "artisan"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? "border-terracotta-500 text-terracotta-600"
                      : "border-transparent text-earth-600 hover:text-terracotta-600"
                  }`}
                >
                  {tab === "artisan" ? "Artisan Story" : tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === "features" && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-playfair text-2xl font-semibold text-earth-900 mb-6">Product Features</h3>
                  <ul className="space-y-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-terracotta-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-earth-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="gradient-sage rounded-2xl p-6">
                  <h4 className="font-semibold text-earth-900 mb-4">Why Choose This Product?</h4>
                  <p className="text-earth-700 leading-relaxed">
                    This handwoven silk saree represents generations of craftsmanship and cultural heritage. Each piece
                    is unique and tells a story of traditional Indian artistry.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="max-w-2xl">
                <h3 className="font-playfair text-2xl font-semibold text-earth-900 mb-6">Specifications</h3>
                <div className="space-y-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-earth-200">
                      <span className="text-earth-600 font-medium">{key}:</span>
                      <span className="text-earth-900 font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "artisan" && (
              <div className="gradient-warm rounded-2xl p-8">
                <h3 className="font-playfair text-2xl font-semibold text-earth-900 mb-6">Meet the Artisan</h3>
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1 text-center">
                    <div className="w-32 h-32 gradient-terracotta rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Image
                        src={product.artisan.image || "/placeholder.svg"}
                        alt={product.artisan.name}
                        width={128}
                        height={128}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-earth-900">{product.artisan.name}</h4>
                    <p className="text-earth-600">{product.artisan.experience} experience</p>
                    <p className="text-earth-600">{product.artisan.location}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-earth-700 leading-relaxed text-lg">
                      &quot;I learned the art of silk weaving from my father, who learned it from his father. Each saree I
                      create carries forward our family&apos;s legacy of craftsmanship. Every thread is woven with care,
                      every pattern tells a story of our rich cultural heritage.&quot;
                    </p>
                    <p className="text-earth-600 mt-4 italic">— {product.artisan.name}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
