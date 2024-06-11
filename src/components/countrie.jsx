import { useState } from "react";

function CountryNotFound() {
  return <p>There is no countries Searched</p>;
}

function CountryFounded({ country }) {
  return (
    <ul>
      {country?.map((country) => (
        <div key={country.id}>
          <h2>{country.country}</h2>
          <li>{country.title}</li>
          <li>{country.date}</li>

          <img
            style={{ width: "100px" }}
            src={country.url_img}
            alt={country.citation}
          />
        </div>
      ))}
    </ul>
  );
}

export function Countries({ country }) {
  const [hasCountry, setHasCountry] = useState(false);
  return (
    <>
      {hasCountry ? <CountryFounded country={country} /> : <CountryNotFound />}
    </>
  );
}
