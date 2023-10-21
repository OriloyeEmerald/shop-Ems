import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Star } from 'phosphor-react';



const API_URL = 'https://fakestoreapi.com/products'

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null)

    const fetchProduct = async () => {
        try {
          const response = await axios.get(`${API_URL}/${id}`);
          const product = await response.data
          setProduct(product);
        } catch (error) {
          alert('404', error)
        } 
      }
    
     useEffect(() => {
       fetchProduct()
     }, [])
  return (
    <div>
        {product 
        ?
         (
        <div className='flex justify-center items-center h-[100vh] px-[1.2rem] slide-in-left'>
            <div className='mt-[3rem] border bg-white rounded-[.7rem] shadow-lg px-[1rem] py-[.8rem] '>
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
             <p className='mt-1'><strong>description:</strong> {product.description}</p>
             <p className='italic mt-2 text-right'>{product.category}</p>
           </div>
           </div>
        </div>
        )
        :
        (
            <p>loading...</p>
        )
    }
            
    </div>
  );
}

export default ProductDetail;
