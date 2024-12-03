import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
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
              imgPath={chatify}
              isBlog={false}
              title="Single Page Website"
              description="Developed a fully responsive static website designed to provide a clean and user-friendly experience. Technologies used are HTML, CSS, Tailwind CSS & React. Deployed the website successfully using Vercel"
              ghLink="https://github.com/UsamaBaig04/SASTechnology"
              demoLink="https://sas-technology.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ecommerce Website"
              description="Designed and developed a fully functional eCommerce platform with seamless integration of a WordPress backend. Technologies Used: React.js, WordPress, REST API, Context API, Tailwind CSS"
              ghLink="https://github.com/UsamaBaig04/SASecom"
              demoLink="https://sasengineering.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Whatsapp Notifier"
              description="Developed a robust application to automate WhatsApp messaging for marketing and notification purposes. Technologies used are  .NET, WhatsApp API (Meta)"
              ghLink="/"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="TV Monitoring Application"
              description="Built a real-time TV monitoring application tailored for the pharmaceutical industry, enabling effective monitoring and analysis of various data points. Technologies Used: React.js, REST APIs, MQTT, Redux, React Charts."
              ghLink="/"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Secure RBAC Application"
              description="Developed a secure Role-Based Access Control (RBAC) application to manage and enforce access permissions efficiently based on user roles. Technologies used: Java, PHP. SHA 256 algorithm was used for data encryption."
              ghLink="/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Inventory Management App"
              description="Created a mobile application to streamline inventory tracking and management, ensuring efficient stock control and real-time updates. Technologies Used: React Native CLI, RESTful API, JavaScript."
              ghLink="/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
