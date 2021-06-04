import React from "react";
import backgroundimage from "./GroupB.jpg";
import "./Menu.css";
import { useState } from "react";

function Menu({ menuItem }) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="item">
      {menuItem.map((item) => {
        return (
          <div className="item-con" key={item.id}>
            <div className="item-container">
              <img
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                className="Groupimage"
                src={item.image}
                alt=""
              />
              {isShown && (
                <img className="backgroundimage" src={backgroundimage} alt="" />
              )}
              <h2>{item.title}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
