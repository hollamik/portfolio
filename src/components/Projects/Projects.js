import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={chatify}
              isBlog={false}
              title="Macosta"
              description="This is an online petshop store, Built with React.js. The site is aim to showcase variety of pet and how pet lovers can takecare of their pet. "
              ghLink="https://github.com/hollamik/Macosta-shop" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="questions-and-answers"
              description="This App was built as Educational tool, for testing young pupils knowledge of geography."
              ghLink="https://github.com/hollamik/questions-and-answers"/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="my-react-app"
              description="A personal Todo-App, built to keep Daily,Weekly&Monthly records of individuals. The app was built wiht React.js."
              ghLink="https://github.com/hollamik/my-react-app"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
