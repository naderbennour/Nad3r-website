import React from "react";
import {
  Dp,
  LinkdinWhiteIco,
  MailIco,
  TelegramIco,
  WhatsappIco,
} from "../../utils/allImg";
import "./header.css";
import Typed from "react-typed";
const Header = () => {
  return (
    <div className="main-header">
      <div className="float-links">
        <ul className="float-ul">
          <li>
            <a target="_blank" rel="noreferrer" href="https://t.me/naderfyi">
              <img src={TelegramIco} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://wa.me/+4917631130365">
              <img src={WhatsappIco} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/naderfyi/">
              <img src={LinkdinWhiteIco} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div className="header-flex">
        <div className="left-block">
            <h4 className="heading-intro">
                Hello, I'm <span className="blue">Nader</span>.
            </h4>
            <div className="dev-head">
            <h1>
              I’m a Software
              <Typed
                className="auto-type"
                strings={["Developer"]}
                typeSpeed={80}
                backSpeed={100}
                loop
              />
                </h1>
                <div className="para">
                    <p>
                        With a strong foundation in Computer Science and a burning passion for emerging technologies, I aim to utilize my skills to shape the future of digital solutions. My experience includes working with programming languages such as Solidity, Golang, and Python to craft innovative software and explore the potential of blockchain and smart contracts.
                    </p>
                    <p>
                        I am deeply committed to continuous learning and skill enhancement, particularly in the domain of web3 technology. Inspired by the transformative potential of blockchain, I am excited to explore new avenues that could revolutionize industries and create a more transparent and equitable digital society.
                    </p>
                </div>
                <div className="cv-btn">
                    <a  href="/resume/cv_naderbennour.pdf" download>
                        <button>
                            DOWNLOAD MY CV
                        </button>
                    </a>
                </div>
            <div className="social-links">
              <a
                target="_blank" rel="noreferrer"
                className="no-mar"
                href="https://wa.me/+4917631130365"
              >
                <img src={WhatsappIco} alt="" />
              </a>
              <a
                target="_blank" rel="noreferrer"

                href="mailto: hello@nader.fyi"
              >
                <img className="spec" src={MailIco} alt="" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://t.me/naderfyi">
                <img src={TelegramIco} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="right-block">
          <img src={Dp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;