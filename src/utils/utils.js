import city from "../images/city.svg";
import neighborhood from "../images/neighborhood.svg";
import hotel from "../images/hotel.svg";
import airport from "../images/airport.svg";
import multiregion from "../images/multiregion.svg";
import poi from "../images/poi.svg";

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
