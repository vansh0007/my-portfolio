// EducationData.js
import React from 'react';
import Learning  from "./learning.gif";
import Literature  from "./literature.gif";
import Certificate from "./certificate.gif";
import './SkillsData.css';


const EducationData = () => {
  return (
    <div className="skills-data">
    <div className='data-images'>
    <img src={Learning} alt="Learning" className="mx-auto" />
      <p className="mt-2">Java</p>
    </div>
    <div className='data-images'>
    <img src={Literature} alt="Literature" className="mx-auto" />
      <p className="mt-2">Java</p>
    </div>
    <div className='data-images'>
    <img src={Certificate} alt="Certificate" className="mx-auto" />
      <p className="mt-2">Java</p>
    </div>
    <div>
      <img src="https://placehold.co/64x64" alt="XD" className="mx-auto" />
      <p className="mt-2">XD (95%)</p>
    </div>
    <div>
      <img src="https://placehold.co/64x64" alt="Illustrator" className="mx-auto" />
      <p className="mt-2">Illustrator (90%)</p>
    </div>
    <div>
      <img src="https://placehold.co/64x64" alt="Indesign" className="mx-auto" />
      <p className="mt-2">Indesign (75%)</p>
    </div>
  </div>
  );
};

export default EducationData;
