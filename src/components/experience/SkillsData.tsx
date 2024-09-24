// EducationData.js
import React from 'react';
import Java  from "./java.gif";
import Python  from "./python.gif";
import Javascript  from "./javascript.gif";
import ReactJS  from "./react.gif";
import { ReactComponent as Vue } from "./vue.svg";
import { ReactComponent as Graphql } from "./graphql.svg";
import './SkillsData.css';



const SkillsData = () => {
  return (
    <div className="skills-data">
    <div className='data-images'>
    <img src={Java} alt="After Effect" className="mx-auto" />
      <p className="mt-2">Java</p>
    </div>
    <div className='data-images'>
      <img src={Python} alt="After Effect" className="mx-auto" />
      <p className="mt-2">Python</p>
    </div>
    <div className='data-images'>
      <img src={Javascript} alt="Photoshop" className="mx-auto" />
      <p className="mt-2">JavaScript</p>
    </div>
    <div className='data-images'>
      <img src={ReactJS} alt="XD" className="mx-auto" />
      <p className="mt-2">React</p>
    </div>
    <div className='data-images'>
      <Vue className="mx-auto" />
      <p className="mt-2">Vue</p>
    </div>
    <div className='data-images'>
      <Graphql className="mx-auto" />
      <p className="mt-2">GraphQL</p>
    </div>
  </div>
  );
};

export default SkillsData;
