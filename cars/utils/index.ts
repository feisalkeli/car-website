// import { useEffect } from "react";

import { log } from "console";

export async function fetchCars() {
  const headers = {
    "X-Api-Key": "fTTu75dYbmpr2YzAJXNfJw==oaPf35neqtBaofkj",
    // "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const model = "camry";
  const response = await fetch(
    "https://api.api-ninjas.com/v1/cars?model=" + model,
    {
      headers: headers,
    }
  );
  const result = await response.json();
  console.log("result", result);
  return result;
}
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
