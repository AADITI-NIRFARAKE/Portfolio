import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar-a.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Hey, savvy people!
            <br /> <br />Let me <span className="purple">Introduce</span> Myself,
            </h1>
           
            <p className="home-about-body">
            I bring a blend of enthusiasm and expertise to the table, fueled by my love for programming and continuous learning. 
            <br />
            I've immersed myself in mastering the fundamentals and beyond, becoming fluent in classics like 
            <i>
                <b className="purple"> DSA, Problem Solving, OOPS. </b>
              </i>
          
            I am deeply invested in pioneering new web technologies and products, particularly in the realms of 
            <i>
                <b className="purple"> AI and ML. </b>
              </i> 
           

            My expertise lies in building 
            <i>
                <b className="purple"> LLM-based </b>
              </i>  
            retrieval platforms, deploying  <i>
                <b className="purple"> ML models</b>
              </i> on 
              <i>
              <b className="purple"> Django services </b>
              </i> and implementing advanced <i>
              <b className="purple"> embeddings </b>
              </i>and
              <i>
              <b className="purple"> clustering </b>
              </i> techniques.
            
            I excel in crafting POC's for LLM-based use cases, integrating LLMs like 
             <i>
              <b className="purple"> OpenAI ChatGPT and Mistral. </b>
              </i>  
            Previous experiences have honed my skills in 
            <i>
              <b className="purple"> statistical analysis, data modeling, API development, and UI integration </b>
              </i>  
            across a diverse tech stack encompassing 
            <i>
              <b className="purple"> Python, PySpark, Django, ReactJS, and Flask. </b>
              </i> 
            I am committed to driving innovation and delivering impactful solutions that push technological boundaries.
           
            <br /> <br/>
            
            Let's collaborate to turn ideas into impactful products that redefine possibilities in the digital realm.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AADITI-NIRFARAKE"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/TechWhimAaditi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aaditinirfarake/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aaditinirfarake/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
