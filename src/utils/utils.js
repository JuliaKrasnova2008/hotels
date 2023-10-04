import city from "../images/city.svg";
import neighborhood from "../images/neighborhood.svg";
import hotel from "../images/hotel.svg";
import airport from "../images/airport.svg";
import multiregion from "../images/multiregion.svg";
import poi from "../images/poi.svg";

import pool from "../images/pool.svg";
import pets from "../images/pet.svg";
import spa from "../images/spa.svg";
import parking from "../images/parking.svg";
import wifi from "../images/wi-fi.svg";
import air from "../images/air.svg";
import freeBreakfast from "../images/breakfast.svg";
import restaurant from "../images/restaurant.svg";
import laundry from "../images/laundry.svg";
import family from "../images/family.svg";
import activities from "../images/activ.svg";
import service from "../images/service.svg";
import airportTransfer from "../images/airportTransfer.svg";
import room from "../images/connecting.svg";
import store from "../images/hotline.svg";
import smoke from "../images/noSmoking.svg";

import place from "../images/place.svg";
import flights from "../images/flight.svg";

import done from "../images/done.svg";

export const baseUrl = "https://hotels-com-provider.p.rapidapi.com/v2";
export const headers = {
  "X-RapidAPI-Key": "64d42b556amsh1b9931b968aa116p1191dbjsnabdbd1ae35f7",
  "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
};
export const domain = "AE";
export const whereToIcons = {
  CITY: city,
  NEIGHBORHOOD: neighborhood,
  HOTEL: hotel,
  AIRPORT: airport,
  MULTIREGION: multiregion,
  POI: poi,
};

export const distanse = {
  KILOMETER: " km",
};

export function getReviewsWord(score) {
  let reviewsWord = "";
  if (score <= 2) {
    reviewsWord = "Awful";
  } else if (score <= 4) {
    reviewsWord = "Bad";
  } else if (score <= 6) {
    reviewsWord = "Good";
  } else if (score <= 8) {
    reviewsWord = "Very good";
  } else if (score <= 9) {
    reviewsWord = "Excellent";
  } else {
    reviewsWord = "Wonderful";
  }
  return reviewsWord;
}

export const amenitiesIcon = {
  pool: pool,
  pets: pets,
  spa: spa,
  local_parking: parking,
  wifi: wifi,
  ac_unit: air,
  free_breakfast: freeBreakfast,
  local_dining: restaurant,
  local_laundry_service: laundry,
  done: done,
  family_friendly: family,
  lob_activities: activities,
  room_service: service,
  airport_shuttle: airportTransfer,
  room: room,
  local_convenience_store: store,
  smoke_free: smoke,
};

export const aroundIcon = {
  place: place,
  lob_flights: flights,
};

export function isInViewport(element) {
  var rect = element.getBoundingClientRect(); //возвращает все координаты нахождения элемента на стр
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) && //вся высота окна
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}
