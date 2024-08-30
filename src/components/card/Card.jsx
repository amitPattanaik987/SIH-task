import React, { useState } from "react";
import profile from "../../assets/My Photo.jpg";
import { useNavigate } from "react-router-dom";


const MentorCard = () => {
  const [skills, setSkills] = useState(["Java", "Python", "Git", "React"]);
  const navigate=useNavigate();

  
  return (
    <div
      className="mx-auto bg-white rounded-xl shadow-md overflow-hidden"
      style={{ width: "70%" }}
    >
      <div className="md:flex">
        <div className="md:w-1/3">
          <img
            className="h-full w-full object-cover"
            src={profile}
            alt="mentor"
          />
        </div>
        <div className="md:w-2/3 flex flex-col justify-between p-8">
          <div>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Star Mentor
            </div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
              Bibhuti Bhusan Rout
            </h1>
            <p className="mt-2 text-gray-500">Software Engineer L4 at Google</p>
          </div>
          <div>
            <div className="mt-2 text-gray-500 flex flex-wrap gap-2">
              {skills.map((item, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-2 text-gray-500">
              I’ll be there throughout your placement journey. We’ll work
              together to build a top-notch resume, apply in relevant job
              openings, work on LinkedIn makeover, and more!
            </p>
            <div className="mt-4">
              <span className="text-gray-500">For:</span>{" "}
              <span className="font-semibold">
                Working Professional / Fresher
              </span>
            </div>
            <div className="mt-4">
              <span className="text-gray-500">Targeting Domains:</span>{" "}
              <span className="font-semibold">Fullstack Developer</span>
            </div>
            <div className="mt-4 flex items-center">
              <span className="font-semibold text-xl text-gray-900">
                ₹12,500
              </span>
              <span className="ml-2 text-gray-500">Per Month</span>
            </div>
            <div className="mt-4 flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>{navigate("/userdata")}}>
                Get 1:1
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Book a Free Trial
              </button>
            </div>
            <p className="mt-2 text-gray-500">Next Available: Tomorrow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
