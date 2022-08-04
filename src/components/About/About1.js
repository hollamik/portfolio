import React from "react";
import { ImPointRight } from "react-icons/im";

function About1(){
    return(
        <>
<h1>My&nbsp;<span className="purple">Hobbies are:</span></h1>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Scrabble
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>

            <li className="about-activity">
              <ImPointRight /> Listing to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "#f3f3f3" }}>
"In a World where everyone want to be something, be yourself and Strive to make a difference!"{" "}</p>
<footer style={{color:"rgb(241,76,6)"}}><em>---Hollamik</em></footer>
</>
    );
}
export default About1;