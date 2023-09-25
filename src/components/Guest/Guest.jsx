import React from 'react'
import './Guest.css'
import { useDispatch, useSelector } from 'react-redux'
import { setChildrenAge, setCountMinus, setCountPlus } from '../../redux/slices/filterReducer';

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
                childrenAges[elem.id]?.map((child, childIndex) => {
                    return <select className='children-ages__select'
                        defaultValue={child}
                        key={childIndex}
                        onChange={(evt) => {
                            dispatch(setChildrenAge({
                                id: elem.id,
                                index: childIndex,
                                childrenAge: +evt.target.value, //если поставить +, то строка переводится в число
                            }))
                        }}
                    >
                        {
                            [...new Array(18)].map((_, index) => index).map((age) => {
                                return <option className='children-ages__option'
                                    key={age}
                                    value={age}>
                                    {age === 0 ? 'Under 1' : age}</option>
                            })
                        }
                    </select>
                })
            }
        </div>
    )
}
