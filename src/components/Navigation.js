import React from 'react'
import './Navigation.css'
import Logo from '../assets/logo.jpeg'
const Navigation = () => {
  return (
    <nav className='main-nav'>
        <div className='logo'>
            <img src={Logo} alt='logo' width={109} height={93} />
        </div>
        <ul>
            <li><a href='/home'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/signup'>Signup</a></li>
            <li><a href='/login'>Login</a></li>
        </ul>
    </nav>
  )
}

export default Navigation