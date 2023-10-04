import React from 'react'
import './Hotel.css'
import { distanse, getReviewsWord } from '../../utils/utils'
import star from '../../images/star.svg'
import { useDispatch, useSelector } from 'react-redux'
import { deleteHotel, pushHotel, selectCurrentLikeHotel } from '../../redux/slices/favoriteReducer'
import { useNavigate } from 'react-router-dom'

export default function Hotel(elem) {
    //создаем текущий элемент с помощью селектора из favoriteReducer
    const currentHotel = useSelector(selectCurrentLikeHotel(elem.elem?.id)) //передаем id только тогда, когда элемент найден
    // console.log(currentHotel);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allDays = +elem.elem.price.priceMessages[1].value.split(' ')[3] - +elem.elem.price.priceMessages[1].value.split(' ')[0]
    return (
        <li className='hotel'
            onClick={() => navigate(`/hotels/${elem.elem.id}`)}
        >
            {console.log(elem.elem)}
            <img className='hotel__img' src={elem.elem.propertyImage.image.url} />
            {/* если текущий элемент уже есть в массиве избранного, то отображаем активную кнопку, а если элемента нет, то кнопка обычная-не активная */}

            {currentHotel ? <button
                className='hotel__favorite-btn like'
                type='button'
                onClick={() => dispatch(deleteHotel(elem.elem))

                }
            >
                <i className="uil uil-heart-alt"></i>
            </button>
                :
                <button
                    className='hotel__favorite-btn'
                    type='button'
                    onClick={() => dispatch(pushHotel(elem.elem))}
                >
                    <i className="uil uil-heart-alt"></i>
                </button>}

            <div className='hotel__info'>
                <div className='hotel__main-info'>
                    <h4 className='hotel__title'>{elem?.elem?.name}</h4>
                    <div className='hotel__stars'>
                        {
                            [...new Array(Math.round(elem.elem?.star))].map((elem, index) => {
                                return <img className='hotel__svg-star' src={star} key={index} />
                            })
                        }
                    </div>

                    <p className='hotel__subtitle hotel__subtitle_distance'>{elem.elem.destinationInfo.distanceFromDestination !== null && elem.elem.destinationInfo.distanceFromDestination.value + distanse[elem.elem.destinationInfo.distanceFromDestination.unit] + ' from city centre'}</p>
                </div>

                <div className='hotel__messages'>
                    <div className='hotel__messages-block hotel__messages-block_left'>
                        <div className='hotel__offer-summary'>
                            <p className='hotel__subtitle hotel__subtitle_offer-summary'>{elem.elem.offerSummary.messages.map((elem) => {
                                return elem.message + " "
                            })}</p>
                            <p className='hotel__subtitle'></p>
                        </div>
                        <div className='hotel__reviews'>
                            <div className='hotel__reviews-score'>
                                <p className='hotel__subtitle hotel__subtitle_score'>{elem.elem.reviews.score}</p>
                                <p className='hotel__subtitle hotel__subtitle_score-word'>{getReviewsWord(elem.elem.reviews.score)}</p>
                            </div>
                            <p className='hotel__subtitle hotel__subtitle_total-reviews'>{elem.elem.reviews.total + ' reviews'}</p>
                        </div>

                    </div>

                    <div className='hotel__messages-block'>
                        {elem.elem.offerBadge !== null && elem.elem.offerBadge.secondary !== null ?
                            <p className='hotel__subtitle hotel__subtitle_discount'>{elem.elem.offerBadge.secondary.text}</p>
                            : null
                        }
                        <div className='hotel__subtitle_sum'>
                            <p className='hotel__subtitle hotel__subtitle_sum-without-discount'>
                                {elem.elem.price.strikeOut !== null && '$ ' + new Intl.NumberFormat('ru-RU').format(Math.round(elem.elem.price.strikeOut.amount * allDays))}
                            </p>
                            <p className='hotel__subtitle hotel__subtitle_sum-with-discount'>
                                {'$ ' + new Intl.NumberFormat('ru-RU').format(Math.round(elem.elem.price.lead.amount * allDays))}
                            </p>
                        </div>
                        {/* <p className='hotel__subtitle hotel__subtitle_with-discount'>{'$ ' + Math.round(elem.elem.price.lead.amount)}</p> */}
                        <p className='hotel__subtitle'>{elem.elem.price.strikeOut !== null ? '$ ' + new Intl.NumberFormat('ru-RU').format(Math.round(elem.elem.price.strikeOut.amount)) : '$ ' + new Intl.NumberFormat('ru-RU').format(Math.round(elem.elem.price.lead.amount))}<span className='hotel__subtitle_span'>{' per night'}</span></p>
                        <p className='hotel__subtitle hotel__subtitle_nights'></p>
                        <p className='hotel__subtitle hotel__subtitle_date'>
                            {allDays + ' days, ' + elem.elem.price.priceMessages[1].value}</p>
                    </div>
                </div>

            </div>
        </li>
    )
}
