import React from "react";
import "./service.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import g from "../../Images/g.png";
import m from "../../Images/m2.png";
import w from "../../Images/w2.png";
function AppService() {
  return (
    <div className="service-providing">
      <Container fluid>
        <div className="title">
          <h2>What Services I'm Providing</h2>
          <div className="sub-title">Learn more about us</div>
          <div className="border-ttile"></div>
        </div>
        <div className="bottom-service">
          <Row>
            <Col sm={3} className="graphic-info">
              <img src={g}></img>
              <h3>Graphic Design</h3>
              <p>
                Graphic design is a highly creative and dynamic field that
                involves the visual communication of ideas, messages, and
                information.
              </p>
              <a>
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </Col>
            <Col sm={3} className="mobile-info">
              <img src={m}></img>
              <h3>Mobile Developer</h3>
              <p>
                Mobile developers are skilled professionals who specialize in
                creating applications for mobile devices such as smartphones and
                tablets.
              </p>
              <a>
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </Col>
            <Col sm={3} className="web-info">
              <img src={w}></img>
              <h3>Web Developer</h3>
              <p>
                Web developers are experts in creating and maintaining websites
                using various programming languages such as HTML, CSS, and
                JavaScript.
              </p>
              <a>
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default AppService;
