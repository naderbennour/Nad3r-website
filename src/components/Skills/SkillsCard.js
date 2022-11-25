import React from 'react'

const SkillsCard = ({skill}) => {
  return (
    <div className="indiv-skill">
        <div className="inner-content">
        <div className="skill-logo">
            <img src={skill.image} alt={skill.name} />
        </div>
        <h2 className="skill-heading">{skill.name}</h2>
        </div>
  </div>
  )
}

export default SkillsCard