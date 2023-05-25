import React from 'react'

const BCprojectCard = ({project}) => {


  return (
        <div>
          <div className="main-card">
            <img autoPlay muted loop class="card-img" src={project.media} alt=""></img>
            <h3>{project.name}</h3>
            <p>
             {project.description}
            </p>
            <a target="_blank" rel="noreferrer" href={project.url}>
              <button>OPEN PROJECT</button>
            </a>
          </div>
        </div>
  )
}

export default BCprojectCard