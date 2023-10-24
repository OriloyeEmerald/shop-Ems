import { useState } from 'react'
import './App.css'
import Header from './components/header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import ProductDetail from './pages/productDetail'



function App() {
  const [cart, setCart] = useState([])
  const [isModal, setIsModal] = useState(false)
  

  const handleModal = () => {
      setIsModal(true)
  }
  


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
      cart={cart}
      setCart={setCart}
      />}/>

     <Route path='/products/:id' element={<ProductDetail />} />

     </Routes>
    </Router>
     
      
      
    </>
  )
}

export default App