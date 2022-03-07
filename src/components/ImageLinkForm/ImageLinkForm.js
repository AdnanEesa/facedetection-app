import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className=' ma4 mt0'>
      <p className='f4 fw4'>
        {"This app can detect your faces, Give it a try"}
      </p>
      <div className='center'>
        <div className='form  pa4 br3 shadow-5 bg-gradient center '>
          <input
            className='f3 pa2 w-80 centre br4'
            type='text'
            onChange={onInputChange}
          />
          <button
            className='f5 fw6 w-30 grow link ph3 pv2 dib ma1 white bg-green br4'
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
