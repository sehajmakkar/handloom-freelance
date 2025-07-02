import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Users } from "lucide-react"

interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  material: string
  bulkAvailable: boolean
  description: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group gradient-warm rounded-2xl overflow-hidden card-shadow hover:card-shadow-lg transition-all duration-300 border-2 border-earth-200 hover:border-terracotta-300 transform hover:scale-105">
      <div className="relative overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {product.bulkAvailable && (
          <div className="absolute top-4 right-4 gradient-sage text-cream-50 px-3 py-2 rounded-full text-xs font-semibold shadow-lg">
            Bulk Available
          </div>
        )}
        <div className="absolute top-4 left-4 bg-terracotta-500/90 text-cream-50 px-3 py-1 rounded-full text-xs font-medium">
          {product.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-playfair text-xl font-bold text-earth-900 mb-3 group-hover:text-terracotta-600 transition-colors">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </h3>

        <p className="text-earth-600 mb-4 line-clamp-2 leading-relaxed">{product.description}</p>

        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-ochre-400"></div>
          <span className="text-sm text-earth-600 font-medium">Material: {product.material}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="font-bold text-2xl text-earth-900">₹{product.price.toFixed(2)}</div>

          <div className="flex space-x-3">
            <button className="p-3 gradient-terracotta text-cream-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-110">
              <ShoppingCart className="w-5 h-5" />
            </button>
            {product.bulkAvailable && (
              <button className="p-3 gradient-sage text-cream-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                <Users className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
