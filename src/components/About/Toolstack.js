import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGithub,
  SiVisualstudiocode,
  SiPostman,
  SiNodedotjs,
  SiGoogle,
  SiYoutube,
} from "react-icons/si";

function Toolstack() {
  return (
   
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <h1 className="project-heading">
    Tools <strong className="purple">Used</strong>
  </h1>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiYoutube />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs />
      </Col>
    </Row>
  );
}

export default Toolstack;
