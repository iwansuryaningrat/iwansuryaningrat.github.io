import React from 'react';
import Education from '../views/education/EducationComponent';
import SEO from '../seo';

export default function EducationsPage(props) {
  return (
    <>
      <SEO title="Educations" url_path="/educations" />
      <Education {...props} />
    </>
  );
}
