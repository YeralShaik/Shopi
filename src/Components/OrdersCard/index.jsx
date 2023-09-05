import {ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  return (
    <div className="flex justify-between items-center border border-sky-900 p-4 w-80 rounded-lg mb-4 mt-4">
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
        <span className='font-light  text-sky-900'>01.02.23</span>
        <span  className='font-medium  text-sky-900 '  >{totalProducts} articles</span>
        </p>
        <p className='flex items-center gap-2'>
        <span className='font-medium text-2xl text-sky-900'>{totalPrice}</span>
        <ChevronRightIcon className='h-6 w-6 cursor-pointer text-sky-900' />
        </p>
      </div>
    </div>
  )
}

export default OrdersCard