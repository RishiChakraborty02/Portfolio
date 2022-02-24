import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    
    subHeading2: "My Services",
    text:
      "Stuff I know",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text:
        "As a web developer (front-end to be specific), my target is to create cool websites of various categories. My skills include HTML, CSS and I am new to Javascript and React ",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Open Source",
      text:
        "My target as an Open Source Programmer is to contribute in different projects and give different ideas on real world entities which will benefit the community.",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Competitive Programming",
      text:
        "I am relatively new to competitive programming. It is a brain sport and I am looking forward to solve problems which will increase my thinking and logical reasoning",
    }


  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            
            <h1 className="mainHeader2">{header.subHeading2}</h1>
            <p className="mainContent2">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
