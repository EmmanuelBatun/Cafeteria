import React from "react";
import "./Beverages.css";
import ListItem from "../../../components/ListItem/ListItem";

const menuDataLeft = [
  {
    title: "OREO",
    price: 3.9,
  },
  {
    title: "MAMUT",
    price: 3.9,
  },
  {
    title: "MAZAPAN",
    price: 3.9,
  },
  {
    title: "CHOCOLATE",
    price: 3.9,
  },
  {
    title: "GANSITO",
    price: 3.9,
  }, {
    title: "CARLOS V",
    price: 3.9,
  },
  {
    title: "CAJETA",
    price: 3.9,
  },
  {
    title: "CAPUCCINO",
    price: 3.9,
  },
  {
    title: "MOKA",
    price: 3.9,
  },
  {
    title: "FLAN NAPOLITANO",
    price: 7.95,
  },
];

const menuDataMiddle = [
  {
    title: "MOKA BLANCO",
    price: 3.9,
  },
  {
    title: "CARAMEL",
    price: 2.9,
  },
  {
    title: "FRESA CREAM",
    price: 4.9,
  },
  {
    title: "SNICKERS",
    price: 2.95,
  },
  {
    title: "NUTELLA",
    price: 3.9,
  },
  {
    title: "CHORORETAS",
    price: 3.9,
  },
  {
    title: "FRAPPE CHAI",
    price: 3.9,
  },
  {
    title: "MATCHA FRAPPE",
    price: 2.7,
  },
  {
    title: "FRAPPE CHAI",
    price: 5.9,
  },
  {
    title: "RED LAVEL",
    price: 5.9,
  },
];

const menuDataRight = [
  {
    title: "JAVA CHIPS",
    price: 2.7,
  },
  {
    title: "FRAPPE CHAI",
    price: 5.9,
  },
  {
    title: "RED LAVEL",
    price: 5.9,
  },
  {
    title: "FLAN NAPOLITANO",
    price: 7.95,
  },
  {
    title: "JAVA CHIPS",
    price: 3.9,
  },
];

const Beverages = () => {
  return (
    <div className="section">
      <div className="container beverages">
        <h1 className="heading-secondary">
          FRAP<span>PPES</span>
        </h1>

        <div className="grid-container">
          <div>
            {menuDataLeft.map((data, i) => (
              <ListItem
                key={i}
                title={data.title}
                description={data.description}
                price={data.price}
              />
            ))}
          </div>

          <div>
            {menuDataMiddle.map((data, i) => (
              <ListItem
                key={i}
                title={data.title}
                description={data.description}
                price={data.price}
              />
            ))}
          </div>

          <div>
            {menuDataRight.map((data, i) => (
              <ListItem
                key={i}
                title={data.title}
                description={data.description}
                price={data.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beverages;
