import React from 'react'
import './CottagesBlock.css'
import WhereTo from '../WhereTo/WhereTo'

export default function CottagesBlock() {
    return (
        <div className='pages__main-content pages__main-content_cottage'>
            <div className='pages__wrapper'>
                <h1 className='pages__title'>Cottages</h1>
                <WhereTo />
            </div>
        </div>
    )
}
