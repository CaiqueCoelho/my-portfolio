"use client";

import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Greetings from "../containers/Greetings";
import Skills from "../containers/Skills";
import Proficiency from "../containers/Proficiency";
import Education from "../containers/Education";
import Experience from "../containers/Experience";
import Projects from "../containers/Projects";
import GithubProfile from "../containers/GithubProfile";
import Awards from "../containers/Awards";
import { initializeFirebase } from '../firebase';

export default function Page() {
  useEffect(() => {
    initializeFirebase();
  }, []);

  return (
    <>
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Experience />
      <Projects />
      <Education />
      <Awards />
      <GithubProfile />
    </>
  );
}
