import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Who I am",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Rishi Chakraborty" },
    { id: 2, title: "Email:", text: "rishichakraborty02@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 9735526384" },
    { id: 4, title: "Linkedin", text: "https://www.linkedin.com/in/rishi-chakraborty-16a00822b" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man-01.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hey! I am Rishi</h1>
              <div className="about__info-p1">
                I am a fresher at Vellore Institute of Technology, Vellore, pursuing B.Tech in Computer Science. I always believe in the saying "Strive For What Belongs To You". I am a hard worker and try to give my best in the work I undertake. I always enjoy coding and aspire to contribute towards the growing technical industry. I always prefer to work in a team which makes me a Team Player :)
              </div>
              <div className="about__info-p2">
                Some of my hobbies include Playing Sports like badminton, cricket, volleyball, chess and painting. Friendship and Trust values me the most and I always seek to protect them at all costs.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
