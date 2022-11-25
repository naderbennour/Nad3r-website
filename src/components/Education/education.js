import React from "react";
import "./education.css";
import { education } from "../../utils/dummyData";
import EtudcationCard from "./educationCard";

const Education = () => {
  return (
    <div className="main-education">
      <h1 className="section-heading">Education</h1>
      <div className="education-block">
        {education && education.map((education,i)=><EtudcationCard education={education} key={i} />)}
      </div>
    </div>
  );
};

export default Education;
