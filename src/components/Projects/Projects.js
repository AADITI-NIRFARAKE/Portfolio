import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import content from "../../Assets/Projects/content.jpeg";
import traffic from "../../Assets/Projects/traffic_detection.png";
import internship from "../../Assets/Projects/Internship.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              imgPath={bitsOfCode}
              isBlog={false}
              title="CodeHub"
              description="A web application for sharing knowledge which can be used by community of students having interest in coding anddevelopment to post any new ideas, research or learning which can be shared with other students."
              //ghLink=""
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              // ghLink=""
              // demoLink=""
            />
          </Col>


          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="DocQube"
              description="Developed a cool website, DocQube, where you can upload and chat with the document to understand it easily. We used LLM to help you get quick answers from the document."
              //ghLink=""
              //demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={content}
              isBlog={false}
              title="EventSyncHub"
              description="Created a dynamic content generation project for partner communications. Leveraged LLM's to automate personalized content for our users. This innovative system ensures timely and relevant messages, enhancing our communication strategy. Streamlining updates and strengthening partnerships through automated, targeted content delivery."
              //ghLink=""
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={internship}
              isBlog={false}
              title="IMS"
              description="A web-based centralized system used for better management of internships which is helpful for students seeking internship opportunities. Students will get updates via email about the application status. It is built to simplify the Internship Approval Process."
              //ghLink=""
              //demoLink=""
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              isBlog={false}
              title="SmartCityTraffic"
              description="Revolutionize urban mobility with our Traffic Surveillance project, employing cutting-edge object detection technology. Seamlessly monitor traffic flow, swiftly detect incidents, and optimize traffic management in smart cities. Enhance road safety, reduce congestion, and create a more efficient and responsive transportation system through real-time data analysis and intelligent traffic solutions."
              //ghLink=""
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
