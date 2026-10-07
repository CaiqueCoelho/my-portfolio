"use client";
import React from 'react';

import {
    Card,
    Col,
    Row,
    Container,
} from "reactstrap";

import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = ({prof}) => {
    return ( 
            <Card className="section-lg bg-gradient-info shadow-lg border-0">
                <Container className="">
                <div className="p-2">
                  <Row className="">
                  <Col className="order-lg-2" lg="4">
                      <img src={prof.avatar_url} style={{width: "200px"}} alt="" className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"/>
                    </Col>
                    <Col lg="8" className="order-lg-1">
                      <h2 className="text-white">
                        Reach Out to me!
                      </h2>
                      <p className="lead text-white mt-3">
                        Looking for a <strong>Staff or Senior SDET</strong>, <strong>Quality Platform Lead</strong>, or <strong>AI-Native Quality Architect</strong>? I am actively open to relocation to the <strong>United Kingdom (London)</strong>, <strong>Netherlands (Amsterdam)</strong>, and <strong>Spain (Madrid/Barcelona)</strong>, or high-impact remote roles.
                      </p>
                      <p className="text-white mt-2">
                        {prof.bio || "Passionate SDET building AI-native quality platforms, Playwright and Cypress architectures."}
                      </p>

                      <div className="d-flex flex-wrap align-items-center my-3">
                        <a
                          href="https://linkedin.com/in/caiquecoelho"
                          target="_blank"
                          rel="noopener noreferrer me"
                          className="btn btn-sm btn-white text-primary font-weight-bold mr-2 mb-2 shadow-sm"
                          aria-label="LinkedIn Profile"
                        >
                          <i className="fa fa-linkedin mr-1" /> linkedin.com/in/caiquecoelho
                        </a>
                        <a
                          href="mailto:caiquedpfc@gmail.com"
                          className="btn btn-sm btn-white text-primary font-weight-bold mr-2 mb-2 shadow-sm"
                          aria-label="Email Caíque"
                        >
                          <i className="fa fa-envelope mr-1 text-danger" /> caiquedpfc@gmail.com
                        </a>
                      </div>

                      <div className="my-2 d-flex flex-wrap align-items-center">
                        <span className="badge badge-pill mr-2 mb-2 px-3 py-2" style={{ background: "#ffffff", color: "#172b4d", whiteSpace: "normal", maxWidth: "100%", lineHeight: 1.5, textAlign: "left" }}>
                          <i className="fa fa-map-marker mr-1" style={{ color: "#f5365c" }} /> {prof.location || "São Paulo, Brazil"} • Relocating to UK / NL / ES
                        </span>
                        <span className="badge badge-pill mr-2 mb-2 px-3 py-2" style={{ background: "#ffffff", color: "#0f7a45" }}>
                          <i className="fa fa-check-circle mr-1" /> Available for Interviews
                        </span>
                      </div>
                      <SocialLinks />
                    </Col>                    
                  </Row>
                </div>
                </Container>
              </Card>
     );
}
 
export default GithubProfileCard;