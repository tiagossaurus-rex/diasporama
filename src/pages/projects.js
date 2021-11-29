import React from "react";
import Project from "../components/project";
import Navbar from "../components/nav/Navbar";
import FeatureContainer from "../containers/feature";

export function Projects() {
  return (
    <>
      <Navbar />
      <Project />
      {/* <FeatureContainer />; */}
    </>
  );
}
