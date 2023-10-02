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
