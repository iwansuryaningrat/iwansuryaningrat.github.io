// SEO.tsx or SEO.js
import Head from "next/head";
import { useRouter } from "next/router";

const SEO = ({ title, description, url_path }) => {
  const router = useRouter();
  const path = url_path !== undefined ? url_path : router.pathname;
  const defaultTitle = "Iwan Suryaningrat | Software Engineer";
  const defaultDescription =
    "Explore Iwan Suryaningrat's software engineering portfolio showcasing backend development expertise in various technologies including Nest.js, Node.js, and more.";

  const siteTitle = title ? `${title} | Iwan Suryaningrat` : defaultTitle;
  const siteDescription = description || defaultDescription;
  const siteUrl = `https://iwansuryaningrat.my.id${path}`;

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
      "https://iwansuryaningrat.github.io/",
    ],
    description: siteDescription,
  };

  return (
    <Head>
      {/* Charset */}
      <meta charSet="utf-8" />

      {/* Favicon */}
      <link rel="icon" href="https://iwansuryaningrat.my.id/favicon.ico" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Title */}
      <title>{siteTitle}</title>

      {/* Meta Description */}
      <meta name="description" content={siteDescription} />

      {/* Keywords */}
      <meta
        name="keywords"
        content="Iwan Suryaningrat, Software Engineer, Backend Developer, Portfolio, Express.js, Nest.js, Node.js, Web Development, App Development"
      />

      {/* Author */}
      <meta name="author" content="Iwan Suryaningrat" />

      {/* Open Graph Meta Tags for Social Media */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta
        property="og:image"
        content="https://iwansuryaningrat.my.id/thumbnail.png"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta
        name="twitter:image"
        content="https://iwansuryaningrat.my.id/thumbnail.png"
      />

      {/* Apple Touch Icons */}
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="https://iwansuryaningrat.my.id/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="https://iwansuryaningrat.my.id/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="https://iwansuryaningrat.my.id/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="https://iwansuryaningrat.my.id/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="https://iwansuryaningrat.my.id/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="https://iwansuryaningrat.my.id/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="https://iwansuryaningrat.my.id/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="https://iwansuryaningrat.my.id/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://iwansuryaningrat.my.id/apple-icon-180x180.png"
      />

      {/* Android and Favicon Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="https://iwansuryaningrat.my.id/android-icon-192x192.png?v=2"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://iwansuryaningrat.my.id/favicon-32x32.png?v=2"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="https://iwansuryaningrat.my.id/favicon-96x96.png?v=2"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://iwansuryaningrat.my.id/favicon-16x16.png?v=2"
      />

      {/* Web Manifest */}
      <link
        rel="manifest"
        href="https://iwansuryaningrat.my.id/manifest.json"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="https://iwansuryaningrat.my.id/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#000000" />

      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
    </Head>
  );
};

export default SEO;
