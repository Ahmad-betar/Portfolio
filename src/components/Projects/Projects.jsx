import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ulutech from "../../assets/Projects/ulutech.png";
import watchit from "../../assets/Projects/watch it.png";

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
              imgPath={ulutech}
              isBlog={false}
              title="Ulutech Landing Page"
              description="The Next.js and Firebase Landing Page project for ulutech company is a dynamic, responsive, and efficient web solution designed to provide an engaging entry point for users into brand."
              ghLink="https://github.com/Ahmad-betar/ulutech"
              demoLink="https://ulutech.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watchit}
              isBlog={false}
              title="Watch It"
              description="Watch It is a movies/Series Web page to keep in touch with cinema."
              ghLink="https://github.com/Ahmad-betar/WatchIt"
              demoLink="https://watch-it-4efz.vercel.app/Home"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
