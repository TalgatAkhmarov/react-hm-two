import React from 'react'
import './Header.css'


import logo from '../../assets/image/Logo.svg'
import Search from '../../assets/image/Search.svg'
import Favorite from '../../assets/image/Favorite.svg'
import Cart from '../../assets/image/Cart.svg'


const Header = () => {
    return (
        <header className='header'>
            
            <div className='header-container'>
                <div className='nike'>
                    <img src={logo} alt="" />
                </div>
                <div className='menu'>
                    <a href="#">Man</a>
                    <a href="#">Woman</a>
                    <a href="#">Jersey</a>
                    <a href="#">Teams</a>
                    <a href="App"></a>
                </div>
                <div className='header-icons'>
                    <img src={Search} alt="Search icon" />
                    <img src={Favorite} alt="Favorite icon" />
                    <img src={Cart} alt="Cart icon" />
                </div>
            </div>
        </header>

    )
}

export default Header