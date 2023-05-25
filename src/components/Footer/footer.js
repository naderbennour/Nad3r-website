import React from "react";
import {
  CallArrow,
  GitIco,
  LinkdinIco,
  LocationArrow,
  TimerArrow,
} from "../../utils/allImg";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-block">
        <div className="upper-detail">
          <div className="footer-detail">
            <div className="svg-ico">
              <img src={CallArrow} alt="" />
            </div>
            <div className="ph">
              <h4>CALL ME</h4>
              <p>Cell : +4917631130365</p>
            </div>
          </div>
          <div className="footer-detail">
            <div className="svg-ico">
              <img src={TimerArrow} alt="" />
            </div>
            <div className="ph">
              <h4>WORKING HOURS</h4>
              <p>
                Monday - Friday : 09:00 - 18:00 <br className="no-mb" />  
                Saturday: 09:00 - 13:00
              </p>
            </div>
          </div>
          <div className="footer-detail">
            <div className="svg-ico">
              <img src={LocationArrow} alt="" />
            </div>
            <div className="ph">
              <h4>ADDRESS</h4>
              <p>
                Munich, Bayern,
                <br className="no-mb" /> Germany
              </p>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="socials">
            <a target="_blank" href="https://github.com/naderfyi">
              <img src={GitIco} alt="" /> <span className="are">GitHub</span>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/naderfyi">
              <img src={LinkdinIco} alt="" />{" "}
              <span className="are">Linkedin</span>
            </a>
          </div>
        </div>
        <div className="copyright-area">
          <p>© 2022 hello@nader.fyi</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
