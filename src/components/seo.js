/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

function SEO({ description, lang, meta, title }) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            authorTwitter
            siteUrl
          }
        }
      }
    `
  )

  const googleMeasurementId = process.env.GATSBY_GOOGLE_MEASUREMENT_ID

  // Check if window is defined, for server side rendered handling
  if (typeof window != "undefined" && googleMeasurementId) {
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag = gtag
    gtag("js", new Date())

    gtag("config", "G-B65LFP2P64")
  }

  const metaDescription = description || `${title} | ${site.siteMetadata.title}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `${site.siteMetadata.siteUrl}${pathname}`,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}/roy_portas.png`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.authorTwitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      {googleMeasurementId && (
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleMeasurementId}`}
        ></script>
      )}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
