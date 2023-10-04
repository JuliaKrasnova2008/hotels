import React from 'react'
import './Policies.css'

export default function Policies({ elem, policiesRef }) {

    return (
        <div className='hotel-page__block' id="policies" ref={policiesRef}>
            <div className='about-property'>
                <div className='block__part block__part_left'>
                    <h4 className='title-block'>{elem.propertyContentSectionGroups?.policies?.sections[0].header.text}</h4>
                </div>
                <div className='block__part block__part_right'>
                    <ul className='summary__list'>
                        {elem.propertyContentSectionGroups?.policies?.sections[0].bodySubSections.map((elem, index) => {
                            return <li className='summary__subtitle summary__subtitle_policies' key={index}>
                                <h4 className='summary__heading summary__heading_about-property'>
                                    {elem.elements[0].header.text}
                                </h4>
                                {elem.elements[0]?.items?.map((elem, index) => {
                                    if (elem.__typename === "PropertyContentItemMarkup") {
                                        return <div className='summary__subtitle' dangerouslySetInnerHTML={{ __html: elem.content.text }}></div>
                                    } if (elem.__typename === "PropertyContentItemTexts") {
                                        return <div>{elem?.contents?.map((elem, index) => (<p className='summary__subtitle' key={index}>{elem.primary.value}</p>))}</div>
                                    } if (elem.__typename === "PropertyContentItemText") {
                                        return <p className='summary__subtitle' key={index}>{elem?.content?.primary?.value}</p>
                                    }
                                })}
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
