import React from 'react'
import './Hotels.css'
import WhereTo from '../WhereTo/WhereTo'
import Hotel from '../Hotel/Hotel'
import { useSelector } from 'react-redux'

export default function Hotels() {
    const hotels = useSelector((state) => state.hotels.hotels)
    console.log(hotels);
    return (
        <>
            <div className='pages__main-content pages__main-content_hotels'>
                <div className='pages__wrapper'>
                    <h1 className='pages__title'>B&B</h1>
                    <WhereTo />
                </div>
            </div>
            <ul className='hotels__list'>
                {hotels.map((elem, index) => {
                    return <Hotel elem={elem} key={index} />
                })}
            </ul>
        </>

    )
}
