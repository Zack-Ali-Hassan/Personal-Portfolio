import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import im1 from "../../Images/ZackFav.png";
import p from "../../Images/p.jpeg";
import p1 from "../../Images/p1.png";
function AppHeader() {
  return (
    <div className="home">
      <section id="home">
        <Navbar bg="" expand="lg" className="header">
          <Container>
            <Navbar.Brand href="#home" className="brand">
              <img
                src={im1}
                width="70"
                height="70"
                className="d-inline-block align-top"
              ></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto navHeader">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
              <div className="btn-header">
                <a
                  className="btn"
                  href="https://personal-portfolio-xi-gules.vercel.app/"
                >
                  Hire Me
                </a>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <div className="sub-home">
            <Row>
              <Col sm={2} className="">
                <div className="home-ico">
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com">
                        <i class="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.github.com">
                        <i class="fa-brands fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com">
                        <i class="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col sm={4}>
                <div className="home-info">
                  <h2>I'm Web Developer Zackary Ali Hassan</h2>
                  <p>
                    I am a Graphic designer, Mobile developer and Web developer.
                  </p>
                  <a className="btn" href="https://www.google.com">
                    Learn more
                  </a>
                </div>
              </Col>
              <Col>
                <div className="home-image">
                  <img src={p1}></img>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default AppHeader;
