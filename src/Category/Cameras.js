import React from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";

export default function CameraMain() {
  const camera = [
    {
      id: "1",
      name: "Vloging camera",
      poster: "https://m.media-amazon.com/images/I/715ypB609wL._SL1500_.jpg",
      rental: "₹ 2,150",
      description:
        "Sony Premium Compact DSC-RX100M5A Advanced Digital 4K Camera (Black)",
      availablity: true,
    },
    {
      id: "2",
      name: "Travel Camera",
      poster: "https://m.media-amazon.com/images/I/41J3VbOeEDL._SL1200_.jpg",
      rental: "₹ 1,200",
      description:
        "DJI OSMO Pocket Handheld 3 axis Gimbal with Integrated Camera (Black)  12 MP Camera 4K Video at 60 FPS",
      availablity: false,
    },
    {
      id: "3",
      name: "Photo graphy lightings",
      poster: "https://m.media-amazon.com/images/I/51hRYlJwECL._SL1280_.jpg",
      rental: "₹ 700",
      description:
        "Backdrop Photo Light Studio Photography Background with Carry Bag - Black",
      availablity: true,
    },
    {
      id: "4",
      name: "Canon EOS 200D",
      poster: "https://m.media-amazon.com/images/I/81cEKnH692L._SL1500_.jpg",
      rental: "₹ 2900",
      description:
        "24.1MP Digital SLR Camera + EF-S 18-55mm f4 is STM Lens (Black),APS-C Approx 24.1 mp CMOS Sensor,Dual Pixel CMOS AF, Focal Length (35mm Equivalent) : 28.8 - 88mm(3x)",
      availablity: true,
    },
    {
      id: "5",
      name: "GoPro HERO10",
      poster: "https://m.media-amazon.com/images/I/515vnoAN3vL._SL1500_.jpg",
      rental: "₹ 3400",
      description:
        "Waterproof Action Camera with Front LCD and Touch Rear Screens, 5.3K60 Ultra HD Video, 23MP Photos, 1080p Live Streaming, Webcam, Stabilization",
      availablity: true,
    },
    {
      id: "6",
      name: "Sony FE 200-600mm ",
      poster: "https://m.media-amazon.com/images/I/61xSK89f4RL._SL1500_.jpg",
      rental: "₹ 2900",
      description:
        "Super telephoto zoom G lens,Direct Drive SSM for quiet, highly precise focus lens control,Sony Nano AR Coating to eliminate flare and ghosting",
      availablity: true,
    },
    {
      id: "7",
      name: "GoPro MAX",
      poster: "https://m.media-amazon.com/images/I/71OpKoQrnUL._SL1500_.jpg",
      rental: "₹ 2900",
      description:
        "1 year international + 1 year local India warranty. For 1 Year extended warranty please visit gopro.luxurypersonified.co.in . Toll-free number for any assistance-1800111776",
      availablity: true,
    },
  ];

  return (
    <div id="productsMain">
      {camera.map((product) => (
        <Camera
          id={product.id}
          name={product.name}
          poster={product.poster}
          rental={product.rental}
          description={product.description}
          availablity={product.availablity}
        />
      ))}
    </div>
  );
}

function Camera({ id, name, poster, rental, description, availablity }) {
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

      <p id="summary" style={{ marginTop: "25px" }}>
        {" "}
        {description}{" "}
      </p>
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
