import { ArrowLineLeft } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'
import shop2 from '../assets/images/shop1.jpeg'

const Login = ({formData, handleInputChange, handleSubmit, handleLogin}) => {
  return (
  <div>
    <div className='lg:flex relative'>
        <img src={shop2} alt=""  className='lg:h-screen lg:w-[700px] hidden lg:block'/>
    </div>
    <div className='h-[90vh] flex justify-center items-center lg:absolute right-[6rem] top-0'>
   <form action="" onSubmit={handleSubmit}>
    <div className='mx-[1rem] text-left'>
     <Link to={'/'}>
     <div className='' style={{ display: 'flex',justifyContent: 'flex-start' }}>
      <button className='bg-gray-500 rounded-full mt-[5rem] rounded-full py-[1rem] px-[1rem] text-center'>
       <ArrowLineLeft  className='text-[1rem] text-white'/>
      </button>
      
     </div>
    </Link>


    <h1 className='text-[2rem] mt-[2rem]'><b>Login</b></h1>
    <br />
       <div>
         <label htmlFor="" className=''>Your email</label>
        </div>
        <input
         type="email" 
         name='email' 
        value={formData.email}
        onChange={handleInputChange}
        placeholder='name@flowbite.com' className='w-full rounded-[.6rem] py-[.7rem] px-[.6rem] bg-[#dadada] mt-2'/>
        <br />

        <div className='mt-[1rem]'>
        <label htmlFor="">Your password</label>
        </div>
        <input
         type="password" 
         name='password'
         value={formData.password}
         onChange={handleInputChange}
        className='w-full rounded-[.6rem] py-[.7rem] px-[.3rem] bg-[#dadada] mt-2'/>
         
        <button className='bg-blue-600 rounded-[.4rem] py-[.6rem] px-[.8rem] text-white mt-[1rem]' type='submit' onClick={handleLogin}>Login</button>

        <p className='mt-[.5rem]'>Don't have an account? <span className='text-blue-600'>
            <Link to={'/register'}>Register</Link>
            </span> instead</p>
    </div>
    </form>
   </div>
   </div>
  )
}

export default Login