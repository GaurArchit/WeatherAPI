import React from "react";

function WeatherDeatils({ data, onExit }) {
  return (
    <div onClick={onExit.bind(this, data.id)}>
      {/* //this is same as onClick={()=>onExit(data.id)} */}

      {data.id && <h1>Yes its Wroking</h1>}
      <h1>Weather Deatials</h1>
      <p> Teamp:{data.main.temp}</p>
      <p>Pressure:{data.main.pressure}</p>
    </div>
  );
}

export default WeatherDeatils;
