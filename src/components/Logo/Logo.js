import React from "react";
import Tilty from "react-tilty";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilty
        className='Tilty br2 shadow-2'
        options={{ max: 55 }}
        style={{ height: 140, width: 160 }}
      >
        <div className='Tilty-inner'>
          <img className='pa3' alt='logo' height={"100px"} src={brain} />
        </div>
      </Tilty>
    </div>
  );
};

export default Logo;
