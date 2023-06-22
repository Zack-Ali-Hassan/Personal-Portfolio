import React from "react";
import "./portfolio.css";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import p1 from "../../Images/port1.jpg";
import p2 from "../../Images/port2.jpg";
import p3 from "../../Images/port3.png";
function AppPortfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="title">
        <h2>Portfolio</h2>
        <div className="sub-title">Learn more about us</div>
        <div className="border-ttile"></div>
      </div>
      <Carousel className="carousel">
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={p1} alt="First slide" />
          <Carousel.Caption className="carousel-caption">
            <h3>Comedian's Portfolio</h3>
            <p>
              A comedian's portfolio is a compilation of their best jokes,
              performances, and comedic timing, highlighting their talent and
              ability to bring laughter to audiences.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={p2} alt="Second slide" />

          <Carousel.Caption className="carousel-caption">
            <h3>Business Portfolio</h3>
            <p>
              A portfolio for businesses is a curated collection of projects,
              achievements, and capabilities, demonstrating the expertise and
              value that the business can provide to its clients or customers.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={p3} alt="Third slide" />

          <Carousel.Caption className="carousel-caption">
            <h3>Photographers Portfolio</h3>
            <p>
              A portfolio is a collection of a photographer's best work,
              showcasing their skills, style, and versatility in capturing
              captivating images.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default AppPortfolio;
