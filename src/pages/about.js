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
               fixed={data.aboutPicture.childImageSharp.fixed}
             />
            </div>
            <div className="col-xs-12 col-sm-8 offset-sm-1">
              <p>
                Little Laffs is the best I can be, where everything is made with love and passion.
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
    aboutPicture: file(absolutePath: {
      regex: "/about-picture.png/"
    }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
