"use client";
import React, {Fragment} from 'react';

import { Fade } from 'react-awesome-reveal';
// Removed DisplayLottie

import {
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

import { skillsSection } from "../portfolio";

const Skills = () => {
    return ( 
        <Fade direction="left" duration={1000} distance="40px">
            <Container className="text-center my-5">
            <h1 className="h1">{skillsSection.title}</h1>
            <p className="lead">{skillsSection.subTitle}</p>
            <Row>
                <Col lg="6">
                    <div className="coding-scene-wrapper">
                        <span style={{ fontSize: '10rem' }} role="img" aria-label="coding">👨‍💻</span>
                        <span className="floating-emoji" style={{ top: '20%', right: '20%', animationDelay: '1s', fontSize: '3rem' }}>☁️</span>
                        <span className="floating-emoji" style={{ top: '60%', left: '10%', animationDelay: '2s', fontSize: '2rem' }}>⚙️</span>
                        <span className="floating-emoji" style={{ top: '10%', left: '30%', animationDelay: '3s', fontSize: '2rem' }}>💡</span>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="d-flex justify-content-center flex-wrap mb-5">
                        {
                            skillsSection.softwareSkills.map((skill) => {
                                return <Fragment key={skill.skillName}>
                            <div className="icon icon-lg icon-shape shadow rounded-circle mb-5"  id={skill.skillName}>
                                <span className="iconify" data-icon={skill.fontAwesomeClassname} data-inline="false"></span>
                            </div>
                            <UncontrolledTooltip
                                delay={0}
                                placement="bottom"
                                target={skill.skillName}
                                >
                                {skill.skillName}
                            </UncontrolledTooltip>
                                </Fragment>
                           })
                        }
                    </div>
                    {/* <div>
                        {
                            skillsSection.skills.map(skill => {
                                return <p key={skill}>{skill}</p>
                            })
                        }
                    </div> */}
                </Col>
            </Row>
            </Container>
        </Fade>
     );
}
 
export default Skills;