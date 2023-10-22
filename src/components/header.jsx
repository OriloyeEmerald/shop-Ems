import { ShoppingCart } from 'phosphor-react';
import React from 'react';
import Modal from './modal';

const Header = ({cart, handleModal, isModal, setIsModal, setCart}) => {
  return (
   <>
    <div className='nav flex justify-between items-center fixed top-0 w-full bg-white shadow-lg z-30 px-[1.2rem] py-[1rem]'>
      <h2 className='text-[1.4rem]'><strong>kodecamp<span className='text-yellow-700'>-ecommerce</span></strong></h2>
      <div onClick={handleModal}>
          <ShoppingCart className='text-[1.6rem] text-red-800 relative cursor-pointer' />
          <div className='bg-red-600 w-4 h-4 rounded-full text-center text-white absolute top-[.9rem] right-[.9rem]'>
              <p className='text-[.7rem] '>{cart.length}</p>
          </div>
      </div>
      
    </div>
    <div className='border-b w-full border-gray-400'></div>
    <Modal 
    isModal={isModal} 
    setIsModal={setIsModal}
    cart={cart}
    setCart={setCart}
    />
    </>
  );
}

export default Header;
