import React from "react";
import "./SelectionSeats.css";
import screenImage from "../picture/screen.png";
import FooterButton from "./FooterButton"; // Импортируем

const SelectionSeats = ({
    selectedSeats = [],
    toggleSeatSelection,
    onBook = () => {},
  }) => (
    <div className="main"> 
      <div className="main_hall">
        <div className="cinema">
          <div className="screen"
            style={{
              backgroundImage: `url(${screenImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 1,
            }}
          ></div>
          <div className="seats" style={{ zIndex: 2, width: "284px" }}>
            {[...Array(120)].map((_, index) => {
              const seatNumber = index + 1;
              const isSelected = (selectedSeats || []).includes(seatNumber);
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
      </div>
      {/* Футер под блоком выбора */}
      <FooterButton onClick={onBook}>
        Забронировать
      </FooterButton>
    </div>
);

export default SelectionSeats;