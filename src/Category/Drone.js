import React from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
// import { Equipment_items } from "./Equipment_items";
import { API } from "./Equipment_items";
import { useEffect } from "react";
import { useState } from "react";

export default function DroneMain() {
  const [equipment, setEquipment] = useState([]);

  const getProduct = () => {
    fetch("https://gowtham-hi.herokuapp.com/products/drone", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((response) => setEquipment(response));
  };

  useEffect(() => getProduct(), []);

  // const filterItems = equipment.filter((product)=>{
  //   return product.productType === "drone"
  // })

  return (
    <div id="productsMain">
      {equipment.map((elem) => (
        <Drone
          id={elem.id}
          name={elem.name}
          poster={elem.poster}
          rental={elem.rental}
          description={elem.description}
          availablity={elem.availablity}
        />
      ))}
    </div>
  );
}

function Drone({ id, name, poster, rental, description, availablity }) {
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
