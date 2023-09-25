import React from 'react'
import './Header.css'
import logo from '../../images/logo.svg'
import favorite from '../../images/favorite.svg'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <div className='header'>
            <Link to='/' className='header__link'>
                <img className='header__logo' src={logo} />
                <h1 className='header__title'>Hotels
                    <span className='header__span'>
                        .com
                    </span>
                </h1>
            </Link>
            <Link to='/favorite' className='header__link header__link_favorite'>
                <img className='header__favorite-img' src={favorite} />
            </Link>
        </div>
    )
}
