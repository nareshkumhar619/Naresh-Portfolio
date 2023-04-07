import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function AboutCard() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container style={{marginTop:"-70px"}}>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{textAlign:"justify"}}>
            An aspiring full-stack web developer with a specialization in MERN stack. Seeking
            a challenging role in a progressive organization that offers immense growth
            opportunities to implement my knowledge and skills to contribute to the success
            of the organization.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img style={{border:"2px solid white", marginTop:"-50px",height:"400px",borderRadius:"200px"}} src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nareshkumhar619/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/naresh-kumhar-722b8218b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQqZKQHVtpGmQndGHrkSNdvmGJHtjRGLJvpGpfZWMpVTllKCKcmtpHSKCKdKmjxnrrcdV"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default AboutCard;
