import { useDispatch } from 'react-redux'
import { addToCart } from '../store/slices/cartSlice'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

interface ProductCardProps {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export default function ProductCard({ id, name, description, price, image }: ProductCardProps) {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, image, quantity: 1 }))
  }

  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <ShoppingCartIcon className="mr-2 h-5 w-5" aria-hidden="true" />
        Add to Cart
      </button>
    </div>
  )
}
