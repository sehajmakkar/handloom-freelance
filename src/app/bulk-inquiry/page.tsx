"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle, Plus, Minus, X, ShoppingCart, Users, Package } from "lucide-react"

// Sample products data
const availableProducts = [
  {
    id: "1",
    name: "Handwoven Silk Saree",
    category: "Textiles",
    price: 299.99,
    bulkPrice: 199.99,
    image: "/saree.webp",
    material: "Pure Silk",
    minOrder: 50,
  },
  {
    id: "2",
    name: "Ceramic Vase Set",
    category: "Home Decor",
    price: 89.99,
    bulkPrice: 59.99,
    image: "/vase.jpg",
    material: "Clay & Glaze",
    minOrder: 25,
  },
  {
    id: "3",
    name: "Jute Wall Hanging",
    category: "Home Decor",
    price: 45.99,
    bulkPrice: 29.99,
    image: "/jute.webp",
    material: "Natural Jute",
    minOrder: 100,
  },
  {
    id: "4",
    name: "Handcrafted Jewelry Box",
    category: "Accessories",
    price: 129.99,
    bulkPrice: 89.99,
    image: "/jewel.jpg",
    material: "Rosewood",
    minOrder: 20,
  },
  {
    id: "5",
    name: "Cotton Block Print Bedsheet",
    category: "Textiles",
    price: 79.99,
    bulkPrice: 49.99,
    image: "/block.jpeg",
    material: "Organic Cotton",
    minOrder: 50,
  },
  {
    id: "6",
    name: "Brass Decorative Bowl",
    category: "Home Decor",
    price: 65.99,
    bulkPrice: 39.99,
    image: "/brass.jpeg",
    material: "Pure Brass",
    minOrder: 30,
  },
]

interface SelectedProduct {
  id: string
  name: string
  price: number
  bulkPrice: number
  quantity: number
  minOrder: number
  image: string
  material: string
}

