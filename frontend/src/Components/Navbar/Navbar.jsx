import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        
      </div>
      <ul className="nav_menu">
        <li onClick={()=>{setMenu("home")}}><NavLink style={{textDecoration: 'none'}} to='/'>Home</NavLink>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about")}}><NavLink style={{textDecoration: 'none'}} to='/about'>About</NavLink>{menu==="about"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("articles")}}><NavLink style={{textDecoration: 'none'}} to='/articles'>Articles</NavLink>{menu==="articles"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("register")}}><NavLink style={{textDecoration: 'none'}} to='/register'>Register</NavLink>{menu==="register"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
      <Link to='/login'><button>Login</button></Link>
        
      </div>
    </div>
  )
}

export default Navbar
