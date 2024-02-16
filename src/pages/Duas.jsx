import React from "react";
import NavBar from "../components/NavBar";
import MorningAthkar from "./MorningAthkar";
import { Routes, Route } from "react-router-dom";
import '../styles/Dua.css'
 


const Duas = () => {
  return (
    <>
      <div className="dua-container">
        <button>
          <a className="morningAthkar" href="/morningAthkar">
            Morning Athkar <br />
            أذكار الصباح
          </a>
        </button>
        <button>
          <a className="eveningAthkar" href="/eveningAthkar">
            Evening Athkar <br />
            أذكار المساء
          </a>
        </button>
        <br />
        {/* <button><a className="eveningAthkar" href="/eveningAthkar">Evening Athkar</a></button> <br />
    <button><a className="eveningAthkar" href="/eveningAthkar">Evening Athkar</a></button> <br /> */}
      </div>
    </>
  );
};

export default Duas;
