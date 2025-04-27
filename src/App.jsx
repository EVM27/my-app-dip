import React from "react";
import HeaderHall from "./components/HeaderHall";
import "./components/Hall";
import Hall from "./components/Hall";
import backgroundImage from "../src/picture/log.jpeg";
import './fonts/font.css';
import 'normalize.css';
import SelectionSeats from "./components/SelectionSeats";
import FooterButton from "./components/FooterButton";


function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HeaderHall />
      <Hall />
      <SelectionSeats />
    </div>
  );
}

export default App;

// ДОДЕЛАЙ МЕДИА ЗАПРОСЫ!!!