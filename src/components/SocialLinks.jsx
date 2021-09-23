import React from 'react';

import {  Button } from "reactstrap";

import { socialLinks } from "../portfolio";

const SocialLinks = () => {
    return ( 
        <div className="btn-wrapper text-lg">
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="twitter"
                  href={socialLinks.linkedin}
                  target="_blank"
                >
                  <div className='outer-container'>
                    <span className="btn-inner--icon inner-container">
                      <div className='inner-container'> 
                        <i className="top-padding fa fa-3x top-padding fa-linkedin" />
                      </div>
                    </span>
                  </div>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle ml-1 outer-container"
                  color="medium"
                  href={socialLinks.medium}
                  target="_blank"
                >
                  <span className="btn-inner--icon inner-container">
                    <i className="top-padding fa fa-3x fa-medium" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href={socialLinks.github}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-3x fa-github" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href={socialLinks.twitter}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-3x fa-twitter" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="instagram"
                  href={socialLinks.instagram}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-3x fa-instagram" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href={socialLinks.facebook}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-3x fa-facebook-square" />
                  </span>
                </Button>
        </div>
     );
}
 
export default SocialLinks;