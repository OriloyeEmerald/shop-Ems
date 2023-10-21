import { ShoppingBag, Star, Trash } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product, id, isLoading, addToCart, removeFromCart}) => {
  return (
    <>
    {isLoading
     ? 
     (
    <div>
       <p className='loader'>Loading...</p>
    </div>
   ) 
     :
      (
       
           <div className='mt-[1.5rem] border bg-white rounded-[.7rem] shadow-lg px-[1rem] py-[.8rem] slide-in-left' >
               <img src={product.image} alt={product.title} className='w-30 h-40 mx-auto'/>
               <div className='text-left mt-2'>
                 <p className='text-yellow-700 text-[1.1rem]'><strong>{product.title}.</strong></p>
                 <p className='mt-1'><strong>price:</strong> ${product.price}</p>
                 <div className='flex items-center mt-1'><strong>rating:  </strong>  {[...Array(Math.floor(product.rating.rate))].map((e, i) => (
                  <Star key={i} className='text-yellow-600'/>
                 ))}
                 {[...Array(5 - Math.floor(product.rating.rate))].map((e, i) => (
                  <Star key={i}/>
                 ))}
                 </div>
                 <p className='italic mt-1'>{product.category}</p>
               </div>
               
               <div className='flex gap-2 items-center mt-3'>
               <Link to={`/products/${id}`}className='text-blue-500 tex-[.6rem]'>More details..</Link>
                <button className='border-[.15rem] rounded-[.4rem] border-red-900 py-[.3rem] px-[.4rem] text-white bg-red-900 ml-auto' onClick={() => removeFromCart(product.id)}>
                <Trash className='text-[1.1rem]'/>
               </button>
               <button className='flex items-center gap-1 border-[.15rem] rounded-[.4rem] border-green-900 py-[.2rem] px-[.4rem] text-green-900 ' onClick={() => addToCart(product, 1)}>
                 <ShoppingBag className='text-[1.1rem] '/>
                <p>shop</p>
               </button>
             </div>
               
              
               
               
             </div>
        
        

    )}
     
          </>
  )
}

export default Product