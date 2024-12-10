import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Saiteja </span>
            from <span className="purple">Chicago,Illinois.</span>
            <br />
            I am currently looking for new opprtunities.
            <br />
            I have completed Masters in Computer Science at Governors State University.
            <br />
            Currently i'm working as .Net Full Stack Developer at CloversoftUSA.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> watching movies
            </li>
            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best revenge is to improve your self!"{" "}
          </p>
          <footer className="blockquote-footer">Saiteja</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
