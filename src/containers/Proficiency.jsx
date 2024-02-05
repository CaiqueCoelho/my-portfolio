import React from 'react';
import back from "../assets/lottie/back";

import { SkillBars } from "../portfolio";
import {
    Container,
    Row,
    Progress,
    Col
} from "reactstrap";

import { Fade } from 'react-reveal';

import GreetingLottie from "../components/DisplayLottie";

const Proficiency = () => {
    return ( 
        <Container>
           <Fade bottom duration={1000} distance="40px">
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
                        <GreetingLottie animationData={back}/>
                    </Col>
                </Row>
           </Fade>
        </Container>
     );
}
 
export default Proficiency;