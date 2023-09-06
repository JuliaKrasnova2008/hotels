import React from 'react'
import './WeDoMore.css'
import CardsCarousel from '../CardsCarousel/CardsCarousel'

export default function WeDoMore() {
    return (
        <section className='we-do-more'>
            <div className='we-do-more__block'>
                <h1 className='section__title'>We do more than just hotels...</h1>
            </div>
            <CardsCarousel />
        </section>
    )
}
