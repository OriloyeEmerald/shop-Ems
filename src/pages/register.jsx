import { ArrowLineLeft } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'
import shop1 from '../assets/images/shopping.jpeg'

const Register = ({formData, handleInputChange, handleSubmit}) => {
  return (
    <div className='lg:flex relative'>

    <img src={shop1} alt="" className='lg:h-screen lg:w-[650px] hidden lg:block'/>
    <div className='mx-[1rem] text-left lg:absolute right-[2rem] top-0'>
    <form action="" onSubmit={handleSubmit}>
     <div className='' style={{ display: 'flex',justifyContent: 'flex-start' }}>
     <Link to={'/'}>
      <button className='bg-gray-500 rounded-full mt-[5rem] rounded-full py-[1rem] px-[1rem] text-center'>
       <ArrowLineLeft  className='text-[1rem] text-white'/>
      </button>
      </Link>
     </div>
    

    <h1 className='text-[2rem] mt-[2rem]'><b>Register</b></h1>
     <br />
    <div className="flex">

    <div className='flex flex-col lg:flex-row w-full lg:w-2/3 sm:w-3/4 gap-4 items-center'>
    <div className='lg:w-1/2 sm:w-full sm:w-full'>
     <label htmlFor="firstName">Your FirstName</label>
     <input
      type="text"
      id="firstName"
      name="firstName"
      value={formData.firstName}
      onChange={handleInputChange}
      placeholder='John'
      className='w-full rounded-[.3rem] py-[.6rem] px-[.6rem] bg-[#dadada] sm:w-[610px] lg:w-[200px]'
    />
   </div>
  
  <div className='lg:w-1/2 sm:w-full mt-[.5rem]'>
    <label htmlFor="lastName">Your LastName</label>
    <input
      type="text"
      id="lastName"
      name="lastName"
      value={formData.lastName}
      onChange={handleInputChange}
      placeholder='Doe'
      className='w-full rounded-[.3rem] py-[.6rem] px-[.6rem] bg-[#dadada] sm:w-[610px] lg:w-[200px] lg:mb-[.3rem]'
    />
  </div>
</div>

    </div>
     <br />
     <div>
        <div>
         <label htmlFor="" className=''>Your email</label>
        </div>
        <input 
        type="email"
        name='email' 
        value={formData.email}
        onChange={handleInputChange}
        placeholder='name@flowbite.com' className='w-full rounded-[.3rem] py-[.7rem] px-[.6rem] bg-[#dadada] mt-2'/>
     </div>
     <br />

     <div>
        <div>
        <label htmlFor="">Your password</label>
        </div>
        <input 
        type="password"
        name='password'
        value={formData.password}
        onChange={handleInputChange}
        className='w-full rounded-[.3rem] py-[.7rem] px-[.3rem] bg-[#dadada] mt-2'/>
     </div>
     <br />
     <div>
        <div><label htmlFor="">Repeat password</label></div>
        <input 
        type="password" 
        name='repeatPassword'
        value={formData.repeatPassword}
        onChange={handleInputChange}
        className='w-full rounded-[.3rem] py-[.6rem] px-[.3rem] bg-[#dadada] mt-2'/>
     </div>
     <br />
     <div className='flex gap-[1rem] items-center'>
        <input type="checkbox" name="" id="" className='w-[18px] h-[18px]'/>
        <p>I agree with the <span className='text-blue-500'>terms and conditions</span></p>
     </div>
     <br />

     <button className='bg-blue-600 rounded-[.4rem] py-[.6rem] px-[.5rem] text-white' type='submit'>Create Account</button>

     <p className='mt-[.5rem] mb-[4rem]'>Already have an account? <span className='text-blue-600'><Link to={'/login'}>Login</Link></span> instead</p>
     </form>
    </div>
    </div>
  )
}

export default Register