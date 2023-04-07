import React from "react";
import { Container } from "react-bootstrap";
import Particles from "../Particles";
import Aboutcard from "./AboutCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Particles />
      <Container>
            <h1 style={{ fontSize: "2.1em"}}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
      </Container>
    </Container>
  );
}

export default About;
