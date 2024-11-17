import { useState } from "react";

export default function App() {
  const [numbersArr, setNumbersArr] = useState([]);

  function handleRoll() {
    const tempArr = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i <= 5; i++) {
      tempArr[i] = Math.floor(Math.random() * 37) + 1;
    }
    tempArr[6] = Math.floor(Math.random() * 7) + 1;
    setNumbersArr(tempArr);
  }
  return (
    <div className="app">
      <Title />
      <Randomize Numbers={numbersArr} HandleRoll={handleRoll} />
    </div>
  );
}

function Title() {
  return <div className="title">Lotomat</div>;
}

function Randomize({ Numbers, HandleRoll }) {
  return (
    <div className="main">
      <span className="numbers">
        {" "}
        {Numbers.length > 0
          ? Numbers.join(" | ")
          : "Click ROLL to generate numbers!"}
      </span>
      <button className="button" onClick={HandleRoll}>
        ROLL!{" "}
      </button>
    </div>
  );
}
