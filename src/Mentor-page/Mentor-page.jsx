import React from 'react';
import './Mentor-page.css';
import Card from '../components/card/Card';

const Mentorprofile = () => {
  return (
    <div className='mentorprofile-container my-[20px] flex flex-col gap-[20px]'>
      <div className="flex justify-center">
        <input
          className='h-[60px] w-[60%] bg-slate-100 rounded-l-full rounded-r-full px-10'
          type="text"
          placeholder='Search For Any Skill, Domain or Name...'
        />
      </div>
      <div className="cards">
        <Card />
      </div>
    </div>
  );
};

export default Mentorprofile;
