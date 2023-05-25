import React from 'react'

const RSCard = ({research}) => {
 
  return (
    <>
          <div className="inner-research">
    <div className="research-index">{research.paperNumber}</div>
    <div className="left">
      <p className="ppr-date">{research.date}</p>
      <h4 className="ppr-head">
        {research.title}
      </h4>
      <p className="ppr-para">
        {research.event}
      </p>
    </div>
    <div className="right">
      <a
        href={research.url}
        target="_blank" rel="noreferrer"
      >
        <button>View Publication</button>
      </a>
    </div>
  </div>

  </>

  )
}

export default RSCard