import React from "react";
import "./about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import p from "../../Images/p.jpeg";
import p1 from "../../Images/p1.png";
import p2 from "../../Images/p2.png";
import ProgressBar from "react-bootstrap/ProgressBar";
function AppAbout() {
  const html_css = 90;
  const react = 85;
  const node = 88;
  const data = 80;
  const phot = 70;
  const illus = 85;
  return (
    <section id="about" className="about-us">
      <div className="title">
        <h2>About Me</h2>
        <div className="sub-title">Learn more about us</div>
        <div className="border-ttile"></div>
      </div>
      <Row>
        <Col sm={4} className="about-info">
          <p>
            My name is Zack Ali Hassan, I am a Graphic designer, Mobile
            developer and Web developer. I study Computer Application at
            Jamhuria University. In the year 2019-2020 I finished secondary
            school at AL-Ma'muun GURIEL.
          </p>
          <p>
            I also completed a diploma of Computer Technology at Savana.also in
            the year 2017-2018 I completed a diploma in ENGLISH at BRITISH
            institute. Also in 2022-2023 I completed a Data Analytics course
          </p>
          <div className="progress-bar">
            <h4>Html and Css</h4>
            <ProgressBar
              now={react}
              label={`${react}%`}
              className="ProgressBar"
            />
          </div>
          <div className="progress-bar">
            <h4>React js</h4>
            <ProgressBar
              now={react}
              label={`${react}%`}
              className="ProgressBar"
            />
          </div>
          <div className="progress-bar">
            <h4>Node js</h4>
            <ProgressBar
              now={node}
              label={`${node}%`}
              className="ProgressBar"
            />
          </div>
          <div className="progress-bar">
            <h4>Data Analytics</h4>
            <ProgressBar
              now={data}
              label={`${data}%`}
              className="ProgressBar"
            />
          </div>
          <div className="progress-bar">
            <h4>Photoshop</h4>
            <ProgressBar
              now={phot}
              label={`${phot}%`}
              className="ProgressBar"
            />
          </div>
          <div className="progress-bar">
            <h4>Illustrator</h4>
            <ProgressBar
              now={illus}
              label={`${illus}%`}
              className="ProgressBar"
            />
          </div>
          <div className="btn-about">
            <a className="btn" href="https://www.linkedin.com">
              Contact me
            </a>
          </div>
        </Col>

        <Col sm={5}>
          <div className="about-img">
            <img src={p2}></img>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default AppAbout;