export default function BulkInquiryPage() {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([])
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const addProduct = (product: (typeof availableProducts)[0]) => {
    const existingProduct = selectedProducts.find((p) => p.id === product.id)

    if (existingProduct) {
      setSelectedProducts(
        selectedProducts.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + product.minOrder } : p)),
      )
    } else {
      setSelectedProducts([
        ...selectedProducts,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          bulkPrice: product.bulkPrice,
          quantity: product.minOrder,
          minOrder: product.minOrder,
          image: product.image,
          material: product.material,
        },
      ])
    }
  }

  const updateQuantity = (id: string, newQuantity: number) => {
    const product = selectedProducts.find((p) => p.id === id)
    if (product && newQuantity >= product.minOrder) {
      setSelectedProducts(selectedProducts.map((p) => (p.id === id ? { ...p, quantity: newQuantity } : p)))
    }
  }

  const removeProduct = (id: string) => {
    setSelectedProducts(selectedProducts.filter((p) => p.id !== id))
  }

  const getTotalValue = () => {
    return selectedProducts.reduce((total, product) => total + product.bulkPrice * product.quantity, 0)
  }

  const getTotalSavings = () => {
    return selectedProducts.reduce(
      (total, product) => total + (product.price - product.bulkPrice) * product.quantity,
      0,
    )
  }

  const handleWhatsAppInquiry = () => {
    if (selectedProducts.length === 0) {
      alert("Please select at least one product for bulk inquiry.")
      return
    }

    const productList = selectedProducts
      .map(
        (product) =>
          `• ${product.name} - Quantity: ${product.quantity} pieces - Bulk Price: ₹${product.bulkPrice} each`,
      )
      .join("\n")

    const totalValue = getTotalValue()
    const totalSavings = getTotalSavings()

    const message = `Hi! I'm interested in a bulk order with the following details:

*Customer Information:*
Name: ${customerInfo.name || "Not provided"}
Email: ${customerInfo.email || "Not provided"}
Phone: ${customerInfo.phone || "Not provided"}
Company: ${customerInfo.company || "Not provided"}

*Products Selected:*
${productList}

*Order Summary:*
Total Estimated Value: ₹${totalValue.toFixed(2)}
Total Savings: ₹${totalSavings.toFixed(2)}

*Additional Message:*
${customerInfo.message || "No additional message"}

Please provide me with:
1. Final bulk pricing
2. Minimum order quantities
3. Delivery timeline
4. Payment terms
5. Shipping costs

Looking forward to your response!`

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen gradient-warm bg-weave-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-1 gradient-terracotta rounded-full"></div>
            <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-earth-900 text-shadow">
              Bulk Order Inquiry
            </h1>
            <div className="w-16 h-1 gradient-terracotta rounded-full"></div>
          </div>
          <p className="text-xl text-earth-700 max-w-3xl mx-auto leading-relaxed">
            Select multiple products for your bulk order and get instant quotes via WhatsApp
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Product Selection */}
          <div className="lg:col-span-2 space-y-8">
            <div className="gradient-sage rounded-2xl p-6 card-shadow-lg">
              <h2 className="font-playfair text-2xl font-bold text-earth-900 mb-6 flex items-center">
                <Package className="w-6 h-6 mr-3 text-terracotta-600" />
                Select Products
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {availableProducts.map((product) => (
                  <div
                    key={product.id}
                    className="gradient-warm rounded-xl p-4 border-2 border-earth-200 hover:border-terracotta-300 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={80}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-earth-900 mb-1">{product.name}</h3>
                        <p className="text-earth-600 text-sm mb-2">{product.material}</p>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-earth-500 line-through text-sm">₹{product.price}</span>
                            <span className="font-bold text-terracotta-600">₹{product.bulkPrice}</span>
                          </div>
                          <p className="text-xs text-earth-600">Min. {product.minOrder} pieces</p>
                        </div>
                        <button
                          onClick={() => addProduct(product)}
                          className="mt-3 w-full flex items-center justify-center space-x-2 px-4 py-2 gradient-terracotta text-cream-50 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Add to Inquiry</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Information */}
            <div className="gradient-warm rounded-2xl p-6 card-shadow-lg border-2 border-earth-200">
              <h2 className="font-playfair text-2xl font-bold text-earth-900 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-sage-600" />
                Your Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-earth-900 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-earth-900 mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-earth-900 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-earth-900 mb-2">Company Name</label>
                  <input
                    type="text"
                    value={customerInfo.company}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, company: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-earth-900 mb-2">Additional Message</label>
                <textarea
                  value={customerInfo.message}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent resize-vertical"
                  placeholder="Any specific requirements or questions..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Selected Products & Summary */}
          <div className="space-y-6">
            {/* Selected Products */}
            <div className="gradient-sage rounded-2xl p-6 card-shadow-lg sticky top-8">
              <h2 className="font-playfair text-xl font-bold text-earth-900 mb-4 flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2 text-terracotta-600" />
                Selected Products ({selectedProducts.length})
              </h2>

              {selectedProducts.length === 0 ? (
                <p className="text-earth-600 text-center py-8">
                  No products selected yet. Choose products from the left to start your bulk inquiry.
                </p>
              ) : (
                <div className="space-y-4">
                  {selectedProducts.map((product) => (
                    <div key={product.id} className="gradient-warm rounded-lg p-4 border border-earth-200">
                      <div className="flex items-start space-x-3">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={50}
                          height={50}
                          className="rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-earth-900 text-sm">{product.name}</h4>
                          <p className="text-earth-600 text-xs">{product.material}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="font-bold text-terracotta-600 text-sm">₹{product.bulkPrice} each</span>
                            <button
                              onClick={() => removeProduct(product.id)}
                              className="text-earth-500 hover:text-red-500 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="flex items-center space-x-2 mt-3">
                            <button
                              onClick={() => updateQuantity(product.id, product.quantity - product.minOrder)}
                              className="p-1 hover:bg-earth-200 rounded transition-colors"
                              disabled={product.quantity <= product.minOrder}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-medium px-2">{product.quantity}</span>
                            <button
                              onClick={() => updateQuantity(product.id, product.quantity + product.minOrder)}
                              className="p-1 hover:bg-earth-200 rounded transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="text-xs text-earth-600 mt-1">Min: {product.minOrder} pieces</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {selectedProducts.length > 0 && (
                <div className="mt-6 pt-4 border-t-2 border-earth-200">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-earth-700">Total Value:</span>
                      <span className="font-bold text-earth-900">₹{getTotalValue().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-earth-700">You Save:</span>
                      <span className="font-bold text-sage-600">₹{getTotalSavings().toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleWhatsAppInquiry}
                    className="w-full mt-6 flex items-center justify-center space-x-2 px-6 py-4 gradient-terracotta text-cream-50 rounded-full hover:shadow-xl transition-all duration-300 font-bold transform hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Send WhatsApp Inquiry</span>
                  </button>

                  <p className="text-xs text-earth-600 text-center mt-3">Get instant response via WhatsApp</p>
                </div>
              )}
            </div>

            {/* Benefits */}
            <div className="gradient-warm rounded-2xl p-6 card-shadow border-2 border-ochre-200">
              <h3 className="font-playfair text-lg font-bold text-earth-900 mb-4">Bulk Order Benefits</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-terracotta-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-earth-700">Up to 40% discount on bulk orders</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-earth-700">Free shipping on orders above ₹1000</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-earth-700">Customization options available</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-rust-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-earth-700">Dedicated account manager</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
