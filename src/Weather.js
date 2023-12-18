import React from "react";

function Weather({ data, onSelect }) {
  return (
    <div className="Shoew" onClick={onSelect}>
      <h3>{data.base}</h3>
      <p>{data.id}</p>
      <p>{data.name}</p>
    </div>
  );
}

export default Weather;
