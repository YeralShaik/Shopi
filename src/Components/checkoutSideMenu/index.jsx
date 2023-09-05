import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const  orderToAdd = {
      date: '01.01.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
  }



  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl text-sky-900'>My Order</h2>
        <div>
          <XMarkIcon
            className='h-6 w-6 text-sky-900 cursor-pointer'
            onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
             
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1 '>
        {
          context.cartProducts.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className='px-6 mt-6 mb-2'  >
        <p className='flex justify-between items-center mb-3' >
          <span className='font-medium  text-sky-900 ' >Total:</span> 
          <span className='font-medium text-2xl text-sky-900' >${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-order/last'>
        <button  className='w-full bg-sky-600 py-3 text-white rounded-lg  ' onClick={()=> handleCheckout()}  >Checkout</button>
      </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu