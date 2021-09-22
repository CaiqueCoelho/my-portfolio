import React from "react";
import { Card, CardBody, Badge, Button } from "reactstrap";

import { Fade } from "react-reveal";

const EdutionCard = ({ education }) => {
	return (
		<Fade right duration={1000} distance="40px">
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 className="text-info">
								{education.schoolName}
							</h5>
							<h6>{education.subHeader}</h6>
							<Badge color="info" className="mr-1">
								{education.duration}
							</Badge>
							<p className="description mt-3">{education.desc}</p>
							<ul>
								{education.descBullets
									? education.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
              {education.github ? (
									<Button
										className="btn-icon"
										color="github"
										href={education.github}
										target="_blank"
									>
										<span className="btn-inner--icon">
											<i className="fa fa-github" />
										</span>
									</Button>
								) : null}
              {education.link ? (
									<Button
										className="btn-icon"
										color="success"
										href={education.link}
										target="_blank"
									>
										<span className="btn-inner--icon">
											<i className="fa fa-arrow-right mr-2" />
										</span>
										<span className="nav-link-inner--text ml-1">
											DEMO
										</span>
									</Button>
								) : null}
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default EdutionCard;
