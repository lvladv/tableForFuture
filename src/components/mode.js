import React from "react";

const Mode = props => {
  const littleURL = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

  const bigURL = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

  return (
    <div>
      <button onClick={() => props.onMode(littleURL)}>
        Маленький объем данных
      </button>
      <button onClick={() => props.onMode(bigURL)}>Большой объем данных</button>
    </div>
  );
};

export default Mode;
