import React from 'react';
import Contact from '../views/contact/ContactComponent';
import SEO from '../seo';

export default function ContactsPage(props) {
  return (
    <>
      <SEO title="Contacts" url_path="/contacts" />
      <Contact {...props} />
    </>
  );
}
