import React from 'react';
import Button from './button/Button'
import './Home.css';
import Logo from "./Gunvansh.jpg";
import { ReactComponent as HandWaveSvg } from "./hi.svg";
 // Import the CSS file

const Home = () => {
  return (
    <div id ="home" className="container">
      <div className="content">
        <h1 className="heading">Gunvansh Siingh 
          <HandWaveSvg className='hand-svg' />
      </h1>
        <p className="subHeading">Senior Full Stack Engineer</p>
        <hr className="hr" />
        <p className="text">I'm a creative Full Stack Engineer in Vancouver, and I'm very passionate and dedicated to my work.</p>
          <Button />
        <div>
          {/* <span className="followText">Follow me:</span> */}
          {/* <div className="followLinks">
            <a href="#" className="followText">Be</a>
            <a href="#" className="followText">8</a>
            <a href="#" className="followText">IG</a>
          </div> */}
        </div>
      </div>
      <div className="imageContainer">
        <img src={Logo} alt="Gunvansh Siingh" className="image" />
        <div className="imageOverlay">
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button style={{ color: '#374151' }}>⏮</button>
            <button style={{ color: '#374151' }}>▶</button>
            <button style={{ color: '#374151' }}>⏭</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
