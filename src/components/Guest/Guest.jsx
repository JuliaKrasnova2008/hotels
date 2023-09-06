import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCountMinus, setCountPlus } from '../../redux/slices/filterReducer';

export default function Guest({ elem }) {

    const childrenAges = useSelector((state) => state.filter.childrenAges)
    const dispatch = useDispatch();

    function minusAdults() {
        dispatch(setCountMinus({
            id: elem.id,
            key: "adults"
        }))
    }
    function minusChildren() {
        dispatch(setCountMinus({
            id: elem.id,
            key: "children"
        }))
    }

    function plusChildren() {
        dispatch(setCountPlus({
            id: elem.id,
            key: "children"
        }))
    }
    function plusAdults() {
        dispatch(setCountPlus({
            id: elem.id,
            key: "adults"
        }))
    }

    return (
        <div className='modal-guests__guests'>
            <p className='modal-guests__subtitle modal-guests__subtitle_room'>Room {elem.id}</p>
            <div className='modal-guests__guests-count'>
                <p className='modal-guests__subtitle'>Adults</p>
                <div className='counter'>
                    <button className='counter__button counter__button_minus'
                        onClick={minusAdults}
                        disabled={elem.adults === 0}
                    >-</button>
                    <span className='counter__quantity'>{elem.adults}</span>
                    <button className='counter__button counter__button_plus'
                        onClick={plusAdults}
                        disabled={elem.adults === 8}
                    >+</button>
                </div>
            </div>
            <div className='modal-guests__guests-count'>
                <p className='modal-guests__subtitle'>Children(ages 0 to 17)</p>
                <div className='counter'>
                    <button className='counter__button counter__button_minus'
                        onClick={minusChildren}
                        disabled={elem.children === 0}
                    >-</button>
                    <span className='counter__quantity'>{elem.children}</span>
                    <button className='counter__button counter__button_plus'
                        onClick={plusChildren}
                        disabled={elem.children === 4}
                    >+</button>
                </div>
            </div>
            {
                childrenAges[elem.id]?.map((elem) => {
                    return <select className='children-ages__select'>
                        {
                            [...new Array(18)].map((elem, index) => index).map((elem) => {
                                return <option className='children-ages__option' value={elem}>
                                    {elem === 0 ? 'Under 1' : elem}</option>
                            })
                        }
                    </select>
                })
            }
        </div>
    )
}
