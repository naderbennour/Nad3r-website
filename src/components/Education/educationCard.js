import React from 'react'

const EducationCard = ({education}) => {
  return (
    <div className="indiv-card">
    <div className="date-block">{education.date}</div>

    <h2 className="edu-bold">{education.diploma}e</h2>
    <p className="gpa">
      {education.university} <br />
      {education.location}
    </p>
  </div>
  )
}

export default EducationCard