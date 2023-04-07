import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particals from "../Particles"

import FlashCard from "../../Assets/FlashCard.png";
import EcommerceApp from "../../Assets/EcommerceApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particals/>
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FlashCard}
              isBlog={false}
              title="FlashCard-Generator"
              description="Its a flashcard generator website. It helps the students to learn and memorize information quickly and efficiently. you can create effective flashcards that will help you study more effectively. Students don't need to carry their notes all the time."

              techStack="HTML | CSS | JavaScript | React | Redux | Git | Formik | Tailwind "
              
              link="https://github.com/nareshkumhar619/Flashcard-Generator--Almabetter/"
              live="https://flashcard-generator-almabetter.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EcommerceApp}
              isBlog={false}
              title="Ecommerce-App"
              description="Its a Eccomerce Website for Restuarents .It helps to customers and Seller both to Online selling and buying food. You can Order any Item Add to Cart and By With Calculate Bill And Full Details Related bill and items With images."
              techStack="HTML | CSS | JavaScript | React | Redux | Git "
              link="https://github.com/nareshkumhar619/Ecommerce/"
              live="https://naresh-ecommerce.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
