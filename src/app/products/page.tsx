"use client"

import { useState } from "react"
import ProductCard from "@/components/ProductCard"
import { Filter, Search, Grid, List } from "lucide-react"

// Sample products data
const allProducts = [
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
    name: "Jewellery Box",
    category: "Accessories",
    price: 129.99,
    image: "/jewel.jpg",
    material: "Rosewood",
    bulkAvailable: true,
    description: "Elegant wooden jewelry box with traditional carvings and velvet lining.",
  },
  {
    id: "5",
    name: "Cotton Block Print Bedsheet",
    category: "Textiles",
    price: 79.99,
    image: "/block.jpeg",
    material: "Organic Cotton",
    bulkAvailable: true,
    description: "Soft cotton bedsheet with traditional block print designs.",
  },
  {
    id: "6",
    name: "Brass Decorative Bowl",
    category: "Home Decor",
    price: 65.99,
    image: "/brass.jpeg",
    material: "Pure Brass",
    bulkAvailable: false,
    description: "Handcrafted brass bowl with intricate engravings.",
  },
]

const categories = ["All", "Textiles", "Home Decor", "Accessories", "Pottery"]
const materials = ["All", "Pure Silk", "Organic Cotton", "Clay & Glaze", "Natural Jute", "Rosewood", "Pure Brass"]
const priceRanges = [
  { label: "All", min: 0, max: Number.POSITIVE_INFINITY },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "Over $200", min: 200, max: Number.POSITIVE_INFINITY },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedMaterial, setSelectedMaterial] = useState("All")
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0])
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesMaterial = selectedMaterial === "All" || product.material === selectedMaterial
    const matchesPrice = product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesMaterial && matchesPrice && matchesSearch
  })

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-playfair text-3xl lg:text-4xl font-bold text-earth-900 mb-4">Our Products</h1>
          <p className="text-earth-600 max-w-2xl">
            Explore our complete collection of handcrafted textiles and handicrafts, each piece carefully selected for
            its quality and authenticity.
          </p>
        </div>

        {/* Search and View Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-earth-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 border border-earth-200 rounded-lg hover:bg-earth-100 transition-colors"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>

            <div className="flex border border-earth-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 ${viewMode === "grid" ? "bg-terracotta-500 text-cream-50" : "bg-cream-50 text-earth-600 hover:bg-earth-100"} transition-colors`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 ${viewMode === "list" ? "bg-terracotta-500 text-cream-50" : "bg-cream-50 text-earth-600 hover:bg-earth-100"} transition-colors`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-cream-50 border border-earth-200 rounded-lg p-6 space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-semibold text-earth-900 mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-terracotta-500 focus:ring-terracotta-500"
                      />
                      <span className="ml-2 text-earth-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="font-semibold text-earth-900 mb-3">Material</h3>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <label key={material} className="flex items-center">
                      <input
                        type="radio"
                        name="material"
                        value={material}
                        checked={selectedMaterial === material}
                        onChange={(e) => setSelectedMaterial(e.target.value)}
                        className="text-terracotta-500 focus:ring-terracotta-500"
                      />
                      <span className="ml-2 text-earth-700">{material}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-semibold text-earth-900 mb-3">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value={range.label}
                        checked={selectedPriceRange.label === range.label}
                        onChange={() => setSelectedPriceRange(range)}
                        className="text-terracotta-500 focus:ring-terracotta-500"
                      />
                      <span className="ml-2 text-earth-700">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-earth-600">
                Showing {filteredProducts.length} of {allProducts.length} products
              </p>
            </div>

            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-earth-600 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("All")
                    setSelectedMaterial("All")
                    setSelectedPriceRange(priceRanges[0])
                    setSearchTerm("")
                  }}
                  className="mt-4 px-6 py-2 bg-terracotta-500 text-cream-50 rounded-lg hover:bg-terracotta-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
