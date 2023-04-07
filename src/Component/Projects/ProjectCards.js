import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text>
          {props.techStack}
        </Card.Text>
        <div style={{ display:"flex", flexDirection:"column", alignContent:"flex-end",justifyContent:"unset" }}>
          <Button variant="primary" href={props.link} target="_blank">
            <BiLinkExternal /> &nbsp;
            {props.isBlog ? "View Blog" : "View Project"}
          </Button>
          <br />
          <Button variant="primary" href={props.live} target="_blank">
            <CgWebsite /> &nbsp;
            {props.isBlog ? "View Blog" : "Live Demo"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
