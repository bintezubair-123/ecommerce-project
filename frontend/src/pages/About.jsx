import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
       <div className='text-2xl text-center pt-8 border-t'>
           <Title text1={'ABOUT'} text2={'US'}/>
       </div>
       <div className='my-10 flex flex-col md:flex-row gap-16'>
         <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                   <b className='text-gray-800'>Our Mission</b>
                   <p>Our mission is to deliver innovative, reliable, and high-quality solutions that create real value for our users. We strive to continuously improve, embrace new technologies, and work with integrity to meet the evolving needs of our community while making a positive and lasting impact.</p>
         </div>
       </div>
       <div className='text-xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
       </div>
       <div className='flex flex-col md:flex-row text-sm mb-20'>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
               <b>Quality Assurance</b>
               <p className='text-gray-600'>We meticulously select materials to ensure the highest standards of quality and reliability.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
               <b>Convenience:</b>
               <p className='text-gray-600'>Our team goes above and beyond to offer exceptional customer service, ensuring every interaction is smooth, helpful, and leaves our customers fully satisfied.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
               <b>Exceptional Customer Services</b>
               <p className='text-gray-600'>We are committed to delivering exceptional customer service by understanding our clients’ needs and providing timely, reliable, and personalized support at every step.</p>
         </div>
       </div>
       <NewsletterBox/>
         
    </div>
  )
}

export default About
