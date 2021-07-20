import React from "react";
import {} from "../css/Cnav.min.css";

const nav = () => {
  return (
    <nav className="sideNav">
      <div className="logo">
        <img src="./img/img1.webp" alt="Site Logo" />
      </div>
      <ul className="sideNavOptContainer">
        <li className="sideNavOpt">
          <i class="fas fa-spider"></i>
        </li>
        <li className="sideNavOpt">
          <i class="fas fa-radiation-alt"></i>
        </li>
        <li className="sideNavOpt">
          <i class="fas fa-dungeon"></i>
        </li>
        <li className="sideNavOpt">
          <i class="fas fa-calendar-check"></i>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
