import React from 'react'
import './Footer.css'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer'>
            <Link to='/' className='footer__link'>
                <img className='footer__logo' src={logo} />
                <h1 className='footer__title'>Hotels
                    <span className='footer__span'>
                        .com
                    </span>
                </h1>
            </Link>
        </div>
    )
}
