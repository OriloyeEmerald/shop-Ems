import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header'
import axios from 'axios'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './components/productDetail'
import Products from './components/Products'

const API_URL = 'https://fakestoreapi.com/products'
function App() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [cart, setCart] = useState([])
  const [searchProduct, setSearchProduct] = useState('')
  const [isModal, setIsModal] = useState(false)


  const handleModal = () => {
      setIsModal(true)
  }

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      existingProduct.quantity += quantity;
      setCart([...cart]);
    } else {
      const newProduct = { ...product, quantity };
      setCart([...cart, newProduct]);
    }
  };
  

  const removeFromCart = (id) => {
    const productToRemove = cart.find((item) => item.id === id);
  
    if (productToRemove) {
      if (productToRemove.quantity > 1) {
        productToRemove.quantity -= 1;
        setCart([...cart]);
      } else {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
      }
    }
  };
  
  
  const filterProduct = (product) => {
    if (searchProduct === "") {
       return product;
     } else if(product.title.toLowerCase().includes(searchProduct.toLowerCase())) {
       return product;
    }
}


  const handleSearch = (e) => {
    setSearchProduct(e.target.value)

  }
  const fetchProducts = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(API_URL);
      const products = await response.data
      setProducts(products);
    } catch (error) {
      alert('404', error)
    } finally {
      setIsLoading(false)
    }
  }

 useEffect(() => {
   fetchProducts()
 }, [])

  return (
    <>
    <Router>
     <Header 
      cart={cart}
      handleModal={handleModal}
      isModal={isModal}
      setIsModal={setIsModal}
      setCart={setCart}
      />
     <Routes>
      <Route path='/' element={<Products
      products={products}
      searchProduct={searchProduct} handleSearch={handleSearch}
      isLoading={isLoading} 
      addToCart={addToCart}
      removeFromCart = {removeFromCart}
      filterProduct={filterProduct}
      />}/>

     <Route path='/products/:id' element={<ProductDetail />} />

     </Routes>
    </Router>
     
      
      
    </>
  )
}

export default App