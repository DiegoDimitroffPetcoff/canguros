import { useState } from "react";
import countryMock from "../mocks/country.json";
import errorMock from "../mocks/error.json";
export function useCountries() {
  const [country, setCountry] = useState("");
  const countriesMapped = countryMock.data?.map((country) => ({
    id: country.id,
    title: country.title,
    country: country.country,
    date: country.date,
    url_img: country.url_img,
    citation: country.citation,
  }));

  return { countriesMapped };
}
