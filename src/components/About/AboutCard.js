import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jargalsaihan Batjargal </span>
            from <span className="purple"> Selenge, Mongolia.</span>
            <br />
            I am currently student at Indra cyber Institute.
            <br />
            I have completed lots of coding tasks and lots of testing pages.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sharing Tech videos
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding for fun
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Batjargal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
