import React from "react";
import "./Hall.css"; // подключение стилей для зала



const Hall = () => {
  return (
    <div className="hall_app">
    <div className="header_hall">
        <div className="header_text">
            <h1 className="title_text">идём<span className="span_text">в</span>кино</h1>
        </div>
    </div>
    <div className="main_hall">
        <div className="section">
            <div className="buying_info">
                <ul className="buying_info-description">
                    <li className="item_buying">
                        <p className="name_text">Звёздные войны XXIII: Атака клонированных клонов</p>
                    </li>
                    <li className="item_buying">
                        <p className="text_session">Начало сеанса: <time datetime="18:30">18:30</time></p>
                    </li>
                    <li className="item_buying">
                        <p className="number-text">Зал 1</p>
                    </li>
                </ul>
            </div>
            <div className="cinema">
                <div className="cinema-container">
                    <div className="screen"></div>
                    <div className="seats">
                    <div class="seat" data-seat="1"></div>
                      <div class="seat" data-seat="2"></div>
                      <div class="seat" data-seat="3"></div>
                      <div class="seat" data-seat="4"></div>
                      <div class="seat" data-seat="5"></div>
                      <div class="seat" data-seat="6"></div>
                      <div class="seat" data-seat="7"></div>
                      <div class="seat" data-seat="8"></div>
                      <div class="seat" data-seat="9"></div>
                      <div class="seat" data-seat="10"></div>
                      <div class="seat" data-seat="11"></div>
                      <div class="seat" data-seat="12"></div>
                      <div class="seat" data-seat="13"></div>
                      <div class="seat" data-seat="14"></div>
                      <div class="seat" data-seat="15"></div>
                      <div class="seat" data-seat="16"></div>
                      <div class="seat" data-seat="17"></div>
                      <div class="seat" data-seat="18"></div>
                      <div class="seat" data-seat="19"></div>
                      <div class="seat" data-seat="20"></div>
                      <div class="seat" data-seat="21"></div>
                      <div class="seat" data-seat="22"></div>
                      <div class="seat" data-seat="23"></div>
                      <div class="seat" data-seat="24"></div>
                      <div class="seat" data-seat="25"></div>
                      <div class="seat" data-seat="26"></div>
                      <div class="seat" data-seat="27"></div>
                      <div class="seat" data-seat="28"></div>
                      <div class="seat" data-seat="29"></div>
                      <div class="seat" data-seat="30"></div>
                      <div class="seat" data-seat="31"></div>
                      <div class="seat" data-seat="32"></div>
                      <div class="seat" data-seat="33"></div>
                      <div class="seat" data-seat="34"></div>
                      <div class="seat" data-seat="35"></div>
                      <div class="seat" data-seat="36"></div>
                      <div class="seat" data-seat="37"></div>
                      <div class="seat" data-seat="38"></div>
                      <div class="seat" data-seat="39"></div>
                      <div class="seat" data-seat="40"></div>
                      <div class="seat" data-seat="41"></div>
                      <div class="seat" data-seat="42"></div>
                      <div class="seat" data-seat="43"></div>
                      <div class="seat" data-seat="44"></div>
                      <div class="seat" data-seat="45"></div>
                      <div class="seat" data-seat="46"></div>
                      <div class="seat" data-seat="47"></div>
                      <div class="seat" data-seat="48"></div>
                      <div class="seat" data-seat="49"></div>
                    </div>
                </div>
                <div class="legend">
                  <div class="legend_item legend_item-left">
                    <div class="seat-wrapper">
                      <div class="seat free"></div>
                      <p>Свободно (250 руб)</p>
                    </div>
                    <div class="seat-wrapper">
                      <div class="seat vip"></div>
                      <p>Свободно VIP (350 руб)</p>
                    </div>
                  </div>
                  <div class="legend_item legend_item-right">
                    <div class="seat-wrapper">
                      <div class="seat occupied"></div>
                      <p>Занято</p>
                    </div>
                    <div class="seat-wrapper">
                      <div class="seat selected"></div>
                      <p>Выбрано</p>
                    </div>
                  </div>
                </div>
            </div>
              <div className="button_foot">
                <button class="custom-button">Забронировать</button>
              </div>
        </div>
    </div>
</div>
  );
};

export default Hall;
                