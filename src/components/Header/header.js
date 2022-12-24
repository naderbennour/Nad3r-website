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
    <div
      className="main-header
  "
    >
      <div className="float-links">
        <ul className="float-ul">
          <li>
            <a target="_blank" href="https://t.me/nad3rverse">
              <img src={TelegramIco} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://wa.me/+4917631130365">
              <img src={WhatsappIco} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/naderbennour/">
              <img src={LinkdinWhiteIco} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div className="header-flex">
        <div className="left-block">
          <h4 className="heading-intro">
            Hi, I’m <span className="blue">Nader Bennour</span>.
          </h4>
          <div className="dev-head">
            <h1>
              I’m a Blockchain
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
              As a researcher and developer with a background in computer science and
              a passion for innovative technology, I am interested in using my skills
              to make a positive impact through blockchain, data science, and computer
              algorithms. I have been working with programming languages such as Solidity,
              Golang, and Python to develop blockchain and smart contracts. 
              </p>
              <p>
              I am excited to continue learning and growing in my field and to explore the 
              potential of web3 technology to revolutionize industries and create a more 
              just and equitable society.
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
                target="_blank"
                className="no-mar"
                href="https://wa.me/+4917631130365"
              >
                <img src={WhatsappIco} alt="" />
              </a>
              <a
                target="_blank"

                href="mailto: hello@nader.fyi"
              >
                <img className="spec" src={MailIco} alt="" />
              </a>
              <a target="_blank" href="https://t.me/nad3rverse">
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
