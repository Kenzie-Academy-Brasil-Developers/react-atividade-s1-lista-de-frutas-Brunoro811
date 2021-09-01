import { useState } from "react";

import "./style.css";
const FruitList = () => {
  const [fruts, setFruts] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);
  const inicial = [
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ];
  const resetFilter = () => {
    setFruts(inicial);
  };

  const filterRedFruits = () => {
    const arrFruts = fruts.filter((item) => item.color === "red");
    setFruts(arrFruts);
  };

  return (
    <div className="List-Fruts">
      <p>
        Valor Total as Frutas:{" "}
        {fruts.reduce((acc, value) => acc + value.price, 0)}
      </p>
      <ul className="Ul-List-Fruts">
        {fruts.map((item) => (
          <li key={item.name}> {item.name} </li>
        ))}
      </ul>
      <div className="Main-Buttons">
        <button className="Button" onClick={filterRedFruits}>
          Filtrar Frutas Vermelhas
        </button>
        <button className="Button" onClick={resetFilter}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default FruitList;
