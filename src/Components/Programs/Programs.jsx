import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Programs = () => {
  return (
    <div className='Programs' id="programs">
    {/*header*/}
    <div className='programs-header'>
    <div className='stroke-text'>Explore our</div>
    <div>Programs</div>
    <div className='stroke-text'>to shape you</div>
    </div>

    <div className='program-categories'>
    {programsData.map((program)=>(
        <div className='category'>
          <span className='svg'>{program.image}</span>
        <span>{program.heading}</span>
        <span>{program.details}</span>
        <div className='join-now'><span>Join Now</span><img src={RightArrow} alt=''/></div>
        </div>
    ))
}
    
    </div>
    </div>
  );
};

export default Programs
