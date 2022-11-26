import React from "react";
import "./project.css";
import { Projects } from "../../utils/nbData";
import BCprojectCard from "./BCprojectCard"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Project = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="project-section caraousel-sec" id="projects">
      <h2 className="section-heading bottom-mar ">Projects</h2>
      <Slider {...settings}>
        {Projects&&Projects.map((project,i)=>
      <BCprojectCard project={project} key={i} />
    )}
 
      </Slider>
    </div>
  );
};

export default Project;
