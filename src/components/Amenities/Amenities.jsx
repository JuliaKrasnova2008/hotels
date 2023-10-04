import React from 'react'
import './Amenities.css'
import { amenitiesIcon } from '../../utils/utils';

export default function Amenities({ elem, amenitiesRef }) {
    return (
        <div className='hotel-page__block hotel-page__block_amenities' id="amenities" ref={amenitiesRef}>
            <div className='about-property'>
                <div className='block__part block__part_left'>
                    <h4 className='title-block'>{elem.summary?.amenities?.amenities[0]?.title}</h4>
                </div>
                <div className='block__part block__part_right'>
                    <ul className='summary__list summary__list_amenities'>
                        {elem.summary?.amenities?.amenities[0]?.contents.map((elem, index) => {
                            return <li className='summary__subtitle summary__subtitle_amenities' key={index}>
                                <h4 className='summary__heading summary__heading_about-property'>
                                    <img className='summary__logo' src={amenitiesIcon[elem?.icon.id]} />
                                    {elem.header.text}</h4>
                                {elem.items.map((elem, index) => {
                                    return <p className='summary__items' key={index}>{elem.text}</p>
                                })}
                            </li>
                        })}
                    </ul>
                </div>
            </div>

            <div className='about-property'>
                <div className='block__part block__part_left'>
                    <h4 className='title-block'>{elem.summary?.amenities?.amenities[1]?.title}</h4>
                </div>
                <div className='block__part block__part_right'>
                    <ul className='summary__list summary__list_amenities'>
                        {elem.summary?.amenities?.amenities[1]?.contents.map((elem, index) => {
                            return <li className='summary__subtitle summary__subtitle_amenities' key={index}>
                                <h4 className='summary__heading summary__heading_about-property'>
                                    <img className='summary__logo' src={amenitiesIcon[elem?.icon.id]} />
                                    {elem.header.text}</h4>
                                {elem.items.map((elem, index) => {
                                    return <p className='summary__items' key={index}>{elem.text}</p>
                                })}
                            </li>
                        })}
                    </ul>
                </div>
            </div>

            <div className='about-property'>
                <div className='block__part block__part_left'>
                    <h4 className='title-block'>{elem.summary?.amenities?.amenities[2]?.title}</h4>
                </div>
                <div className='block__part block__part_right'>
                    <ul className='summary__list summary__list_amenities'>
                        {elem.summary?.amenities?.amenities[2]?.contents.map((elem, index) => {
                            return <li className='summary__subtitle summary__subtitle_amenities' key={index}>
                                <h4 className='summary__heading summary__heading_about-property'>
                                    <img className='summary__logo' src={amenitiesIcon[elem?.icon.id]} />
                                    {elem.header.text}</h4>
                                {elem.items.map((elem, index) => {
                                    return <p className='summary__items' key={index}>{elem.text}</p>
                                })}
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
