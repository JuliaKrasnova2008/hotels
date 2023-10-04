import React, { useRef, useState } from 'react'
import './Overview.css'
import '../../Summary/Summary.css'
import star from '../../images/star.svg'
import { Link } from 'react-router-dom';
import { amenitiesIcon, aroundIcon } from '../../utils/utils';
import ModalPopularAmenities from '../ModalPopularAmenities/ModalPopularAmenities';


export default function Overview({ elem, overviewRef }) {
    //получает ссылку на html-элемент, мы можем в реальном времени отслеживать,где сейчас элемент
    // в сам элемент добавляем ref={overviewRef}
    //состояние модалки, нужно передать в пропсы для <Modal />
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className='hotel-page__block hotel-page__block_overview' id="overview" ref={overviewRef}>
            <div className='overview__part overview__part_left'>
                <div className='overview__main-info'>
                    <h4 className='overview__title'>{elem.summary?.overview.accessibilityLabel.split("").slice(12)}</h4>
                    <div className='overview__stars'>
                        {
                            [...new Array(elem.summary?.overview.propertyRating.rating)].map((elem, index) => {
                                return <img className='hotel__svg-star' src={star} key={index} />
                            })
                        }
                    </div>
                    <p className='overview__description'>{elem.summary?.tagline}</p>
                </div>

                <div className='review-info'>
                    <p className='review-info__value'>{elem?.reviewInfo?.summary.overallScoreWithDescriptionA11y.value}</p>
                    <Link className='overview__link'>{elem?.reviewInfo?.summary.propertyReviewCountDetails.shortDescription}</Link>
                </div>

                <div className='amenities'>
                    <h4 className='summary__heading'>Popular amenities</h4>
                    <ul className='amenities__list'>
                        {elem?.summary?.amenities.topAmenities.items.map((elem, index) => {
                            return <li className='amenities__item' key={index}>
                                <img className='summary__logo' src={amenitiesIcon[elem?.icon.id]} />
                                {elem.text}
                            </li>
                        })}
                    </ul>
                    <button
                        className='overview__link'
                        onClick={() => setModalIsOpen(true)}
                    >See all</button>
                </div>
            </div>


            <div className='overview__part'>
                <div className='map'>
                    <p className='map__adress'>{elem?.summary?.location.address.secondAddressLine}</p>
                </div>
                <div className='around'>
                    <h4 className='summary__heading summary__heading_around '>{elem?.summary?.nearbyPOIs.header.text}</h4>
                    <ul className='around__list'>
                        {elem?.summary?.nearbyPOIs.items.map((elem, index) => {
                            return <li className='around__item' key={index}>
                                <img className='summary__logo' src={aroundIcon[elem?.icon.id]} />
                                <p className='around__place'>{elem.text}</p>
                                <p className='around__text'>{elem.moreInfo}</p>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            <ModalPopularAmenities active={modalIsOpen} setActive={setModalIsOpen} elem={elem} />
        </div>
    )
}

