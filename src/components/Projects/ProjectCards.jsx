import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BiSolidShow } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Modal from "../../UI/Modal";
import classes from "./Projects.module.css";

function ProjectCards(props) {
  const [Open, setOpen] = useState(false);

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          { props.ghLink && 
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>}
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
          <Button
            variant="primary"
            onClick={() => setOpen(true)}
            style={{ marginLeft: "10px" }}
          >
            <BiSolidShow /> Watch
          </Button>
        </Card.Body>
      </Card>
      {Open && (
        <Modal onClose={() => setOpen(false)}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            pagination={{ type: "bullets" }}
            modules={[Pagination, Navigation]}
          >
            {props.array.map((image) => {
              return (
                <SwiperSlide className={classes.swiperSlide}>
                  <img className={classes.ImageInSlide} src={image} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Modal>
      )}
    </>
  );
}
export default ProjectCards;
