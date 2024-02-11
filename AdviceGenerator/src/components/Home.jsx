import "./Home.css";
import pic from "../assets/images/pause.svg";
import Group3 from "../assets/images/Group3.svg";
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Home() {
  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(false)

  let pauseNumber = 5000

  function pause () {

  }

 async function getData() {
     setLoading(true)
     const response= await fetch('https://api.adviceslip.com/advice')
     const result = await response.json()
     console.log(loading)
     setAdvice(result.slip)
    setLoading(false)
    console.log(loading)
}


  useEffect(() => {
    setInterval(() => {
        getData()  
        
        
    }, pauseNumber)
  }, []);
  return (
    <div id="home-container">
      <div id="home-kidtainer">
        <h3>ADVICE #{advice.id}</h3>
        {loading ? <p>loading......</p> :  <p>{`"${advice.advice}"`}</p>}
        <button>
          <img src={pic} />
        </button>
      </div>
      <img id="dice" src={Group3} />
    </div>
  );
}
