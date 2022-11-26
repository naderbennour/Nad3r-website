import React, { useState } from "react";
import { Arrow } from "../../utils/allImg";
import { researchData } from "../../utils/nbData";
import "./researchpaper.css";
import RSCard from "./RSCard";
const Researchpaper = () => {
  const [show, setShow] = useState(true);
  let showMore = () => {
   setShow(!show)
  };
  return (
    <div className="research-secction" id="research">
      <h2 className="section-heading">Research Papers</h2>
      <div className="research-block">
          <div className={show?"hide-it":""}>
              {researchData.map((research,i)=><RSCard research={research} key={i}  /> )}
              <div className="cv-btn rs-bt">
              <a
                target="_blank"
                href="https://www.researchgate.net/profile/"
              >
                <button>SHOW ALL RESEARCH PAPERS</button>
          </a>
        </div>
      </div>

        <div className="arrow">
          <img
            className={show ? "" : "rotate-it"}
            onClick={showMore}
            src={Arrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Researchpaper;
