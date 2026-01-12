import React from 'react'
import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <div className='bg-white p-3  sticky top-0 gap-10 flex justify-end'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/gallery'>Gallery</NavLink>
        <NavLink to='/products'>Products</NavLink>
    </div>
  )
}

export default Navbar