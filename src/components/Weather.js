import React, { useState, useEffect } from "react";
import "./css/style.css";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=78cbe9d7acf7a321a6eb6bd9d82ad5db`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="mt-5 bg-indigo-500 p-60">
        <div className="flex justify-center">
          <div className="input">
            <input
              type="search"
              value={search}
              className="mb-10 bg-#000000 border-solid p-4"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search City name....."
            />
          </div>
        </div>
        <div className="flex justify-center">
          {!city ? (
            <p className="text-3xl text-white">City Not Found!</p>
          ) : (
            <>
              <div>
                <h2 className="text-4xl text-white">
                  <i class="fa-solid fa-street-view"></i>
                  {search}
                </h2>
                <h1 className="text-2xl text-white">{city.temp} Cel</h1>
                <h3 className="text-2xl text-white">
                  Min : {city.temp_min} | Max : {city.temp_max}
                </h3>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;
