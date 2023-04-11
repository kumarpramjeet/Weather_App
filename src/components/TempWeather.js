import React, { useEffect, useState } from "react";
import "./style.css";

const TempWeather = () => {
  let InitialValueOfCity = "Dhanbad";
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState(InitialValueOfCity);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4219ac267fcd7025452907bd5c192e8a&units=metric`;
      const response = await fetch(url);
      const resJson = await response.json();
      //   console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="text"
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            value={search}
          />
        </div>
        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}° Cel</h1>
              <h3 className="tempmin_max">
                Min :{city.temp_min}° Cel | Max :{city.temp_max}° Cel
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default TempWeather;
