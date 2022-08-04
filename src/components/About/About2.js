import React from "react";
import { Container, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


//import myImg from "../../Assets/avatar.svg";
//import Tilt from "react-parallax-tilt";
//import {
 // AiFillGithub,
//  AiOutlineTwitter,
//  AiFillInstagram,
//} from "react-icons/ai";
//import { FaLinkedinIn } from "react-icons/fa";

function About2() {
  return (
    <Container fluid className="home-about-section" id="about">
        <div>
<Col md={8} className="home-about-description">
<h1 style={{ fontSize: "2.6em" }}><p>LET ME <span className="purple"> INTRODUCE </span> MYSELF</p>
</h1>
</Col>
</div>
<Card className="quote-card-view">
<Card.Body>
<blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
             I am <span className="purple">Michael Olatunji</span>
            from <span className="purple"> Lagos, Nigeria.</span>
            <br />A mid-level Software Engineer,pursuing a career in the Tech Space.
            <br />A tech ethusiast,with vast interest in software development and block-chain technology.
            <br />Am a detail oriented individual with ability to work independently and with a team. </p></blockquote>

<p className="home-about-body">
  I fell in love with programming about 24month ago, eversince then, i have  learnt
  something, i think… 🤷‍♂️
  <br />Am efficient with<i><b className="purple"> Css3, HTML5,Javascript and React.js </b></i>
  <br />
  My field of Interests are, building new &nbsp;
<i><b className="purple">Web Technologies & Products </b> and also in areas related to{" "}
<b className="purple">Learning.</b>
  </i>
  </p>
  <br />
  <br />
  <h1 className="project-heading">My&nbsp;
<strong className="purple">Softskills</strong> 
</h1>
<ul>
<li className="about-activity">
  <ImPointRight /> Good Communication skills
</li>
<li className="about-activity">
  <ImPointRight /> Time Management Skills
</li>

<li className="about-activity">
  <ImPointRight /> Analitical thinking Skills
</li>
<li className="about-activity">
  <ImPointRight /> Ability to Work Indipendently & with a Team
</li>
</ul>
      </Card.Body>
    </Card>
  </Container>
  );
}

export default About2;
