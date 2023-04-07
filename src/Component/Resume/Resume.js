import React, { useState, useEffect } from "react";
import { Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particles from "../Particles"
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Naresh from "../../Assets/Naresh.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resume = Naresh;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particles />
        <div
          style={{
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Button variant="primary" href={resume} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </div>
        <Container className="resume">
          <h3>Click on Download To Get My Resume</h3>
        </Container>

        <div
          style={{
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Button variant="primary" href={resume} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default ResumeNew;
