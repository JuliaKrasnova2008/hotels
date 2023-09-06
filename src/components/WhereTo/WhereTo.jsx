import React from 'react'
import './WhereTo.css'
import WhereToForm from '../WhereToForm/WhereToForm'

export default function WhereTo() {
    return (
        <section className='where-to'>
            <div className='where-to__block'>
                <h1 className='section__title'>Where to?</h1>
                <WhereToForm />
            </div>
        </section>
    )
}
