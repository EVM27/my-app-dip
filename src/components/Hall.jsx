import React from "react";
import "./Hall.css";

const Hall = () => (
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
                  Начало сеанса: <time dateTime="18:30">18:30</time>
                </p>
              </div>
              <div className="item_buying">
                <p className="number-text">Зал 1</p>
              </div>
            </div>
          </div>
        </div>
);

export default Hall;