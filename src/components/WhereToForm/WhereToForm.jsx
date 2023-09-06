import React, { useEffect, useState } from 'react'
import './WhereToForm.css'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import ModalGuests from '../ModalGuests/ModalGuests'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../../redux/slices/filterReducer'
import { baseUrl, domain, headers } from '../../utils/utils'
import axios from 'axios'
export default function WhereToForm() {

    const [active, setActive] = useState(false)
    const guests = useSelector((state) => state.filter.guests)
    const search = useSelector((state) => state.filter.search)

    const dispatch = useDispatch();
    const [close, setClose] = useState(true)
    const [city, setCity] = useState([])


    //чтобы каждый раз, когда менялся поиск, менялся и инпут
    useEffect(() => {
        const options = {
            method: 'GET',
            url: `${baseUrl}/regions`,
            params: {
                domain,
                query: search,
                locale: 'en_GB'
            },
            headers,
        };
        if (search?.trim().length > 1) {
            axios.request(options).then((res) => {
                setCity(res.data.data)
                console.log(res.data.data);
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [search])

    const initialValues = {
        city: '',
        checkIn: '',
        checkOut: '',
        guests: '',
    }

    const loginSchema = Yup.object().shape({
        // email: Yup.string('Введите корректный email').email('Введите корректный email').required('Можно изменить адрес, указанный при регистрации.').min(5, 'Короткий').max(25, 'Длинный'), //ключ email - это строка, эл/адрес, обязательное поле(не пустое), минималье кол-во и максимальное кол-во символов - эти методы взяты из библиотеки Yup
    })

    const onSubmit = (values) => {
        // console.log(values);
    }
    return (
        <>
            <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={onSubmit}>
                {(formik) => {
                    return (
                        <Form className="where-to__form">
                            <div className='search__form'>
                                <label className="where-to__field">
                                    <Field
                                        className="where-to__input where-to__input_city"
                                        id="input-city"
                                        name="city"
                                        type="text"
                                        autoComplete="off"
                                        placeholder="Going to"
                                        value={search}
                                        onChange={(evt) => {
                                            if (evt.target.value.trim() === '') {
                                                setClose(true)
                                            } else {
                                                setClose(false)
                                            }
                                            dispatch(setSearch(evt.target.value))
                                        }}
                                    />
                                </label>

                                {!close &&
                                    <ul className='search__list'>
                                        {
                                            city.map((elem) => (
                                                <li className='search__item'
                                                    onClick={() => {
                                                        dispatch(setSearch(elem.regionNames.displayName))
                                                        setClose(true)
                                                    }
                                                    }
                                                >{elem.regionNames.displayName}</li>
                                            ))}

                                        {
                                            city.length === 0 && <li className='search__item'
                                            >Ничего не найдено</li>
                                        }

                                    </ul>
                                }
                            </div>


                            <label className="where-to__field">
                                <Field
                                    className="where-to__input"
                                    id="input-checkIn"
                                    name="checkIn"
                                    type="date"
                                    autoComplete="off"
                                    placeholder="Check-in"
                                />
                            </label>


                            <label className="where-to__field">
                                <Field
                                    className="where-to__input"
                                    id="input-checkOut"
                                    name="checkOut"
                                    type="date"
                                    // defaultValue="2017-05-24"
                                    autoComplete="off"
                                    placeholder="Check-out"
                                />
                            </label>

                            <button
                                className="where-to__button_guests"
                                id="input-guests"
                                name="guests"
                                onClick={() => setActive(true)}
                            >Guests
                                <p className='where-to__subtitle'>
                                    {guests.map((elem) => {
                                        return elem.id + ' room, ' + (elem.adults + elem.children) + " travellers"
                                    })}
                                </p>
                            </button>
                            <button className='where-to__search' > Search</button>
                            <ModalGuests isActive={active} setActive={setActive} />

                        </Form>)
                }}
            </Formik >

        </>
    )
}
