import React from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";

export default function ComputerMain() {
  const computer = [
    {
      id: "1",
      name: "Compactible Workstations",
      poster:
        "https://www.hp.com/content/dam/sites/worldwide/personal-computers/commercial/desktops/index/Z2-Mini-FrontLeft.png",
      rental: "₹ 4275",
      description:
        "Small size. Endless options. Ideal for graphics intensive 2D/3D CAD.• Up to 128 GB DDR4-3200 SDRAM Up to Intel® Core™ i9 or Xeon® Processors8 Up to NVIDIA® Quadro RTX™ 3000 or AMD® Radeon™ Pro WX 3200",
      availablity: false,
    },
    {
      id: "2",
      name: "Workstation for Productivity",
      poster:
        "https://www.hp.com/content/dam/sites/worldwide/personal-computers/commercial/desktops/index/Z2-small-form-factor-desktopV2.png",
      rental: "₹ 3200",
      description:
        "Small size. Endless options. Ideal for graphics intensive 2D/3D CAD.Up to 128 GB DDR4-3200 SDRAM Up to Intel® Core™ i9 or Xeon® Processors8 Up to NVIDIA® Quadro RTX™ 3000 or AMD® Radeon™ Pro WX 3200 Windows 10 Pro9 - upgradeable to Windows 1110 - or Linux®",
      availablity: false,
    },
    {
      id: "3",
      name: "Apple high precision monitors (Stationry)",
      poster:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/pro-display-gallery1-201909?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1574201024213",
      rental: "₹ 6800",
      description:
        "Retina 6K display ever. Up to 1,600 nits of brightness. An astonishing 10,00,000:1 contrast ratio and super-wide viewing angle. Over a billion colours presented with exceptional accuracy.",
      availablity: true,
    },
    {
      id: "4",
      name: "Apple Mac Mini",
      poster: "https://m.media-amazon.com/images/I/816NiSihurL._SL1500_.jpg",
      rental: "₹ 1650",
      description:
        "Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD",
      availablity: true,
    },
    {
      id: "5",
      name: "Lenovo Legion Tower 5",
      poster: "https://m.media-amazon.com/images/I/71OxPxfeSXL._SL1500_.jpg",
      rental: "₹ 2950",
      description:
        "Gaming Desktop (AMD Ryzen 7 5700G/16GB/512GB SSD/Windows11/NVIDIA RTX 3060 12GB GDDR6 Graphics/Legion ColdFront 2.0 Cooling/WiFi...",
      availablity: true,
    },
  ];
  return (
    <div id="productsMain">
      {computer.map((product, id) => (
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
