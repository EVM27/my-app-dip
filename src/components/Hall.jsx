import React, { useState } from "react";
import "./Hall.css";
import screenImage from "./picture/screen.png";
import backgroundImage from "./picture/log.jpeg";

const Hall = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const toggleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((num) => num !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  return (
    <div
      className="hall_app container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        Width: "100%",
      }}
    >
      <div className="main">
      <div className="header_hall">
        <div className="header_text">
          <h1 className="title_text">
            идём<span className="span_text">в</span>кино
          </h1>
        </div>
      </div>
      <div className="main_hall">
                  <div className="section">
                  <div className="buying_info">
            <div className="buying_info-description">
              <div className="item_buying">
                <p className="name_text">
                  Звёздные войны XXIII: Атака клонированных клонов
                </p>
              </div>
              <div className="item_buying">
                <p className="text_session">
                  Начало сеанса: <time datetime="18:30">18:30</time>
                </p>
              </div>
              <div className="item_buying">
                <p className="number-text">Зал 1</p>
              </div>
            </div>
                </div>
          <div className="cinema">
                          <div
                  className="screen"
                  style={{
                    backgroundImage: `url(${screenImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 1
                  }}
                ></div>
                <div className="seats" style={{ zIndex: 2, width: '284px' }}>
                  {[...Array(70)].map((_, index) => {
                    const seatNumber = index + 1;
                    const isSelected = selectedSeats.includes(seatNumber);
                    return (
                      <div
                        key={index}
                        className={`seat ${isSelected ? "selected" : ""}`}
                        onClick={() => toggleSeatSelection(seatNumber)}
                      ></div>
                    );
                  })}
                </div>
            <div className="legend">
              <div className="legend_item legend_item-left">
                <div className="seat-wrapper">
                  <div className="seat free"></div>
                  <p>Свободно (250 руб)</p>
                </div>
                <div className="seat-wrapper">
                  <div className="seat vip"></div>
                  <p>Свободно VIP (350 руб)</p>
                </div>
              </div>
              <div className="legend_item legend_item-right">
                <div className="seat-wrapper">
                  <div className="seat occupied"></div>
                  <p>Занято</p>
                </div>
                <div className="seat-wrapper">
                  <div className="seat selected"></div>
                  <p>Выбрано</p>
                </div>
              </div>
            </div>
          </div>
          <div className="button_foot">
            <button className="custom-button">Забронировать</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Hall;