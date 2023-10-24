import { X } from 'phosphor-react'
import React from 'react'

const Modal = ({isModal, setIsModal, cart, setCart}) => {
  const increaseItem = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  
    setCart(updatedCart);
  }

  const decreaseItem = (productId) => {
    const updatedCart = cart
      .map(item => {
        if (item.id === productId) {
          if (item.quantity - 1 > 0) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null; 
          }
        }
        return item;
      })
      .filter(item => item !== null);
  
    setCart(updatedCart);
  };
  
  const getTotalItemsInCart = () => {
    let totalPrice = 0;
  
    for (const item of cart) {
      totalPrice += (item.price * item.quantity);
    }
  
    return Math.floor(totalPrice);
  };
  


  return (
   <>
    
     {isModal && (<div className='bg-[#fff] rounded-md shadow-lg fixed top-0 right-0 z-50 px-[2rem] py-4rem w-[80%] h-[50%] text-center overflow-y-auto lg:w-[55%] lg:h-[70%] sm:h-[65%] sm:w-[70%]'>
      
     <X className='ml-auto mt-3 text-[1.5rem] text-red-700 cursor-pointer' onClick={() => setIsModal(false)}/>
     <p className='text-[1.3rem]'><strong>Cart Items</strong></p>
     
     {cart.map((item) => {

         return (
        <div className="mt-3 bg-white border rounded-[.5rem] shadow-[2rem] py-[.5rem] px-[.6rem] flex justify-around items-center sm:py-[1.2rem] scale-out-top" key={item.id}>
          <img src={item.image} alt={item.title} className='w-12 h-12 flex-shrink-0'/>
          <div className='text-left text-[.9rem]'>
              <p><strong>price:</strong> ${parseInt(item.price * item.quantity)}</p>
              <div className='mt-1'>
                  <button className='border-[.2rem] rounded-[.3rem] px-[.4rem]' onClick={() => decreaseItem(item.id)}>-</button>
                  <button className='border-[.2rem] rounded-[.3rem] px-[.4rem]'>{item.quantity}</button>
                  <button className='border-[.2rem] rounded-[.3rem] px-[.4rem] ' onClick={() => increaseItem(item.id)}>+</button>
              </div>
          </div>
        </div>
        
        )
     })
     }

     {cart.length > 0 
     ?
     <div className='mt-[3rem] py-2 text-left'>
     <h3 className='text-[1.1rem]'><strong>TOTAL:</strong> ${getTotalItemsInCart()} </h3>
     <button className='text-white text-center mt-3 border rounded-[.5rem] bg-red-600 w-full py-[.3rem]' onClick={() => setCart([])}>CLEAR CART</button>
    </div>
   
    :
    <div className='flex justify-center items-center h-[300px]'>
     <p className='text-[1.4rem] tracking-in-contract'><strong>Cart is empty</strong></p>
    </div>

     }
    
    </div>
     )}
   </>   
   
  )
}

export default Modal