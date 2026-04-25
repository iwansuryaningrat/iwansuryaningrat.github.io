import React from 'react';
import Experience from '../views/experience/Experience';
import SEO from '../seo';

export default function ExperiencesPage(props) {
  return (
    <>
      <SEO title="Experiences" url_path="/experiences" />
      <Experience {...props} />
    </>
  );
}
