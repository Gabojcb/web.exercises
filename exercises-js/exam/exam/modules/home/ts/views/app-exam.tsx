import * as React from "react";

export /* bundle */ function AppExam() {
  const [firtsValue, setFirstValue] = React.useState(0);
  const [secondValue, setSecondValue] = React.useState(0);
  const [threeValue, setThreeValue] = React.useState(0);

  const handleClickValue = () => {
    setFirstValue(firtsValue + 1);
    setSecondValue(secondValue + 5);

    let pivote = firtsValue === 1 ? firtsValue : threeValue;
    setThreeValue(pivote * 2);
  };
  return (
    <main className="container__exercises">
      <section className="container__section">
        <div className="num">{firtsValue}</div>
        <div className="num">{secondValue}</div>
        <div className="num">{threeValue}</div>
      </section>

      <button onClick={handleClickValue} className="exercises__button-change">
        Add
      </button>
    </main>
  );
}
