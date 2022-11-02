import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Seo({ pageName }) {
  // this is run build time
  const siteMeta = useStaticQuery(graphql`
    query SiteMeta {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  console.log("siteMeta", siteMeta);

  return (
    <>
      <title>
        {pageName} | {siteMeta.site.siteMetadata.title}
      </title>
    </>
  );
}
