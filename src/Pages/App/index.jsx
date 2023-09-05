import { useRoutes, BrowserRouter } from 'react-router-dom'
import {ShoppingCartProvider} from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'

import NavBar from '../../Components/Navbar/navbar'
import CheckoutSideMenu from '../../Components/checkoutSideMenu'

import '../App/App.css'

// creamos una variable para las rutas de las páginas
const AppRoutes = () => {
let routes = useRoutes([
  { path: '/', element: <Home /> },
  { path: '/category/jewelery', element: <Home /> },
  { path: '/electronics', element: <Home /> },
  { path: '/men', element: <Home /> },
  { path: '/women', element: <Home /> },
  { path: '/my-account', element: <MyAccount /> },
  { path: '/my-order', element: <MyOrder /> },
  { path: '/my-orders', element: <MyOrders /> },
  { path: '/my-order/last', element: <MyOrder /> },
  { path: '/my-orders/:id', element: <MyOrder /> },
  { path: '/sign-in', element: <SignIn /> },

  { path: '/*', element: <NotFound /> },
  
  
])
  return routes
}


const App = () => {

  return (
    <ShoppingCartProvider>
    <BrowserRouter>
       <AppRoutes/>
       <NavBar/>
       <CheckoutSideMenu />
    </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
