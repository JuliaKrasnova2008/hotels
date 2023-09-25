import React, { useEffect, useRef } from 'react'
import './HotelBigInfo.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteHotel, pushHotel, selectCurrentLikeHotel } from '../../redux/slices/favoriteReducer'
import star from '../../images/star.svg'


export default function HotelBigInfo({ elem }) {
    const currentHotel = useSelector(selectCurrentLikeHotel(elem?.id)) //передаем id только тогда, когда элемент найден
    const dispatch = useDispatch();
    const location = useLocation(); //поможет определить на какой якорной ссылке мы находимся
    console.log(elem);

    const activeLink = 'nav-bar__item nav-bar__item_active'
    const normalLink = 'nav-bar__item'

    function onScroll(evt) {
        console.log(evt.target.documentElement.scrollTop + window.innerHeight); //выводим кол-во пикселей, которые мы проскролили от верха стр
        console.log(overviewRef.current.getBoundingClientRect().top);//обращаюсь к ссылке элемента. по ключу current нахожу именно этот элемент и сохраняю его. возвращает все координаты нахождения элемента на стр
        console.log(overviewRef.current.getBoundingClientRect().bottom);//обращаюсь к ссылке элемента. по ключу current нахожу именно этот элемент и сохраняю его. возвращает все координаты нахождения элемента на стр
        console.log(document.documentElement.scrollHeight);//обращаюсь к ссылке элемента. по ключу current нахожу именно этот элемент и сохраняю его. возвращает все координаты нахождения элемента на стр
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll) //добаялется обработчик, когда компонент появляется на стр
        return () => window.removeEventListener('scroll', onScroll) //после ререндера/при размонтировании удаляем обработчик
    }, [])

    //получает ссылку на html-элемент, мы можем в реальном времени отслеживать,где сейчас элемент
    // в сам элемент добавляем ref={overviewRef}
    const overviewRef = useRef()

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
                <Link className='hotel-page__more-foto'>
                    <i className="uil uil-image-plus"></i>
                </Link>
            </ul>

            <div className='hotel-page__block hotel-page__block_sticky'>
                <div className='nav-bar__list'>
                    <a href='#overview' className={location ? activeLink : normalLink}>
                        Overview
                    </a>
                    <a href='#rooms' className={location ? activeLink : normalLink}>
                        Rooms
                    </a>
                    <a href='#location' className={location ? activeLink : normalLink} >
                        Location
                    </a>
                    <a href='#amenities' className={location ? activeLink : normalLink} >
                        Amenities
                    </a>
                    <a href='#policies' className={location ? activeLink : normalLink} >
                        Policies
                    </a>
                </div>
            </div>

            <div className='hotel-page__block' id="overview" ref={overviewRef}>
                <h4 className='hotel-page__title'>{elem.summary?.overview.accessibilityLabel}</h4>
                <div className='hotel__stars'>
                    {
                        [...new Array(elem.summary?.overview.propertyRating.rating)].map((elem, index) => {
                            return <img className='hotel__svg-star' src={star} key={index} />
                        })
                    }
                </div>
            </div>

            <div className='hotel-page__block' id="rooms">
                Rooms
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque pariatur nemo saepe, numquam reiciendis non excepturi, sapiente nisi doloribus hic repudiandae. Quidem deleniti eveniet, quas, blanditiis ab voluptates illum cupiditate error deserunt in vel similique aut totam magnam placeat quod consequatur cumque nobis laborum nostrum vero repudiandae optio magni quam? Sit laborum nisi magni atque. Fugiat incidunt dolore officiis recusandae, maxime numquam delectus dolor voluptas libero cum, quo quod iure. Accusantium et animi beatae est dicta nam hic? Magni incidunt fuga numquam commodi aliquam reiciendis unde atque libero sunt corrupti ullam quisquam temporibus consequatur, error dicta ex, voluptatum consectetur ipsam!</p>
            </div>

            <div className='hotel-page__block' id="location">
                Location
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque pariatur nemo saepe, numquam reiciendis non excepturi, sapiente nisi doloribus hic repudiandae. Quidem deleniti eveniet, quas, blanditiis ab voluptates illum cupiditate error deserunt in vel similique aut totam magnam placeat quod consequatur cumque nobis laborum nostrum vero repudiandae optio magni quam? Sit laborum nisi magni atque. Fugiat incidunt dolore officiis recusandae, maxime numquam delectus dolor voluptas libero cum, quo quod iure. Accusantium et animi beatae est dicta nam hic? Magni incidunt fuga numquam commodi aliquam reiciendis unde atque libero sunt corrupti ullam quisquam temporibus consequatur, error dicta ex, voluptatum consectetur ipsam!</p>
            </div>

            <div className='hotel-page__block' id="amenities">
                Amenities
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque pariatur nemo saepe, numquam reiciendis non excepturi, sapiente nisi doloribus hic repudiandae. Quidem deleniti eveniet, quas, blanditiis ab voluptates illum cupiditate error deserunt in vel similique aut totam magnam placeat quod consequatur cumque nobis laborum nostrum vero repudiandae optio magni quam? Sit laborum nisi magni atque. Fugiat incidunt dolore officiis recusandae, maxime numquam delectus dolor voluptas libero cum, quo quod iure. Accusantium et animi beatae est dicta nam hic? Magni incidunt fuga numquam commodi aliquam reiciendis unde atque libero sunt corrupti ullam quisquam temporibus consequatur, error dicta ex, voluptatum consectetur ipsam!</p>
            </div>

            <div className='hotel-page__block' id="policies">
                Policies
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque pariatur nemo saepe, numquam reiciendis non excepturi, sapiente nisi doloribus hic repudiandae. Quidem deleniti eveniet, quas, blanditiis ab voluptates illum cupiditate error deserunt in vel similique aut totam magnam placeat quod consequatur cumque nobis laborum nostrum vero repudiandae optio magni quam? Sit laborum nisi magni atque. Fugiat incidunt dolore officiis recusandae, maxime numquam delectus dolor voluptas libero cum, quo quod iure. Accusantium et animi beatae est dicta nam hic? Magni incidunt fuga numquam commodi aliquam reiciendis unde atque libero sunt corrupti ullam quisquam temporibus consequatur, error dicta ex, voluptatum consectetur ipsam!</p>
            </div>
        </div>
    )
}
