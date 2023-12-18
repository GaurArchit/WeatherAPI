import "./App.css";
import React, { useState, useReducer } from "react";
import Weather from "./Weather";
import WeatherDeatils from "./WeatherDeatils";

const initialState = {
  weatherData: [],
  showView: true,
  weatherid: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "load-recipes":
      return { ...state, weatherData: action.data };
    case "go-details":
      return { ...state, showView: false };
    case "go-exit":
      return { ...state, showView: true, weatherid: action.id };
    default:
      throw new Error();
  }
};

function App() {
  const [lat, setLat] = useState(0);
  const [log, setLong] = useState(0);
  const [weath, dispatch] = useReducer(reducer, initialState);

  const handleLat = (e) => {
    setLat(e.target.value);
  };
  console.log("yes");
  const handleLog = (e) => {
    setLong(e.target.value);
  };

  const handleData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=7e9fec5e5d8ca47787a2146778d4ee39`
    )
      .then((response) => response.json())
      .then((data) => {
        let newData = [data];
        console.log(newData);
        dispatch({ type: "load-recipes", data: newData });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const showRecipe = (recipeId) =>
    dispatch({ type: "go-exit", id: weath.weatherData.id });
  return (
    <div className="App">
      <h1>Enter the location details</h1>
      <input
        value={lat}
        x
        placeholder="Enter the latitude"
        onChange={handleLat}
      />
      Enter the latitude
      <input
        value={log}
        placeholder="Enter the longitude"
        onChange={handleLog}
      />
      Enter the longitude
      <button onClick={handleData}>Here is the data</button>
      {weath.showView === true &&
        weath.weatherData.map((data) => (
          <Weather
            data={data}
            onSelect={() => dispatch({ type: "go-details" })}
          />
        ))}
      {weath.showView === false &&
        weath.weatherData.map((data) => (
          <WeatherDeatils data={data} onExit={showRecipe} />
          //This is also the same as onExit={()=>dispatch({type:" "}) then on the child directly use onExit }
        ))}
    </div>
  );
}

export default App;
