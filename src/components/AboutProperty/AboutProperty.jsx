import React from 'react'
import './AboutProperty.css'
import '../../Summary/Summary.css'
import cleanliness from '../../images/cleaning.svg'
import distancing from '../../images/distance.svg'
import safety from '../../images/safity.svg'

export default function AboutProperty({ elem }) {
    return (
        <>
            <div className='hotel-page__block hotel-page__block_about-property'>

                <div className='about-property'>
                    <div className='block__part block__part_left'>
                        <h4 className='title-block'>About this property</h4>
                    </div>

                    <div className='block__part block__part_right'>
                        <div className='location__info'>
                            <div className='summary__info'>
                                <h4 className='summary__heading summary__heading_about-property'> {elem?.propertyContentSectionGroups?.aboutThisProperty.sections[0].bodySubSections[0].elements[0].header.text}</h4>
                                <p className='summary__subtitle'>{elem?.propertyContentSectionGroups?.aboutThisProperty.sections[0].bodySubSections[0].elements[0].items[0].content.text}</p>
                            </div>
                            <div className='summary__info'>
                                <h4 className='summary__heading summary__heading_about-property'> {elem?.propertyContentSectionGroups?.aboutThisProperty.sections[0].bodySubSections[1].elements[0].header.text}</h4>
                                <p className='summary__subtitle'>{elem?.propertyContentSectionGroups?.aboutThisProperty.sections[0].bodySubSections[1].elements[0].items[0].content.primary.value}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='about-property '>
                    <div className='block__part block__part_left'>
                        <h4 className='title-block'>{elem?.propertyContentSectionGroups?.aboutThisProperty.sections[1].header.text}</h4>
                    </div>

                    <div className='block__part block__part_right'>
                        <div className='location__info'>
                            <div className='summary__info'>
                                <h4 className='summary__heading summary__heading_about-property'>
                                    <img className='summary__logo' src={cleanliness} />
                                    {elem?.propertyContentSectionGroups?.aboutThisProperty.sections[1].bodySubSections[0].elements[0].header.text}</h4>
                                <ul className='summary__list'>{elem?.propertyContentSectionGroups?.aboutThisProperty.sections[1].bodySubSections[0].elements[0].items[0].contents.map((elem, index) => {
                                    return <li className='summary__subtitle' key={index}>{elem.primary.value}</li>
                                })}
                                </ul>
                            </div>
                            <div className='summary__info'>
                                <h4 className='summary__heading summary__heading_about-property'>
                                    <img className='summary__logo' src={distancing} />
                                    {elem?.propertyContentSectionGroups?.aboutThisProperty.sections[1].bodySubSections[1].elements[0].header.text}</h4>
                                <ul className='summary__list'>{elem?.propertyContentSectionGroups?.aboutThisProperty.sections[1].bodySubSections[1].elements[0].items[0].contents.map((elem, index) => {
                                    return <li className='summary__subtitle' key={index}>{elem.primary.value}</li>
                                })}
                                </ul>
                            </div>
                            <div className='summary__info'>
                                <h4 className='summary__heading summary__heading_about-property'>
                                    <img className='summary__logo' src={safety} />
                                    {elem?.propertyContentSectionGroups?.aboutThisProperty.sections[1].bodySubSections[2].elements[0].header.text}</h4>
                                <ul className='summary__list'>{elem?.propertyContentSectionGroups?.aboutThisProperty.sections[1].bodySubSections[2].elements[0].items[0].contents.map((elem, index) => {
                                    return <li className='summary__subtitle' key={index}>{elem.primary.value}</li>
                                })}
                                </ul>
                            </div>
                            <p className='summary__subtitle'>{elem?.propertyContentSectionGroups?.aboutThisProperty.sections[1].bodySubSections[3].elements[0].items[0].content?.primary.value}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
