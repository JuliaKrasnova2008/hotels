import React, { useState } from 'react'
import './ModalFoto.css'

export default function ModalFoto({ elem, active, setActive }) {

    const totalPages = Math.ceil(elem?.propertyGallery?.images.length / 10) //полное количество страниц
    const [page, setPage] = useState(1) //текущая стр

    //на оверлей добавляем проверку, если состоянеи активное - добаыляем класс modal__overlay и active, если не активно - только modal__overlay
    //по клику на оверлей, модалка закрывается
    //чтобы оно не закрываелось на контентной части нужно сделать на контент onClick={(e) => e.stopPropagation()}

    return (
        <div className={active ? 'modal__overlay active' : "modal__overlay"}
            onClick={() => setActive(false)}>
            <div className='modal__list'
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className='modal__close-button'
                    onClick={() => setActive(false)}></button>

                <ul className='hotel-page__foto-list hotel-page__foto-list_modal'>

                    {elem.propertyGallery?.images.slice((page - 1) * 10, page * 10).map((elem, index) => {
                        return <li key={index} className='hotel-page__foto-item hotel-page__foto-item_modal'>
                            <img className='hotel-page__foto hotel-page__foto_modal' src={elem?.image?.url} />
                            <p className='hotel-page__subtitle'>{elem.accessibilityText.slice(0, -7)}</p>
                        </li>
                    })}
                </ul>

                <div className='pag'>
                    <button className='pag__btn pag__btn_left'
                        onClick={() => setPage((prev) => prev - 1)} //возвращаем пред страницу
                        disabled={page === 1}
                    > {'<'}</button>
                    <p className='pag__page'>{page}/{totalPages}</p>
                    <button className='pag__btn pag__btn_right'
                        onClick={() => setPage((prev) => prev + 1)} //возвращаем след  страниц
                        disabled={page === totalPages}
                    > {'>'}</button>
                </div>
            </div>


        </div>
    )
}
