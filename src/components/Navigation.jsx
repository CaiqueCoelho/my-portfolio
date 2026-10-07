"use client";
import React, {useState, useEffect} from 'react';
// import { Link } from "react-router-dom";

import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

import './Navigation.css'

const Navigation = () => {
    const [collapseClasses, setCollapseClasses] = useState("");
    const onExiting = () => setCollapseClasses("collapsing-out");
    
    const onExited = () => setCollapseClasses("");

    useEffect(() => {
      let headroom = new Headroom(document.getElementById("navbar-main"));
      // initialise
      headroom.init();
    })

    return ( 
        <>
        <div
          className="text-white py-1 px-3 text-center small d-flex flex-wrap justify-content-center align-items-center"
          style={{
            fontSize: "0.82rem",
            letterSpacing: "0.2px",
            zIndex: 1050,
            position: "relative",
            background: "#172b4d",
            borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <span className="mr-sm-3 mr-1 font-weight-bold">
            🌍 Open to Relocation: United Kingdom (London) • Netherlands (Amsterdam) • Spain
          </span>
          <span className="d-inline-flex align-items-center mt-1 mt-sm-0">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer me"
              className="text-info font-weight-bold mr-3 text-decoration-none"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <i className="fa fa-linkedin mr-1" />LinkedIn
            </a>
            <a
              href={socialLinks.email || "mailto:caiquedpfc@gmail.com"}
              className="text-warning font-weight-bold text-decoration-none"
              title="Email Caíque"
              aria-label="Email Caíque"
            >
              <i className="fa fa-envelope mr-1" />caiquedpfc@gmail.com
            </a>
          </span>
        </div>

        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container className="d-flex align-items-center justify-content-between">
              <NavbarBrand className="mr-lg-4">
                <h2 className="text-white mb-0" id="nav-title">{greetings.name}</h2>
              </NavbarBrand>

              {/* Quick Action Contact Pills: ALWAYS visible on all screen sizes */}
              <div className="d-flex align-items-center ml-auto mr-2">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="btn btn-sm btn-outline-white text-white d-inline-flex align-items-center mr-2 px-2 py-1"
                  style={{ textTransform: "none", fontWeight: 600, fontSize: "0.82rem", borderRadius: "18px" }}
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <i className="fa fa-linkedin mr-1" />
                  <span className="d-none d-sm-inline">LinkedIn</span>
                </a>
                <a
                  href={socialLinks.email || "mailto:caiquedpfc@gmail.com"}
                  className="btn btn-sm btn-white text-primary d-inline-flex align-items-center px-2 py-1"
                  style={{ textTransform: "none", fontWeight: 600, fontSize: "0.82rem", borderRadius: "18px" }}
                  title="Email Caíque (caiquedpfc@gmail.com)"
                  aria-label="Email Caíque"
                >
                  <i className="fa fa-envelope mr-1" />
                  <span className="d-none d-sm-inline">Email</span>
                </a>
              </div>

              <button className="navbar-toggler" id="navbar_global" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={collapseClasses}
                onExiting={onExiting}
                onExited={onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <a href="/">
                        <h3 className="text-black" id="nav-title">{greetings.name}</h3>
                      </a>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global" aria-label="Close navigation">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer me"
                      title="LinkedIn Profile"
                      aria-label="LinkedIn Profile"
                    >
                      <i className="fa fa-linkedin" />
                      <span className="nav-link-inner--text ml-2">
                        LinkedIn
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={socialLinks.email || "mailto:caiquedpfc@gmail.com"}
                      title="Email Caíque"
                      aria-label="Email Caíque"
                    >
                      <i className="fa fa-envelope" />
                      <span className="nav-link-inner--text ml-2">
                        Email
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Profile"
                      aria-label="GitHub Profile"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text ml-2">
                        GitHub
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={socialLinks.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Medium Blog"
                      aria-label="Medium Blog"
                    >
                      <i className="fa fa-medium" />
                      <span className="nav-link-inner--text ml-2">
                        Medium
                      </span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
     );
}
 
export default Navigation;