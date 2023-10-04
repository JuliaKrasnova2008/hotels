import React from 'react'
import './Location.css'
import '../Summary/Summary.css'
import place from '../images/place.svg'
import car from '../images/car.svg'
import restaurants from '../images/restaurant.svg'

export default function Location({ elem, locationRef }) {

    return (
        <div className='hotel-page__block hotel-page__block_location' ref={locationRef}>
            <div className='block__part block__part_left'>
                <h4 className='title-block'>About this area</h4>
            </div>
            <div className='block__part block__part_right'>
                <img className='location__img' src={elem?.summary?.location.staticImage.url} />
                <div className='location__info'>
                    <div className='summary__info'>
                        <h4 className='summary__heading summary__heading_location'>
                            <img className='summary__logo' src={place} />
                            What's nearby</h4>
                    </div>
                    <div className='summary__info'>
                        <h4 className='summary__heading summary__heading_location'>
                            <img className='summary__logo' src={car} />
                            Getting around</h4>
                    </div>
                    <div className='summary__info'>
                        <h4 className='summary__heading summary__heading_location'>
                            <img className='summary__logo' src={restaurants} />
                            Restaurants</h4>
                    </div>
                </div>

            </div>


        </div>

    )
}


