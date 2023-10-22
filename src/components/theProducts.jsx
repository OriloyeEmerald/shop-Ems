import React from 'react';
import Product from './product';


const TheProducts = ({searchProduct, handleSearch, products, isLoading, addToCart, removeFromCart, filterProduct, cart }) => {
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

export default TheProducts;
