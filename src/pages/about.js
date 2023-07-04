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
      <SEO title="About littlelaffs" />
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="about-image col-xs-12 col-sm-6 col-md-4">
             <Image
               fixed={data.aboutPicture.childImageSharp.fixed}
             />
            </div>
            <div className="about-description col-xs-12 col-sm-6 col-md-8">
              <p>
                hi. it's ittlelaffs, where passion and dedication are stitched into every detail
              </p>
              <p>
                littlelaffs is the best i can be
              </p>
              <p>
                live with an abundance of joy and prosperity
              </p>
              <p>
                i'm happy you are here
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
    aboutPicture: file(absolutePath: {
      regex: "/little-laffs.png/"
    }) {
      childImageSharp {
        fixed(width: 450, height: 650) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
