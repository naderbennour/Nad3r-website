import React from 'react'

const BCprojectCard = ({project}) => {


  return (
        <div>
          <div className="main-card">
            <video autoPlay muted loop class="card-video" src={project.media}></video>
            <h3>{project.name}</h3>
            <p>
             {project.description}
            </p>
            <a target="_blank" href={project.url}>
              <button>OPEN PROJECT</button>
            </a>
          </div>
        </div>
  )
}

export default BCprojectCard