import React from 'react'
import { useSelector } from 'react-redux'
import FavoriteHotel from '../FavoriteHotel/FavoriteHotel'

export default function FavoriteHotels() {
    //использую useSelector, чтобы достать из стейта редакс значения
    const favorite = useSelector((state) => state.favorite.hotels) //обращаюсь ко всему store, внутри него по ключу конкретного куска(favorite), а внутри кусочка к онкретному стейту(item)
    console.log(favorite)

    return favorite?.map((element) => {
        return <FavoriteHotel elem={element} key={element.id} />
    })
}
