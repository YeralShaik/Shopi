import { XMarkIcon } from '@heroicons/react/24/solid'
import { totalPrice } from '../../utils'

const OrderCard = props => {
  const { id, title, imageUrl, price, handleDelete } = props
  let renderXmarkIcon
  if (handleDelete) {
    renderXmarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className='h-6 w-6 text-sky-900 cursor-pointer'></XMarkIcon>
  }

  return (
    <div className="flex justify-between items-center mb-3">
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-contain text-sky-900' src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light text-sky-900'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
    <p className='text-lg font-medium text-sky-900'>${price}</p>
     {renderXmarkIcon}
    </div>
  </div>
  )
}

export default OrderCard