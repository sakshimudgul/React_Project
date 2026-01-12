import React from 'react'
import {NavLink} from "react-router-dom"
import { logo } from '../assets'

function Navbar() {
  return (
    <div className='bg-white p-3 z-40 fixed w-full top-0 gap-10 '>
      <div className='flex justify-between items-center'>
        <div>
          <img src={logo} alt=""  className='w-24 h-24'/>
        </div>
        <div className='flex flex-row gap-4'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/gallery'>Gallery</NavLink>
        <NavLink to='/products'>Products</NavLink>
        </div>
        </div>
    </div>
  )
}

export default Navbar