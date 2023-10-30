import React from "react";

import "./CoffeeSelection.css";

import ListItem from "../../../components/ListItem/ListItem";
import coffeeImage from "../../../assets/coffee-items.jpg";

const menuDataRight = [
  {
    title: "Expreso",
    description: "Deescripcion",
    price: 13,
  },
  {
    title: " Doble Expreso",
    description: "Deescripcion",
    price: 8.5,
  },
  {
    title: "Expresso Macchiato (Cortado)",
    description: "Deescripcion",
    price: 21,
  },
  {
    title: "Expreso con crema batida",
    description: "Deescripcion",
    price: 13,
  },
  {
    title: "AFFOGATO CAFE",
    description: "Deescripcion",
    price: 8.5,
  },
  {
    title: "CADE CON LECHE",
    description: "Deescripcion",
    price: 21,
  },
  {
    title: "AMERICANO",
    description: "Deescripcion",
    price: 13,
  },
  {
    title: "CAPPUCHINO",
    description: "Deescripcion",
    price: 13,
  }
];

const menuDataLeft = [
  {
    title: "LATE",
    description: "Deescripcion",
    price: 13,
  },
  {
    title: "VAINILLA",
    description: "Deescripcion",
    price: 33,
  },
  {
    title: "MOKA",
    description: "Deescripcion",
  },
  {
    title: "CARAMEL",
    description: "Deescripcion",
    price: 22,
  },
  {
    title: "CHAI LATTE (TE CHAI",
    description: "Deescripcion",
    price: 22,
  },
  {
    title: "MATCHA LATTE",
    description: "Deescripcion",
    price: 22,
  },
  {
    title: "CHOCOLATE oaxaca(Leche)",
    description: "Deescripcion",
    price: 22,
  },
  {
    title: "CHOCOLATE oaxaca(Agua)",
    description: "Deescripcion",
    price: 22,
  },
];


const CoffeeSelection = () => {
  return (
    <div className="container coffee-selection">
      <h1 className="heading-secondary">
        Bebidas<span> Calientes</span>
      </h1>

      <div className="grid-container">
      <div>
          {menuDataLeft.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
              
            />
          ))}
        </div>

        <div>
          {menuDataRight.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeSelection;
