import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    
      // Shopping Cart · Increment quantity
    const [count, setCount] = useState(0)

//product detail - Open/close
    const [isProductInfoOpen, setIsProductInfoOpen] = useState(false)
    const openProductInfo = () => setIsProductInfoOpen(true)
    const closeProductInfo = () => setIsProductInfoOpen(false)

    //checkout side menu - Open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

//product detail (info) - show product
    const [productToShow, setProductToShow] = useState({})

// shopping cart - Add product to cart 
    const [cartProducts, setCartProducts] = useState([])

    //shoppin cart - order
    const [order, setOrder] = useState([])



 // Get products
 const [items, setItems,] = useState(null)
 
 const [filteredItems, setFilteredItems] = useState(null)

 // Get products by title
 const [searchByTitle, setSearchByTitle] = useState(null)

   // Get products by category
const [categories, setCategories] = useState([])
 const [searchByCategory, setSearchByCategory] = useState(null)

 const [selectedCategory, setSelectedCategory] = useState(null);

 
//API
useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
      }, [])

  useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(data => setCategories(data))
      }, [])

const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }
    
const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
      }
    
      const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
          return filteredItemsByTitle(items, searchByTitle)
        }
    
        if (searchType === 'BY_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory)
        }
    
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
    
        if (!searchType) {
          return items
        }
      }
    
      useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
      }, [items, searchByTitle, searchByCategory])
    
    
    return (
        <ShoppingCartContext.Provider value= {{
            count,
            setCount,
            openProductInfo,
            closeProductInfo,
            isProductInfoOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            categories,
            setCategories,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
    
            searchByCategory, 
            setSearchByCategory,
            selectedCategory,
             setSelectedCategory

        }}>

            {children}
        </ShoppingCartContext.Provider>
    )
} 