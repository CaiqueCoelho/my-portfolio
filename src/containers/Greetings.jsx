"use client";
import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import code from '../assets/lottie/coding.json';


import { Fade } from 'react-awesome-reveal';

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// Removed DisplayLottie
import SocialLinks from "../components/SocialLinks";

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  })
  return ( 
    <Fade direction="down" duration={1000} distance="40px">
        <main>
          <div className="position-relative">
            <section className="section section-lg section-shaped">
              <div className="shape shape-style-1 bg-gradient-info">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <div className="badge badge-pill badge-primary mb-3 px-3 py-2 text-uppercase font-weight-bold shadow-sm" style={{ letterSpacing: "0.5px", background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.35)", fontSize: "0.78rem" }}>
                        🌍 Open to Relocation • UK | Amsterdam | Spain
                      </div>
                      <h1 className="display-3 text-white">
                        {greetings.title + " "}
                      </h1>
                      <p className="lead text-white">{greetings.description}</p>
                      
                      {/* Direct Clickable Contact Badges */}
                      <div className="d-flex flex-wrap align-items-center mb-3">
                        <a
                          href="https://linkedin.com/in/caiquecoelho"
                          target="_blank"
                          rel="noopener noreferrer me"
                          className="badge badge-lg badge-white text-primary font-weight-bold mr-2 mb-2 p-2 shadow-sm"
                          style={{ fontSize: "0.85rem" }}
                          aria-label="LinkedIn Profile"
                        >
                          <i className="fa fa-linkedin mr-1 text-primary"></i> linkedin.com/in/caiquecoelho
                        </a>
                        <a
                          href="mailto:caiquedpfc@gmail.com"
                          className="badge badge-lg badge-white text-primary font-weight-bold mb-2 p-2 shadow-sm"
                          style={{ fontSize: "0.85rem" }}
                          aria-label="Email Caíque"
                        >
                          <i className="fa fa-envelope mr-1 text-danger"></i> caiquedpfc@gmail.com
                        </a>
                      </div>

                      <SocialLinks />
                      <div className="btn-wrapper my-4">
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0"
                          color="default"
                          target="_blank"
                          href={greetings.resumeLink}
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-file" />
                          </span>
                          <span className="btn-inner--text">
                            See My Resume
                          </span>
                        </Button>
                        <Button
                          className="btn-outline-white btn-icon mb-3 mb-sm-0 ml-sm-2"
                          color="default"
                          target="_blank"
                          rel="noopener noreferrer me"
                          href="https://linkedin.com/in/caiquecoelho"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-linkedin" />
                          </span>
                          <span className="btn-inner--text">
                            LinkedIn
                          </span>
                        </Button>
                        <Button
                          className="btn-outline-white btn-icon mb-3 mb-sm-0 ml-sm-2"
                          color="default"
                          href="mailto:caiquedpfc@gmail.com"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-envelope" />
                          </span>
                          <span className="btn-inner--text">
                            Email Me
                          </span>
                        </Button>
                      </div>
                    </Col>
                    <Col lg="6" className="text-center position-relative">
                      {/* Floating Emojis */}
                      <span className="floating-emoji e1" role="img" aria-label="code">💻</span>
                      <span className="floating-emoji e2" role="img" aria-label="rocket">🚀</span>
                      <span className="floating-emoji e3" role="img" aria-label="coffee">☕</span>
                      <span className="floating-emoji e4" role="img" aria-label="bug">🐛</span>
                      
                      {/* GitHub Profile Picture */}
                      <img 
                        src="https://avatars.githubusercontent.com/u/29831309?v=4" 
                        alt="Caíque Coelho" 
                        className="rounded-circle floating-avatar img-fluid"
                        style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                      />
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
        </main>
        </Fade>
   );
}
export default Greetings;
