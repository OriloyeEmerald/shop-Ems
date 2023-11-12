import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Product from '../components/product';



const API_URL = 'https://fakestoreapi.com/products'
const Products = ({cart, setCart, isAuthenticated}) => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchProduct, setSearchProduct] = useState('')
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



     const addToCart = (product, quantity) => {
      
      if (!isAuthenticated) {
        alert('Please log in or register to add items to the cart.');
        return;
      }
    
      const existingProduct = cart.find((item) => item.id === product.id);
    
      if (existingProduct) {
        existingProduct.quantity += quantity;
        setCart([...cart]);
      } else {
        const newProduct = { ...product, quantity };
        setCart([...cart, newProduct]);
        alert(`${product.title} has been added to the cart`);
      }
    };
    
      
    
      const removeFromCart = (product, id) => {
        const productToRemove = cart.find((item) => item.id === id);
      
        if (productToRemove) {
          if (productToRemove.quantity > 1) {
            productToRemove.quantity -= 1;
            setCart([...cart]);
          } else {
            const updatedCart = cart.filter((item) => item.id !== id);
            setCart(updatedCart);
            alert(`${product.title} has been removed from the cart`)
            
          }
        }
      };
  return (
    <>

<div>
      <input type="text" placeholder='Search for product ...' className='mt-[7rem] w-56 px-4 py-[.3rem] rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring focus:border-blue-400 sm:py-[.5rem]' value={searchProduct} onChange={handleSearch}/>
    </div>
   
   
    <div className="lg:grid lg:grid-cols-4 lg:gap-4 md:grid md:grid-cols-3 md:gap-4 sm:grid sm:grid-cols-2 sm:gap-4 p-[1.2rem]">
    {products.filter(filterProduct).map((product, id) => {
    return (
    <Product
    key={product.id}
    product={product} 
    id={id + 1} 
    isLoading={isLoading} 
    addToCart={addToCart}
    removeFromCart = {removeFromCart}
    cart={cart}
    
  />)

  })}
    </div>
  </>
 
  );
}

export default Products;
