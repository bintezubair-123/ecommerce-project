import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='my-10 mt-40 text-sm'>
      
      {/* Top section */}
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14'>
        <div>
          <img src={assets.logo1} className='mb-5 w-32' alt="Logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem Ipsum is simply used as a standard in the printing industry,
            highly recommended and useful place to use or copy or paste text.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className='mt-10'>
        <hr />
        <p className='py-5 text-sm text-center text-gray-500'>
          © 2024 forever.com — All Rights Reserved
        </p>
      </div>

    </div>
  )
}

export default Footer
