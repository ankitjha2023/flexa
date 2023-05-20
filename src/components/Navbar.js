import React from 'react'
import { Link } from 'react-router-dom'
import links from "../api/NavbarApi"
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
  <div  className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to ="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 text-3xl font-bold text-green-500">Flexa</span>
    </Link>
    <nav className="md:ms-auto flex flex-wrap items-center  justify-center">
      {
        links.map((link)=>{
            return(
                <Link to ={link.path} key={link.id} className="mr-5 hover:text-gray-900 link">{link.name}</Link>
            )
        })
      }
     
    </nav>
   
  </div>
</header>

  )
}

export default Navbar
