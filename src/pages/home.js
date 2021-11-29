import React from "react";
// import FeatureContainer from "../containers/feature";
import Project from "../components/project";
import Navbar from "../components/nav/Navbar";

export function Home() {
  return (
    <>
      <Navbar />
      <Project />
      {/* <FeatureContainer />; */}
    </>
  );
}
