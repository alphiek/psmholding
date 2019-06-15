import React from "react"
import { graphql } from 'gatsby'
import Helmet from "react-helmet"
import Layout from '../components/Layout'
import Links from '../components/Links'
import Logo from '../components/Logo'
import PageWrapper from '../components/PageWrapper'
import ReactNbsp from 'react-nbsp'


const IndexPage = ({ data }) => {
  const title = data.site.siteMetadata.title
  const desc = data.site.siteMetadata.description
  const siteUrl = data.site.siteMetadata.siteUrl
  const handle = data.site.siteMetadata.handle
  return (
  <Layout>
    <Helmet>
      <html lang="en"/>
      <title>{title}</title>
      <link rel="alternate" href={siteUrl} hrefLang="en-CY" />
      <meta name="description" content={desc}></meta>

      <meta property="og:url" content={siteUrl}></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content={title}></meta>
      <meta property="og:image" content="https://paphosstonemasons.com/images/og.png"></meta>
      <meta property="og:image:width" content="1200"></meta>
      <meta property="og:image:height" content="630"></meta>
      <meta property="og:description" content={desc}></meta>
      <meta property="og:site_name" content="Paphos Stone Masons"></meta>

      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content={handle}></meta>
      <meta name="twitter:url" content={siteUrl}></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={desc}></meta>
      <meta name="twitter:image" content="https://paphosstonemasons.com/images/og.png"></meta>

      <script type="application/ld+json">{`
          {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Paphos Stone Masons",
              "description": "${desc}",
              "image": "https://paphosstonemasons.com/images/og.png",
              "logo": "https://paphosstonemasons.com/images/logo.png",
              "@id": "${siteUrl}",
              "url": "${siteUrl}",
              "telephone": "+357 955 337 25",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Paphos",
                "addressCountry": "cy"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "23:59"
              },
              "sameAs": [
                "${data.site.siteMetadata.facebook}",
                "${data.site.siteMetadata.insta}",
                "${data.site.siteMetadata.twitter}"
              ],
              "priceRange": "$"
          }
     `}</script>
    </Helmet>
    <PageWrapper>
      <Logo />
      <hr />
      <p>Welcome to the new home of Paphos<ReactNbsp />Stone Masons</p>
      <h1>Specialists for Traditional Decorative Stonework, Landscape Masonry and Stone Paving in Paphos</h1>
      <Links />
    </PageWrapper>
  </Layout>
)
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        facebook
        twitter
        insta
        handle
      }
    }
  }
`
