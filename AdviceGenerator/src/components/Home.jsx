import "./Home.css";
import pic from "../assets/images/pause.svg";
import Group3 from "../assets/images/Group3.svg";
import { useEffect, useState } from "react";

export default function Home() {
  const [advice, setAdvice] = useState({});

  async function getData() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const result = await response.json();
    setAdvice(result.slip);
  }

  useEffect(() => {
    setInterval(() => {
      getData();
    }, 10000);
  }, []);

  return (
    <div id="home-container">
      <div id="home-kidtainer">
        <h3>ADVICE #{advice.id}</h3>
        <p>{`" ${advice.advice}"`}</p>
        <img src={pic} />
      </div>
      <div className="dice" onClick={getData}>
        <img id="dice" src={Group3} />
      </div>
    </div>
  );
}
