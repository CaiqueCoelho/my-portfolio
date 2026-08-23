"use client";
import React from 'react';
// Removed DisplayLottie

import { SkillBars } from "../portfolio";
import {
    Container,
    Row,
    Progress,
    Col
} from "reactstrap";

import { Fade } from 'react-awesome-reveal';

// Removed GreetingLottie

const Proficiency = () => {
    return ( 
        <Container>
           <Fade direction="up" duration={1000} distance="40px">
            <Row>
                    <Col lg="6">
                        <h1 className="h1">Proficiency</h1>
                        {
                            SkillBars.map(skill => {
                                return <div className="progress-info" key={skill.Stack}>
                                            <div className="progress-label">
                                            <span>{skill.proficiency}</span>
                                            </div>
                                            <p>
                                            {skill.Stack}
                                            </p>
                                        </div>
                            })
                        }
                    </Col>
                    <Col lg="6">
                        <div className="coding-scene-wrapper">
                            <span style={{ fontSize: '10rem' }} role="img" aria-label="proficiency">🎧</span>
                            <span className="floating-emoji" style={{ top: '20%', right: '15%', animationDelay: '0s', fontSize: '3rem' }}>🎵</span>
                            <span className="floating-emoji" style={{ top: '50%', left: '15%', animationDelay: '2.5s', fontSize: '2rem' }}>⌨️</span>
                            <span className="floating-emoji" style={{ top: '15%', left: '30%', animationDelay: '1.5s', fontSize: '2rem' }}>💻</span>
                        </div>
                    </Col>
                </Row>
           </Fade>
        </Container>
     );
}
 
export default Proficiency;