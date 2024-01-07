import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ulutech1 from "../../assets/Projects/ulutech/ulutech.png";
import ulutech2 from "../../assets/Projects/ulutech/ulutech2.png";
import ulutech3 from "../../assets/Projects/ulutech/ulutech3.png";
import ulutech4 from "../../assets/Projects/ulutech/ulutech4.png";
import ulutech5 from "../../assets/Projects/ulutech/ulutech5.png";
import ulutech6 from "../../assets/Projects/ulutech/ulutech6.png";
import watchit1 from "../../assets/Projects/watchit/watch it.png";
import watchit2 from "../../assets/Projects/watchit/watchit2.png";
import watchit3 from "../../assets/Projects/watchit/watchit3.png";
import watchit4 from "../../assets/Projects/watchit/watchit4.png";
import watchit5 from "../../assets/Projects/watchit/watchit5.png";
import watchit6 from "../../assets/Projects/watchit/watchit6.png";
import watchit7 from "../../assets/Projects/watchit/watchit7.png";
import salon1 from "../../assets/Projects/Salon/1.png";
import salon2 from "../../assets/Projects/Salon/2.png";
import salon3 from "../../assets/Projects/Salon/3.png";
import salon4 from "../../assets/Projects/Salon/4.png";
import salon5 from "../../assets/Projects/Salon/5.png";
import salon6 from "../../assets/Projects/Salon/6.png";
import salon7 from "../../assets/Projects/Salon/7.png";
import salon8 from "../../assets/Projects/Salon/8.png";
import salon9 from "../../assets/Projects/Salon/9.png";
import salon10 from "../../assets/Projects/Salon/10.png";
import salon11 from "../../assets/Projects/Salon/11.png";
import salon12 from "../../assets/Projects/Salon/12.png";
import alpha1 from "../../assets/Projects/Alpha/1.png";
import alpha2 from "../../assets/Projects/Alpha/2.png";
import alpha3 from "../../assets/Projects/Alpha/3.png";
import alpha4 from "../../assets/Projects/Alpha/4.png";
import alpha5 from "../../assets/Projects/Alpha/5.png";
import alpha6 from "../../assets/Projects/Alpha/6.png";
import alpha7 from "../../assets/Projects/Alpha/7.png";

function Projects() {
  const ulutechArray = [
    ulutech1,
    ulutech2,
    ulutech3,
    ulutech5,
    ulutech6,
    ulutech4,
  ];
  const watchitArray = [
    watchit1,
    watchit2,
    watchit3,
    watchit4,
    watchit5,
    watchit6,
    watchit7,
  ];
  const salonArray = [
    salon1,
    salon2,
    salon3,
    salon4,
    salon10,
    salon5,
    salon6,
    salon12,
    salon7,
    salon8,
    salon9,
    salon11,
  ];
  const alphaArray = [alpha1, alpha2, alpha3, alpha4, alpha5, alpha6, alpha7];

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
              array={salonArray}
              onOpen={() => setOpen(true)}
              imgPath={salon2}
              isBlog={false}
              title="Salon Dashboard"
              description="The Salon Dashboard Control Panel is a robust, user-friendly interface designed to manage and oversee every facet of your application in one centralized location. Built on React, this dashboard offers unparalleled control and accessibility, allowing administrators and users to efficiently monitor, configure, and manipulate various features and functionalities."
              // ghLink="https://github.com/Ahmad-betar/WatchIt"
              // demoLink="https://watch-it-4efz.vercel.app/Home"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              array={alphaArray}
              onOpen={() => setOpen(true)}
              imgPath={alpha2}
              isBlog={false}
              title="Alpha Dashboard"
              description="The Alpha Dashboard Control Panel is a robust, user-friendly interface designed to manage and oversee every facet of your application in one centralized location. Built on React, this dashboard offers unparalleled control and accessibility, allowing administrators and users to efficiently monitor, configure, and manipulate various features and functionalities."
              // ghLink="https://github.com/Ahmad-betar/WatchIt"
              // demoLink="https://watch-it-4efz.vercel.app/Home"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              array={ulutechArray}
              imgPath={ulutech1}
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
              array={watchitArray}
              onOpen={() => setOpen(true)}
              imgPath={watchit1}
              isBlog={false}
              title="Watch It"
              description="Watch It is a movies/Series Web page to keep in touch with cinema."
              ghLink="https://github.com/Ahmad-betar/WatchIt"
              demoLink="https://watch-it-4efz.vercel.app/Home"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              array={watchitArray}
              onOpen={() => setOpen(true)}
              imgPath={watchit1}
              isBlog={false}
              title="Humy"
              description="Watch It is a movies/Series Web page to keep in touch with cinema."
              ghLink="https://github.com/Ahmad-betar/WatchIt"
              demoLink="http://3.214.164.25:89/login"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              array={watchitArray}
              onOpen={() => setOpen(true)}
              imgPath={watchit1}
              isBlog={false}
              title="Rimi"
              description="Watch It is a movies/Series Web page to keep in touch with cinema."
              ghLink="https://github.com/Ahmad-betar/WatchIt"
              demoLink="http://3.214.164.25:93"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
