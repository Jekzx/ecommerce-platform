import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Cart() {
  const dispatch = useDispatch()
  const { items, total } = useSelector((state: RootState) => state.cart)

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return
    dispatch(updateQuantity({ id, quantity }))
  }

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id))
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <a
          href="/products"
          className="text-indigo-600 hover:text-indigo-500"
        >
          Continue Shopping
          <span aria-hidden="true"> →</span>
        </a>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h2>

        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.name}</h3>
                        <p className="ml-4">${item.price}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="px-2 py-1 text-gray-500 hover:text-gray-700"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                          className="w-16 text-center border-gray-200 rounded-md"
                        />
                        <button
                          type="button"
                          className="px-2 py-1 text-gray-500 hover:text-gray-700"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>

                      <div className="flex">
                        <button
                          type="button"
                          onClick={() => handleRemove(item.id)}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 py-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{' '}
              <a href="/products" className="font-medium text-indigo-600 hover:text-indigo-500">
                Continue Shopping
                <span aria-hidden="true"> →</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
