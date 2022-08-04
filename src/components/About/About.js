import React from "react";
import { Container, Row, Col,} from "react-bootstrap";
import Particle from "../Particle";
//import Techstack from "./Techstack";
//import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import About2 from "../About/About2";
import About1 from "./About1";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function About() {
  return (
    <><Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }} />
          <Col md={5}style={{ paddingTop: "120px", paddingBottom: "50px" }}className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <About2/>
          <Toolstack/>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px", color: "ButtonHighlight" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiNextdotjs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiGit />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiFirebase />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPytorch />
          </Col>
        </Row>
        <About1 />
      </Container>
    </Container>
    </>
  );
}

export default About;
