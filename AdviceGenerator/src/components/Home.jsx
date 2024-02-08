import "./Home.css";
import pic from "../assets/images/pause.svg";
import dice from "../assets/images/icon-dice.svg";
import { useEffect, useState } from "react";

export default function Home() {
    useEffect()
  return (
    <div id="home-container">
      <div id="home-kidtainer">
        <h3>Advice #{"117"}</h3>
        <p>{`'it is was to sit up and take notice, what's diffuclt is gettinf up and taking action`}</p>
        <button>
          <img src={pic} />
        </button>
      </div>
    </div>
  );
}
