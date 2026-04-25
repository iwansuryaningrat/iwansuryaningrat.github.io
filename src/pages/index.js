import React from "react";
import Splash from "../views/splash/Splash";
import Home from "../views/home/HomeComponent";
import { settings } from "../repository/data";
import SEO from "../seo";

export default function IndexPage(props) {
  if (settings.isSplash) {
    return (
      <>
        <SEO />
        <Splash {...props} />
      </>
    );
  } else {
    return (
      <>
        <SEO />
        <Home {...props} />
      </>
    );
  }
}
