import React from 'react'
import './BbBlock.css'
import WhereTo from '../WhereTo/WhereTo'

export default function BbBlock() {
    return (
        <div className='pages__main-content pages__main-content_bb'>
            <div className='pages__wrapper'>
                <h1 className='pages__title'>B&B</h1>
                <WhereTo />
            </div>
        </div>
    )
}
