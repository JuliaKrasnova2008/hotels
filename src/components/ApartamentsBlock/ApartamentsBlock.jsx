import React from 'react'
import './ApartamentsBlock.css'
import WhereTo from '../WhereTo/WhereTo'

export default function ApartamentsBlock() {
    return (
        <div className='pages__main-content pages__main-content_apartaments'>
            <div className='pages__wrapper'>
                <h1 className='pages__title'>Apartaments</h1>
                <WhereTo />
            </div>
        </div>
    )
}
