import React from "react";
import "./contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function AppContact() {
  return (
    <section id="contact" className="contact-me">
      <div className="title">
        <h2>Contact Me</h2>
        <div className="sub-title">Learn more about us</div>
        <div className="border-ttile"></div>
      </div>
      <div className="bottom-contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31898.207507393217!2d45.27997600762026!3d2.045523767905165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58420b91f45b93%3A0xee2da9712473db4c!2sHodan%2C%20Mogadishu!5e0!3m2!1sen!2sso!4v1687344749615!5m2!1sen!2sso"
          height="350"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="contact-icon">
          <a href="https://www.linkedin.com">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://www.github.com">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.facebook.com">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div className="contact-gmail">
          <p>Zakaria153@gmail.com</p>
          <p>Copyright © 2023 Personal Portfolio</p>
        </div>
      </div>
    </section>
  );
}

export default AppContact;
