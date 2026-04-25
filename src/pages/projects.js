import React from "react";
import Projects from "../views/projects/Projects";
import SEO from "../seo";

export default function ProjectsPage(props) {
  return (
    <>
      <SEO title="Projects" url_path="/projects" />
      <Projects {...props} />
    </>
  );
}
