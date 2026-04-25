import React from 'react';
import Splash from '../views/splash/Splash';
import SEO from '../seo';

export default function SplashPage(props) {
  return (
    <>
      <SEO title="Welcome" url_path="/splash" />
      <Splash {...props} />
    </>
  );
}
