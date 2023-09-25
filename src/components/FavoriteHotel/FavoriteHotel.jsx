import React from 'react'
import { useDispatch } from 'react-redux'
import star from '../../images/star.svg'
import dislike from '../../images/dislike.svg'
import { distanse, getReviewsWord } from '../../utils/utils'
import './FavoriteHotel.css'
import { deleteHotel } from '../../redux/slices/favoriteReducer'

export default function FavoriteHotel({ elem }) {
    const dispatch = useDispatch()
    const allDays = +elem.price.priceMessages[1].value.split(' ')[3] - +elem.price.priceMessages[1].value.split(' ')[0]

    return (
        <li className='hotel hotel__favorite-page'>
            <img className='hotel__img' src={elem.propertyImage.image.url} />
            <button
                className='hotel__favorite-btn hotel__favorite-btn_favorite-page'
                type='button'
                onClick={() => dispatch(deleteHotel(elem))}
            >
                <img className='hotel__svg-favorite hotel__svg-favorite_favorite-page' src={dislike} />
            </button>
            <div className='hotel__info'>
                <div className='hotel__main-info'>
                    <h4 className='hotel__title hotel__title_favorite-page'>{elem.name}</h4>
                    <div className='hotel__stars'>
                        {
                            [...new Array(elem.star)].map((elem, index) => {
                                return <img className='hotel__svg-star' src={star} key={index} />
                            })
                        }
                    </div>

                    <p className='hotel__subtitle hotel__subtitle_distance'>{elem.destinationInfo.distanceFromDestination !== null && elem.destinationInfo.distanceFromDestination.value + distanse[elem.destinationInfo.distanceFromDestination.unit] + ' from city centre'}</p>
                </div>

                <div className='hotel__messages'>
                    <div className='hotel__messages-block hotel__messages-block_left'>
                        <div className='hotel__offer-summary'>
                            <p className='hotel__subtitle hotel__subtitle_offer-summary'>{elem.offerSummary.messages.map((elem) => {
                                return elem.message + " "
                            })}</p>
                            <p className='hotel__subtitle'></p>
                        </div>
                        <div className='hotel__reviews'>
                            <div className='hotel__reviews-score'>
                                <p className='hotel__subtitle hotel__subtitle_score'>{elem.reviews.score}</p>
                                <p className='hotel__subtitle hotel__subtitle_score-word'>{getReviewsWord(elem.reviews.score)}</p>
                            </div>
                            <p className='hotel__subtitle hotel__subtitle_total-reviews'>{elem.reviews.total + ' reviews'}</p>
                        </div>

                    </div>

                    <div className='hotel__messages-block'>
                        {elem.offerBadge !== null && elem.offerBadge.secondary !== null ?
                            <p className='hotel__subtitle hotel__subtitle_discount'>{elem.offerBadge.secondary.text}</p>
                            : null
                        }
                        <div className='hotel__subtitle_sum'>
                            <p className='hotel__subtitle hotel__subtitle_sum-without-discount'>
                                {elem.price.strikeOut !== null && '$ ' + new Intl.NumberFormat('ru-RU').format(Math.round(elem.price.strikeOut.amount * allDays))}
                            </p>
                            <p className='hotel__subtitle hotel__subtitle_sum-with-discount'>
                                {'$ ' + new Intl.NumberFormat('ru-RU').format(Math.round(elem.price.lead.amount * allDays))}
                            </p>
                        </div>
                        {/* <p className='hotel__subtitle hotel__subtitle_with-discount'>{'$ ' + Math.round(elem.elem.price.lead.amount)}</p> */}
                        <p className='hotel__subtitle'>{elem.price.strikeOut !== null ? '$ ' + new Intl.NumberFormat('ru-RU').format(Math.round(elem.price.strikeOut.amount)) : '$ ' + new Intl.NumberFormat('ru-RU').format(Math.round(elem.price.lead.amount))}<span className='hotel__subtitle_span'>{' per night'}</span></p>
                        <p className='hotel__subtitle hotel__subtitle_nights'></p>
                        <p className='hotel__subtitle hotel__subtitle_date'>
                            {allDays + ' days, ' + elem.price.priceMessages[1].value}</p>
                    </div>
                </div>

            </div>
        </li>
    )
}
