import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/about.css'

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Little Laffs" />
      <div className="about-page">
        <div className="about-section">
          Little Laffs is the best I can be. I strive to express value as much as possible. Everything is made with love and passion.
        </div>
        <div className="about-section">
          My goal is to generate as much wealth and happiness as possible.
        </div>
        <div className="about-section">
          I'm happy you are here.
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
