import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* ---- Left Section ---- */}
        <div>
          <img className='mb-5 w-40' src={assets.logo3} alt="logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            <span className='font-semibold text-gray-800'>Doctor-Care</span> — Your trusted health partner. 
            Connect with verified doctors, book appointments in 60 seconds, and manage your healthcare journey all in one place.
          </p>
        </div>

        {/* ---- Center Section ---- */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='cursor-pointer hover:text-black transition-colors'>Home</li>
            <li className='cursor-pointer hover:text-black transition-colors'>About us</li>
            <li className='cursor-pointer hover:text-black transition-colors'>Doctors</li>
            <li className='cursor-pointer hover:text-black transition-colors'>Privacy policy</li>
          </ul>
        </div>

        {/* ---- Right Section ---- */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 7310258922</li>
            <li>support@doctor-care.com</li>
          </ul>
        </div>

      </div>

      {/* ---- Copyright ---- */}
      <div>
        <hr className='border-gray-200' />
        <p className='py-5 text-sm text-center text-gray-500'>
          Copyright © 2026 Doctor-Care - All Rights Reserved. Made with ❤️ for healthier--Shrabani Mishra ,India.
        </p>
      </div>
    </div>
  )
}

export default Footer