import React from 'react';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <>
    <div className='bg-lightBlue'>
    <div className='container'>
    <div className=''>
    <div>
      <a href='#'>
        <img src={logo} alt='logo'
        className='w-36'/>
      </a>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Navbar