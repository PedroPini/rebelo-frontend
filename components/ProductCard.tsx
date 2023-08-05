import { Product } from '../types/Product'

import Link from 'next/link'

type Props = {
  product: Product
}


const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Link
      href={{
        pathname: `/products/${product.id}`,
      }}
    >
      <div className="duration-50 relative h-64 transform cursor-pointer rounded-lg bg-white p-4 shadow-lg transition-transform hover:translate-y-1">
        <h2 className="h-16 border-b-2 text-lg font-medium line-clamp-2">
          {product.name}
        </h2>

        <p className="my-2 text-gray-500 line-clamp-4">{product.description}</p>

        <p
          className="p-4 text-lg font-bold text-gray-800 "
          style={{ position: 'absolute', bottom: 0, left: 0 }}
        >
          ${product.price}
        </p>
      </div>
    </Link>
  )
}

export default ProductCard