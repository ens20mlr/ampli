import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Yranbild.png";
import projImg2 from "../assets/img/brianfuncportfolio.png";
import projImg3 from "../assets/img/arkitekt.jpg";
import projImg4 from "../assets/img/idaginattportfolio.png";
import projImg5 from "../assets/img/umeafc.png";
import projImg6 from "../assets/img/ibkbild.jpg";
import colorSharp2 from "../assets/img/karta.png";
import cv1 from "../assets/img/cv1.png";
import cv2 from "../assets/img/cv2.png";
import cvpdf from "../assets/img/CV_MikaelMeander.pdf";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import nedladdikon from '../assets/img/nedladdningicon.png';

export const Projects = () => {

  const projects = [
    {
      title: "Uniaden",
      description: "Digital Kreatör",
      imgUrl: projImg1,
      link: "https://www.uniaden.com"
    },
    {
      title: "Idag&Inatt",
      description: "Digital Design",
      imgUrl: projImg4,
    },
    {
      title: "Umeå FC",
      description: "Tröj samt logg design",
      imgUrl: projImg5,
    },
    {
      title: "Digital design",
      description: "IBK Härnösand",
      imgUrl: projImg6,
    },
    {
      title: "BrainFunc",
      description: "Phaser",
      imgUrl: projImg2,
    },
    {
      title: "Arktiektsammarbete",
      description: "Internet of Things",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Projekt som</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projekt</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Personligt</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">CV</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <div>
                    <h3>Screenshots</h3>
                    <img className="screenshot" src={cv1} alt="Screenshot 1" />
                    <img className="screenshot" src={cv2} alt="Screenshot 2" />
                    </div>
                    <div>
                 

                    <a href={cvpdf} download="CV_MikaelMeander.pdf">
                    <button class="image-button">
                      <img src={nedladdikon} alt="Button Image"/>
                    </button>
                    <h3 class = "laddanertext">Ladda ner CV</h3>

                    </a>
                    </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
