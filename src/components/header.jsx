import { ShoppingCart } from 'phosphor-react';
import React from 'react';
import Modal from './modal';
import { Link } from 'react-router-dom';

const Header = ({cart, handleModal, isModal, setIsModal, setCart, isAuthenticated, handleLogin, handleLogout}) => {
  return (
   <>
    <div className='nav flex items-center fixed top-0 w-full bg-white shadow-lg z-30 px-[1.2rem] py-[1rem] sm:justify-between lg:justify-between'>
      <h2 className='text-[1.1rem]'><strong>Kodecamp<span className='text-yellow-700'>e-commerce</span></strong></h2>
    <div className='flex lg:gap-[4rem] gap-[.5rem] items-center'>
      <div className='flex lg:gap-[2rem] gap-[.5rem] items-center'>
       <Link to={'/login'}>
        {!isAuthenticated ? <p className='text-[1.2rem] underline' onClick={handleLogin}>Login</p> : <p className='text-[1.2rem] underline' onClick={handleLogout}>Logout</p>}
        
       </Link>
       <Link to={'/register'}>
       <button className='rounded-[.3rem] bg-blue-500 text-white py-[.4rem] px-[.4rem]'>
          Register
       </button>
       </Link>
      </div>
      <div onClick={handleModal}>
          <ShoppingCart className='text-[1.6rem] text-red-800 relative cursor-pointer' />
          <div className='bg-red-600 w-4 h-4 rounded-full text-center text-white absolute top-[1.5rem] right-[.9rem]'>
              <p className='text-[.7rem] '>{cart.length}</p>
          </div>
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
