import React from "react";
import { Helmet } from "react-helmet";
import { details} from "../../portfolio.js";

function SeoHeader() {
  return (
    <Helmet>
      <title>{details.title}</title>
      <meta name="description" content={details.description} />
      <meta property="og:title" content={details?.og?.title} />
      <meta property="og:type" content={details?.og?.type} />
      <meta property="og:url" content={details?.og?.url} />
    </Helmet>
  );
}

export default SeoHeader;
