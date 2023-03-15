import React, { useState } from 'react';


export default function Random(props) {
  const [randomNumber, setRandomNumber] = useState(0);

  function newNumber() {
    const newRandomNumber = Math.floor(Math.random() * 826) + 1;
    setRandomNumber(newRandomNumber);
    props.onClick(newRandomNumber);
  }

  return (
    <div >
      <button onClick={newNumber}>
      🃏Get a Card {randomNumber}🃏
      </button>
    </div>
  );
}
