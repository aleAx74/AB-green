import React from "react";
import "./Loader.css";

const Loader = ({ text = "Caricamento in corso..." }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <div className="boxes">
        <div className="box">
          <div></div><div></div><div></div><div></div>
        </div>
        <div className="box">
          <div></div><div></div><div></div><div></div>
        </div>
        <div className="box">
          <div></div><div></div><div></div><div></div>
        </div>
        <div className="box">
          <div></div><div></div><div></div><div></div>
        </div>
      </div>
      <div className="loader-text">{text}</div>
    </div>
  );
};

export default Loader;
