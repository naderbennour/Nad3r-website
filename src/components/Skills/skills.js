import React from "react";

import { skills } from "../../utils/nbData";
import "./skills.css";
import SkillsCard from "./SkillsCard";
const Skills = () => {
  return (
    <div
      className="skills-section
  "
    >
      <h2 className="section-heading">Skills</h2>
      <div className="skills-block">
        {skills && skills.map((skill,i)=><SkillsCard skill={skill} key={i} />)}
      </div>
    </div>
  );
};

export default Skills;
