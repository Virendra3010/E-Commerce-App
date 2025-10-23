import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from "../components/NewsletterBox"

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever is an e-commerce platform built to bring you trendy, high-quality, and affordable products. We focus on style, comfort, and customer satisfaction to make your shopping experience simple and enjoyable.</p>
          <p>Forever is a modern e-commerce brand offering stylish, reliable, and affordable products. Our goal is to make online shopping easy, enjoyable, and trustworthy for everyone.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Forever, our mission is to make online shopping effortless and enjoyable by combining quality, affordability, and style. We aim to create a trusted platform where customers can discover products they love, with convenience and reliability at every step.</p>
        </div>
      </div>

      <div className='text-lx py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>We carefully select and test every product to ensure top-notch quality. At Forever, your satisfaction and trust are our highest priority.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Forever is designed to make shopping effortless, with a seamless experience from browsing to checkout. We bring everything you need right to your fingertips.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>We’re committed to supporting you at every step, ensuring your shopping journey is smooth and worry-free. Our team is always ready to help with care and dedication.</p>
        </div>
      </div>
      
      <NewsletterBox />

    </div>
  )
}

export default About