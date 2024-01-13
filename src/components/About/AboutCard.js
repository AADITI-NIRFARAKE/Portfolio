import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Welcome to my digital space! I'm <span className="purple">Aaditi Nirfarake, </span>
          a software professional with a focus on AI and ML. 
          <br />Armed with a BE in Computer Engineering, my journey involves translating knowledge into impactful solutions. 
          <br />Passionate about innovation, I thrive on staying ahead in technology, exploring new horizons. 
          <br />This portfolio showcases my work, reflecting my commitment to pushing boundaries and creating intelligent systems. 
          <br />
          <br />Let's connect and explore the exciting intersection of technology and creativity.
            
            
            
            <br />
          </p>
        

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aaditi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
