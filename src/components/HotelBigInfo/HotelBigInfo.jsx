import React, { useEffect, useRef, useState } from 'react'
import './HotelBigInfo.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteHotel, pushHotel, selectCurrentLikeHotel } from '../../redux/slices/favoriteReducer'
import Overview from '../Overview/Overview'
import Location from '../../Location/Location'
import AboutProperty from '../AboutProperty/AboutProperty'
import { isInViewport } from '../../utils/utils'
import Amenities from '../Amenities/Amenities'
import Policies from '../Policies/Policies'
import ModalFoto from '../ModalFoto/ModalFoto'
import ModalPopularAmenities from '../ModalPopularAmenities/ModalPopularAmenities'


export default function HotelBigInfo({ elem }) {
    console.log(elem);

    const currentHotel = useSelector(selectCurrentLikeHotel(elem?.id)) //передаем id только тогда, когда элемент найден
    const dispatch = useDispatch();

    const activeLink = 'nav-bar__item nav-bar__item_active'
    const normalLink = 'nav-bar__item'
    const [active, setActive] = useState(0)
    const overviewRef = useRef()
    const locationRef = useRef()
    const amenitiesRef = useRef()
    const policiesRef = useRef()

    //состояние модалки, нужно передать в пропсы для <Modal />
    const [modalIsOpen, setModalIsOpen] = useState(false);


    function onScroll(evt) {
        if (isInViewport(overviewRef.current)) {
            setActive(1)
        }
        if (isInViewport(locationRef.current)) {
            setActive(3)
        }
        if (isInViewport(amenitiesRef.current)) {
            setActive(4)
        }
        if (isInViewport(policiesRef.current)) {
            setActive(5)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll) //добаялется обработчик, когда компонент появляется на стр
        return () => window.removeEventListener('scroll', onScroll) //после ререндера/при размонтировании удаляем обработчик
    }, [])



    return (
        <div className='hotel-page'>
            <div className='hotel-page__block'>
                <Link to='/hotels' className="hotel-page__nav-back">
                    <i className="uil uil-previous"></i>
                    See all properties</Link>
                {currentHotel ? <button
                    className='hotel__favorite-btn hotel__favorite-btn_hotel-page like'
                    type='button'
                    onClick={() => dispatch(deleteHotel(elem))

                    }
                >
                    <i className="uil uil-heart-alt"></i>
                    Save
                </button>
                    :
                    <button
                        className='hotel__favorite-btn hotel__favorite-btn_hotel-page'
                        type='button'
                        onClick={() => dispatch(pushHotel(elem))}
                    >
                        <i className="uil uil-heart-alt"></i>
                        Save
                    </button>}
            </div>


            <ul className='hotel-page__foto-list'>
                {elem.propertyGallery?.images.slice(0, 1).map((elem, index) => {
                    return <li key={index} className='hotel-page__foto-item hotel-page__foto-item_first'><img className='hotel-page__foto hotel-page__foto_first' src={elem.image.url} /></li>
                })}
                {elem.propertyGallery?.images.slice(1, 5).map((elem, index) => {
                    return <li key={index} className='hotel-page__foto-item'><img className='hotel-page__foto' src={elem.image.url} /></li>
                })}
                <button className='hotel-page__more-foto'
                    onClick={() => setModalIsOpen(true)}
                >
                    <i className="uil uil-image-plus"></i>
                    <p>{elem.propertyGallery?.images.length - 1 + "+"}</p>
                </button>
            </ul>

            <div className='hotel-page__block hotel-page__block_sticky'>
                <div className='nav-bar__list'>
                    <a href='#overview' className={active === 1 ? activeLink : normalLink}>
                        Overview
                    </a>
                    <a href='#rooms' className={normalLink}>
                        Rooms
                    </a>
                    <a href='#location' className={active === 3 ? activeLink : normalLink} >
                        Location
                    </a>
                    <a href='#amenities' className={active === 4 ? activeLink : normalLink} >
                        Amenities
                    </a>
                    <a href='#policies' className={active === 5 ? activeLink : normalLink} >
                        Policies
                    </a>
                </div>
            </div>
            <Overview elem={elem} id="overview" overviewRef={overviewRef} />

            <div className='hotel-page__block' id="rooms">
                Rooms
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque pariatur nemo saepe, numquam reiciendis non excepturi, sapiente nisi doloribus hic repudiandae. Quidem deleniti eveniet, quas, blanditiis ab voluptates illum cupiditate error deserunt in vel similique aut totam magnam placeat quod consequatur cumque nobis laborum nostrum vero repudiandae optio magni quam? Sit laborum nisi magni atque. Fugiat incidunt dolore officiis recusandae, maxime numquam delectus dolor voluptas libero cum, quo quod iure. Accusantium et animi beatae est dicta nam hic? Magni incidunt fuga numquam commodi aliquam reiciendis unde atque libero sunt corrupti ullam quisquam temporibus consequatur, error dicta ex, voluptatum consectetur ipsam!</p>
            </div>


            <Location elem={elem} id="location" locationRef={locationRef} />
            <AboutProperty elem={elem} id="location" />

            <Amenities elem={elem} id="amenities" amenitiesRef={amenitiesRef} />

            <Policies elem={elem} id="policies" policiesRef={policiesRef} />

            <ModalFoto active={modalIsOpen} setActive={setModalIsOpen} elem={elem} />
        </div>
    )
}
