import React from "react";
import trollFace from "../images/troll-face.png";

export default function Header() {
  return (
    <header>
      <div className="header--logo--title">
        <img src={trollFace} alt="header-logo" className="header--logo" />
        <h2 className="header--title">Meme Generator</h2>
      </div>
      <p className="header--subtitle">React Course - Meme Project</p>
    </header>
  );
}
