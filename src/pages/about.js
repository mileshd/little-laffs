import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/about.css'

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Little Laffs" />
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-3">
             <Image
               fixed={data.albumArt.childImageSharp.fixed}
             />
            </div>
            <div className="col-xs-12 col-sm-9">
              <p>
                Little Laffs is the best I can be. I strive to express value as much as possible. Everything is made with love and passion.
              </p>
              <p>
                My goal is to generate as much wealth and happiness as possible.
              </p>
              <p>
                I'm happy you are here.
              </p>
            </div>
          </div>
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
    albumArt: file(absolutePath: {
      regex: "/rough-cut-album-cover.png/"
    }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
