import React from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
// import { Equipment_items } from "./Equipment_items";
import { API } from "./Equipment_items";
import { useEffect } from "react";
import { useState } from "react";
export default function ComputerMain() {
  const [equipment, setEquipment] = useState([]);

  const getProduct = () => {
    fetch(`${API}/computer`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((response) => setEquipment(response));
  };

  useEffect(() => getProduct(), []);

  // const filterItems = equipment.filter((products)=>{
  //    return products.productType === "computer"
  // })
  // console.log(filterItems);

  return (
    <div id="productsMain">
      {equipment.map((product, id) => (
        <Computer
          name={product.name}
          poster={product.poster}
          rental={product.rental}
          description={product.description}
          availablity={product.availablity}
          id={id}
        />
      ))}
    </div>
  );
}

function Computer({ name, poster, rental, description, availablity, id }) {
  return (
    <div id="products">
      <img id="img" src={poster} alt={name} />
      <div id="name-rental">
        <h2 id="name"> {name} </h2>

        <h2 id="rental"> {rental} </h2>
      </div>

      <div id="availablity">
        {availablity ? (
          <h3 style={{ color: "#33cc00" }}> Available </h3>
        ) : (
          <h3 style={{ color: "#ff3300" }}> Un Available </h3>
        )}
      </div>

      <p id="summary"> {description} </p>
      <div id="btn-camera">
        <Button variant="outlined" href="#outlined-buttons">
          <Badge badgeContent={0}>
            {" "}
            <AddShoppingCartOutlinedIcon />{" "}
          </Badge>
        </Button>
      </div>
    </div>
  );
}
