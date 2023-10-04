import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl, domain, headers } from '../utils/utils';
import axios from 'axios';
import HotelBigInfo from '../components/HotelBigInfo/HotelBigInfo';

export default function HotelPage() {
  const { id } = useParams() //достаем id из параметров строки url
  const [hotelPage, setHotelPage] = useState({});


  const options = {
    method: 'GET',
    url: `${baseUrl}/hotels/details`,
    params: {
      hotel_id: id,
      locale: 'en_GB',
      domain: domain,
    },
    headers: headers,
  };
  useEffect(() => {
    axios.request(options)
      .then((res) => {
        setHotelPage(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [id])

  return (
    <HotelBigInfo elem={hotelPage} />
  )
}
