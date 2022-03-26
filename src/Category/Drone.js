import React from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";

export default function DroneMain() {
  const products = [
    {
      id: "1",
      name: "MATRICE 300 RTK ",
      poster:
        "https://i0.wp.com/blog.flykit.app/wp-content/uploads/2020/05/dji-matrice-300-rtk.jpg?resize=1068%2C631&ssl=1",
      rental: "₹ 4500",
      description:
        "The Matrice 300 RTK offers up to 55 minutes of flight time, advanced AI capabilities, 6 Directional Sensing & Positioning and more, setting a whole new standard for the commercial drone industry by combining intelligence with high-performance and unrivaled reliability.",
      availablity: false,
    },
    {
      id: "2",
      name: "DJI Tello Nano Drone",
      poster: "https://m.media-amazon.com/images/I/61lcGOsryFL._SL1364_.jpg",
      rental: "₹ 4500",
      description:
        "Little drone for kids and adults that’s a blast to fly and helps users learn about drones with coding education,VR headset compatibility,fly with a breathtaking first-person view. Control Range: 25",
      availablity: false,
    },
    {
      id: "3",
      name: "Foldable RC Drone",
      poster: "https://m.media-amazon.com/images/I/61MgTMzLBAS._SL1405_.jpg",
      rental: "₹ 4500",
      description:
        "Drone with Camera Live Video,WiFi FPV Drone for Adults with HD 120° Wide Angle Camera 1200 Mah Long Flight time Auto Hover Fold able RC Drone",
      availablity: false,
    },
    {
      id: "4",
      name: "DJI FPV Combo",
      poster: "https://m.media-amazon.com/images/I/61N20OJMa-L._AC_SX466_.jpg",
      rental: "₹ 4500",
      description:
        "First-Person View Drone UAV Quadcopter with 4K Camera, S Flight Mode, Super-Wide 150° FOV, HD Low-Latency Transmission, Emergency Brake and Hover, Gray",
      availablity: false,
    },
    {
      id: "5",
      name: "DJI Phantom 4 Pro V2.0",
      poster: "https://m.media-amazon.com/images/I/61SLXpWkYQL._AC_SX466_.jpg",
      rental: "₹ 4500",
      description:
        "DJI Phantom 4 Pro V2.0 - Drone Quadcopter UAV with 20MP Camera 1 CMOS Sensor 4K H.265 Video 3-Axis Gimbal White",
      availablity: false,
    },
    {
      id: "6",
      name: "Skydio 2",
      poster:
        "https://cdn.shopify.com/s/files/1/2316/4925/products/Noah-StarterKit_proc2k_optimized_832x640.png?v=1641314340",
      rental: "₹ 2450",
      description:
        "Designed to be your personal film crew, Skydio 2+ comes with unmatched autonomous subject tracking and 360 obstacle avoidance, all while capturing stunning 4K60 HDR content.",
      availablity: false,
    },
    {
      id: "7",
      name: "Holy Stone HS270 GPS 2.7K",
      poster: "https://m.media-amazon.com/images/I/71MOSFuzn7S._AC_SL1500_.jpg",
      rental: "₹ 4500",
      description:
        "Holy Stone HS270 GPS 2.7K Drone with FHD FPV Camera Live Video for Adults, Portable Selfie Quadcopter with 2 Batteries for Beginners with Auto Return Home",
      availablity: false,
    },
  ];

  return (
    <div id="productsMain">
      {products.map((elem) => (
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
