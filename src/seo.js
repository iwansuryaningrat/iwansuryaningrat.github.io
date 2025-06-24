// SEO.tsx or SEO.js
import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Iwan Suryaningrat",
    url: "https://iwansuryaningrat.my.id",
    image: "https://iwansuryaningrat.my.id/thumbnail.png",
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Self-Employed",
    },
    sameAs: [
      "https://id.linkedin.com/in/iwan-suryaningrat",
      "https://github.com/iwansuryaningrat",
      "https://www.instagram.com/sningrat_/",
      "https://www.facebook.com/iwan.suryaningrat/",
      "https://twitter.com/sningrat_",
      "https://iwansuryaningrat.showwcase.com/",
      "https://www.threads.net/@sningrat_",
    ],
    description:
      "Explore Iwan Suryaningrat's software engineering portfolio showcasing backend development expertise in various technologies including Nest.js, Node.js, and more.",
  };

  return (
    <Helmet>
      {/* Charset */}
      <meta charSet="utf-8" />

      {/* Favicon */}
      <link rel="icon" href="https://iwansuryaningrat.my.id/favicon.ico" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Title */}
      <title>Iwan Suryaningrat | Software Engineer</title>

      {/* Meta Description */}
      <meta
        name="description"
        content="Explore Iwan Suryaningrat's software engineering portfolio showcasing backend development expertise in various technologies including Nest.js, Node.js, and more."
      />

      {/* Keywords */}
      <meta
        name="keywords"
        content="Iwan Suryaningrat, Software Engineer, Backend Developer, Portfolio, Express.js, Nest.js, Node.js, Web Development, App Development"
      />

      {/* Author */}
      <meta name="author" content="Iwan Suryaningrat" />

      {/* Open Graph Meta Tags for Social Media */}
      <meta
        property="og:title"
        content="Iwan Suryaningrat | Software Engineer"
      />
      <meta
        property="og:description"
        content="Discover the portfolio of Iwan Suryaningrat, a skilled software engineer with expertise in backend development."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://iwansuryaningrat.my.id/" />
      <meta
        property="og:image"
        content="https://iwansuryaningrat.my.id/thumbnail.png"
      />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Iwan Suryaningrat | Software Engineer"
      />
      <meta
        name="twitter:description"
        content="Portfolio of Iwan Suryaningrat, a Software Engineer."
      />
      <meta
        name="twitter:image"
        content="https://iwansuryaningrat.my.id/thumbnail.png"
      />

      {/* Apple Touch Icons */}
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />

      {/* Android and Favicon Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      {/* Web Manifest */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#000000" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://iwansuryaningrat.my.id/" />
    </Helmet>
  );
};

export default SEO;
