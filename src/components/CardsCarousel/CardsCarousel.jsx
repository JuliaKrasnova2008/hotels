import React from 'react'
import './CardsCarousel.css'

import cottages from '../../images/Cottages.jpg'
import apartments from '../../images/Apartments.avif'
import bb from '../../images/B&B.jpg'
import { Link } from 'react-router-dom'

export default function CardsCarousel() {
    return (
        <ul className='cards-carousel__list'>
            <Link to='/cottages' className='cards-carousel__link' target="_blank">
                <li className='cards-carousel__item'>
                    <img className='cards-carousel__img' src={cottages} />
                    <h3 className='cards-carousel__title'>Cottages</h3>
                </li>
            </Link>

            <Link to='/apartments' className='cards-carousel__link' target="_blank">
                <li className='cards-carousel__item'>
                    <img className='cards-carousel__img' src={apartments} />
                    <h3 className='cards-carousel__title'>Apartments</h3>
                </li>
            </Link>

            <Link to='/bb' className='cards-carousel__link' target="_blank">
                <li className='cards-carousel__item'>
                    <img className='cards-carousel__img' src={bb} />
                    <h3 className='cards-carousel__title'>B&B</h3>
                </li>
            </Link>


        </ul>
    )
}
