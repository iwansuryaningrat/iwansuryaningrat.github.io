import React from "react";
import Home from "../views/home/HomeComponent";
import SEO from "../seo";

export default function HomePage(props) {
  return (
    <>
      <SEO title="Home" url_path="/home" />
      <Home {...props} />
    </>
  );
}
