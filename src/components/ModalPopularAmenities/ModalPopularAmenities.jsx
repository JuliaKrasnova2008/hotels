import React from 'react'
import './ModalPopularAmenities.css'
import { amenitiesIcon } from '../../utils/utils';

export default function ModalPopularAmenities({ active, setActive, elem }) {
    console.log(elem);
    return (
        <div className={active ? 'modal__overlay active' : "modal__overlay"}
            onClick={() => setActive(false)}>
            <div className='modal__list modal__list_amenities'
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className='modal__close-button'
                    onClick={() => setActive(false)}></button>
                <div className='amenities-modal__list'>
                    <ul className='amenities__list amenities__list_modal'>
                        {elem?.summary?.amenities?.takeover?.highlight[0]?.items?.map((elem, index) => {
                            return <li className='amenities__item amenities__item_modal' key={index}>
                                <img className='summary__logo' src={amenitiesIcon[elem?.icon.id]} />
                                {elem.text}

                            </li>
                        })}
                    </ul>

                    <ul className='summary__list summary__list_amenities-modal'>
                        {elem?.summary?.amenities?.takeover?.property?.map((elem, index) => {
                            return <li className='summary__subtitle summary__subtitle_policies' key={index}>
                                <h4 className='summary__heading summary__heading_about-property'>
                                    {elem.header.text}
                                </h4>
                                {elem.items?.map((elem, index) => {
                                    return <p className='summary__subtitle' key={index}>{elem?.text}</p>
                                })}
                            </li>
                        })}
                    </ul>
                </div>

            </div>
        </div>
    )
}
