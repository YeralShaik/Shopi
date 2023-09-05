import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'



const ProductInfo = () => {
const context = useContext(ShoppingCartContext)
    return (
    <aside 
    className={`${context.isProductInfoOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border  rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-6'  >
            <h2 className='font-medium text-xl text-sky-900' >Detail</h2>
            <div className='cursor-pointer' >
                <XMarkIcon className='h-6 w-6 text-blue-800 cursor-pointer'
            onClick={() => context.closeProductInfo()}></XMarkIcon>
             </div>
      </div>
      <figure className='px-6'>
        <img
          className='w-52 h-52 rounded-lg items-center text-sky-900 '
          src={context.productToShow.image}
          alt={context.productToShow.title} />
      </figure>
      <p className='flex flex-col p-6 text-clip overflow-hidden text-sky-900'>
        <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
        <span className='font-medium text-md '>${context.productToShow.title}</span>
        <span className='font-light text-sm overflow-auto mt-3 '>${context.productToShow.description}</span>
      </p>
    </aside>
  )
}



export default ProductInfo