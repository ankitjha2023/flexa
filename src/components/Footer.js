import React from 'react'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <footer className= "body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href='https://codewithankit.netlify.app'>
     
        <span className="ml-3 text-2xl text-green-500">Flexa</span>
      </a>
      <p className="text-base sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          
    Developed By <a href='https://github.com/ankitjha2023' target='_blank' rel="noreferrer" className=' text-blue-500 underline'>Ankit Jha</a> 
      </p>
      <SocialMedia/>
    </div>
  </footer>
  

  )
}

export default Footer
