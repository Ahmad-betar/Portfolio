import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { getImagesURL, getImagePath } from "./GetImagesURL";

function Projects() {
  console.log(getImagePath("humy admin"));

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
              array={getImagesURL("humy admin")}
              onOpen={() => setOpen(true)}
              imgPath={getImagePath("humy admin")}
              isBlog={false}
              title="Humy Pioneer"
              description="Pioneer Dashboard: Empowered kitchen Pioneers to add, edit, and manage their dishes efficiently."
              // ghLink="https://github.com/Ahmad-betar/WatchIt"
              demoLink="https://dashboard-pioneer-staging.humyapp.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              array={getImagesURL("humy super")}
              onOpen={() => setOpen(true)}
              imgPath={getImagePath("humy super")}
              isBlog={false}
              title="Humy Super Admin"
              description="Humy Admin Dashboard: Enabled project administrators to control, modify, and manage all aspects of the application."
              // ghLink="https://github.com/Ahmad-betar/WatchIt"
              demoLink="https://dashboard-super-admin-staging.humyapp.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              array={getImagesURL("Salon")}
              onOpen={() => setOpen(true)}
              imgPath={getImagePath("Salon")}
              isBlog={false}
              title="Salon Dashboard"
              description="The Salon Dashboard Control Panel is a robust, user-friendly interface designed to manage and oversee every facet of your application in one centralized location. Built on React, this dashboard offers unparalleled control and accessibility, allowing administrators and users to efficiently monitor, configure, and manipulate various features and functionalities."
              // ghLink="https://github.com/Ahmad-betar/WatchIt"
              // demoLink="http://3.214.164.25:98/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              array={getImagesURL("ulutech")}
              imgPath={getImagePath("ulutech")}
              onOpen={() => setOpen(true)}
              isBlog={false}
              title="Ulutech Landing Page"
              description="The Next.js and Firebase Landing Page project for ulutech company is a dynamic, responsive, and efficient web solution designed to provide an engaging entry point for users into brand."
              ghLink="https://github.com/Ahmad-betar/ulutech"
              demoLink="https://ulutech.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              array={getImagesURL("watchit")}
              onOpen={() => setOpen(true)}
              imgPath={getImagePath("watchit")}
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
