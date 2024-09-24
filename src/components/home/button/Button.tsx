import React from 'react';
import { ReactComponent as SendSVG } from "./send.svg";
import { ReactComponent as TopArrowSvg } from "./top-arrow.svg";

import './Button.css';


const CustomComponent = () => {
  return (
    <div className='button-container'>
      <button className='button'>
        <span>Say Hello</span>
         <SendSVG />
      </button>
      <button className='button work-btn'>
        <span>My Works</span>
       <TopArrowSvg />
      </button>
    </div>
  );
};

export default CustomComponent;
