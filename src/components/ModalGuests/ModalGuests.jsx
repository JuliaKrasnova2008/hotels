import React from 'react'
import './ModalGuests.css'
import { useDispatch, useSelector } from 'react-redux'
import Guest from '../Guest/Guest.jsx'
import { removeGuests, setGuests } from '../../redux/slices/filterReducer'

export default function ModalGuests({ isActive, setActive }) {

    const guests = useSelector((state) => state.filter.guests)
    const dispatch = useDispatch();


    return (
        <div className={isActive ? 'modal-guests__overlay active' : 'modal-guests__overlay'}>
            <div className='modal-guests'>
                <h2 className='modal-guests__title'>Guests</h2>
                <button className="modal-guests__close-button"
                    onClick={() => setActive(false)}
                ></button>
                {
                    guests.map((elem) => {
                        return <Guest key={elem.id} elem={elem} />
                    })
                }
                <button
                    className='modal-guests__button modal-guests__button_add-room'
                    onClick={() => dispatch(setGuests({
                        children: 0,
                        adults: 1,
                    }))}
                    disabled={guests.length === 5}
                >Add another room</button>
                {guests.length > 1 &&
                    <button
                        className='modal-guests__button modal-guests__button_add-room'
                        onClick={() => dispatch(removeGuests())}
                    >Remove room</button>
                }

                <button className='modal-guests__button'
                    onClick={() => { setActive(false) }}
                >Done</button>
            </div>
        </div>

    )
}
