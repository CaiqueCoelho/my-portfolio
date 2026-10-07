"use client";
import React from "react";

import { Button } from "reactstrap";

import { socialLinks } from "../portfolio";

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      <Button
        className="btn-icon-only rounded-circle ml-1"
        color="twitter"
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer me"
        aria-label="LinkedIn Profile"
        title="LinkedIn Profile"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-linkedin" />
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle ml-1"
        color="danger"
        href={socialLinks.email || "mailto:caiquedpfc@gmail.com"}
        aria-label="Email Caíque (caiquedpfc@gmail.com)"
        title="Email Caíque (caiquedpfc@gmail.com)"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-envelope" />
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle ml-1"
        color="medium"
        href={socialLinks.medium}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Medium Blog"
        title="Medium Blog"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-medium" />
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle ml-1"
        color="github"
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        title="GitHub Profile"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-github" />
        </span>
      </Button>
      {/* <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href={socialLinks.twitter}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="instagram"
                  href={socialLinks.instagram}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-instagram" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href={socialLinks.facebook}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button> */}
    </div>
  );
};

export default SocialLinks;
