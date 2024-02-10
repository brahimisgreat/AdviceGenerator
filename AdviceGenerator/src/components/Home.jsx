import "./Home.css";
import pic from "../assets/images/pause.svg";
import Group3 from "../assets/images/Group3.svg";
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Home() {
  const [advice, setAdvice] = useState({});

function getData() {
    axios.get('https://api.adviceslip.com/advice')
    .then(res => setAdvice(res.data.slip))
    .catch(err => console.log(err))
}


  useEffect(() => {
    getData()
    setInterval(() => {
        getData()
        console.log(advice)
    }, 20000)
       
  }, []);
  return (
    <div id="home-container">
      <div id="home-kidtainer">
        <h3>ADVICE #{advice.id}</h3>
        <p>{`"${advice.advice}"`}</p>
        <button>
          <img src={pic} />
        </button>
      </div>
      <img id="dice" src={Group3} />
    </div>
  );
}
