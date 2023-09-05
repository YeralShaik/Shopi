import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'



const NavBar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
    

    return(
        <nav className='flex justify-between items-center bg-sky-800  text-white fixed z-10 top-0 w-full py-5 px-8 text-sm font-light' >
            <ul className='flex items-center gap-4 ' >
                <li className='font-semibold text-xl' >
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    onClick={() => context.setSearchCategory('')}
                    className={({ isActive }) => isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to='/category/jewelery'
                    onClick={() => {
                   context.setSelectedCategory('jewelery'); // Actualiza la categoría seleccionada
                    }}
                    className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    Jewelery
                </NavLink>
                </li>

                <li>
                    <NavLink
                     to='/electronics'
                     onClick={() => {
                        context.setSelectedCategory('electronics'); // Actualiza la categoría seleccionada
                         }}
                     className={({ isActive }) => isActive ? activeStyle : undefined
                     }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/men'
                    onClick={() => {
                        context.setSelectedCategory("men's clothing"); // Actualiza la categoría seleccionada
                         }}
                    className={({ isActive }) => isActive ? activeStyle : undefined
                    }>
                     Men
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/women'
                    onClick={() => {
                        context.setSelectedCategory("women's clothing"); // Actualiza la categoría seleccionada
                         }}
                    className={({ isActive }) => isActive ? activeStyle : undefined
                    }>
                        Women
                    </NavLink>
                </li>
                
            </ul>
            <ul className='flex items-center gap-4' >
                <li className='text-white/60'>
                   yeraldin@gmail.com
                </li>
                <li>
                    <NavLink 
                    to='/my-orders'
                    className={({ isActive }) => isActive ? activeStyle : undefined
                    }>
                     My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                     to='/my-account'
                     className={({ isActive }) => isActive ? activeStyle : undefined
                     }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                     to='/sign-in'
                     className={({ isActive }) => isActive ? activeStyle : undefined
                     }>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center gap-1'>
                     <ShoppingBagIcon className='h-6 w-6 text-white '></ShoppingBagIcon>
                    <div>{context.cartProducts.length}</div>
              </li>
               
            </ul>
        </nav>
    )
}
export default NavBar 