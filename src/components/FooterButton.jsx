import React from "react";
import "./FooterButton.css"

const FooterButton = ({ children, onClick }) => (
  <div className="button_foot">
    <button className="custom-button" onClick={onClick}>
      {children || "Забронировать"}
    </button>
  </div>
);

export default FooterButton;