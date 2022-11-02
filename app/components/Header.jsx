import React from 'react'
import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.svg'

const Header = () => {
  return (
   <header className='header'>
        <div className="contenedor barra">
            <Link to="/">
                <img src={logo} alt="img logo" className='logo' />
            </Link>
            <nav className="navegacion">
                <Link to="/" >
                    Home
                </Link>
                <Link to="/us" >
                    Us
                </Link>
                <Link to="/shop" >
                    Shop
                </Link>
                <Link to="/blog" >
                    Blog
                </Link>
            </nav>
        </div>
   </header>
  )
}

export default Header