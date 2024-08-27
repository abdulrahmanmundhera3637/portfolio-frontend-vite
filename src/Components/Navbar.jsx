import React from 'react';

const Navbar = () => {
  const whatsappNumber = "923043637810"; 

  return (
    <nav className='bg-black text-white px-4 md:px-8 lg:px-24'>
      <div className='container py-2 flex flex-wrap justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Abdul Rahman</div>
        <div className='space-x-4 md:space-x-6 flex flex-wrap items-center'>
          <a href="/" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        <a 
          href={`https://wa.me/${whatsappNumber}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full text-center'
        >
          Connect Me
        </a>
      </div>
    </nav>
  )
}

export default Navbar;