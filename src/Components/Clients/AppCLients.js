import React from "react";
import "./clients.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import man from "../../Images/man11.png";
import woman1 from "../../Images/women11.png";
import woman2 from "../../Images/women22.png";
function AppCLients() {
  return (
    <div className="service-providing">
      <Container fluid>
        <div className="title">
          <h2>What My Clients Says</h2>
          <div className="sub-title">Learn more about us</div>
          <div className="border-ttile"></div>
        </div>
        <div className="bottom-service">
          <Row>
            <Col sm={3} className="clients1-info">
              <h3>
                <i class="fa-solid fa-quote-left"></i>
              </h3>
              <img src={man}></img>
              <p>
                web developer's work, it reinforces their expertise,
                reliability, and ability to create outstanding websites that
                meet and exceed client expectations.
              </p>
              <div className="border-ttile"></div>
              <p className="user">Khalifa</p>
            </Col>
            <Col sm={3} className="clients2-info">
              <h3>
                <i class="fa-solid fa-quote-left"></i>
              </h3>
              <img src={woman1}></img>
              <p>
                graphic designer's work reflects their ability to create
                visually captivating designs that effectively communicate
                messages, engage viewers, and elevate brands.
              </p>
              <div className="border-ttile"></div>
              <p className="user">Alia</p>
            </Col>
            <Col sm={3} className="clients3-info">
              <h3>
                <i class="fa-solid fa-quote-left"></i>
              </h3>
              <img src={woman2}></img>
              <p>
                web developer's work not only underscores their skill in
                designing and developing exceptional websites, but also
                highlights their commitment to delivering outstanding user
                experiences.
              </p>
              <div className="border-ttile"></div>
              <p className="user">Zuhana</p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default AppCLients;
