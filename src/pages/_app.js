import React, { useState, useEffect } from "react";
import Head from "next/head";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../styletron";
import { ThemeProvider } from "styled-components";
import { themes } from "../theme";
import { GlobalStyles } from "../global";
import { CursorProvider } from "react-cursor-custom";
import { settings } from "../repository/data";
import ReactGA from "react-ga";

import "../index.css";
import "../assets/font-awesome/css/all.css";
import "../App.css";

import "../components/certificationCard/CertificationCard.css";
import "../components/degreeCard/DegreeCard.css";
import "../components/experienceCard/ExperienceCard.css";
import "../components/footer/Footer.css";
import "../components/header/Header.css";
import "../components/ProjectCard/ProjectCard.css";
import "../components/projectLanguages/ProjectLanguages.css";
import "../components/ProjectLinks/ProjectLinks.css";
import "../components/socialMedia/SocialMedia.css";
import "../components/softwareSkills/SoftwareSkill.css";
import "../containers/certifications/Certifications.css";
import "../containers/contact/Contact.css";
import "../containers/education/Educations.css";
import "../containers/experienceAccordion/ExperienceAccordion.css";
import "../containers/greeting/FeelingProud.css";
import "../containers/greeting/Greeting.css";
import "../containers/projects/Project.css";
import "../containers/skills/Skills.css";
import "../views/contact/ContactComponent.css";
import "../views/education/EducationComponent.css";
import "../views/experience/Experience.css";
import "../views/projects/Projects.css";
import "../views/splash/Splash.css";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID, {
        testMode: process.env.NODE_ENV === "test",
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
  }, []);

  const useCursor = settings.useCustomCursor;

  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <ThemeProvider theme={themes[theme]}>
          <GlobalStyles />
          {useCursor ? (
            <CursorProvider
              color={themes[theme].secondaryText}
              ringSize={25}
              transitionTime={75}
            >
              <Component {...pageProps} theme={themes[theme]} setTheme={setTheme} />
            </CursorProvider>
          ) : (
            <Component {...pageProps} theme={themes[theme]} setTheme={setTheme} />
          )}
        </ThemeProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}
