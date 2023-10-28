import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/shop.css'

const ShopPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Shop littlelaffs" />
      <div className="shop">
        <div className="container">
          <div className="row">
            <div className="shop-image col-xs-12 col-sm-6 col-md-4">
             <Image
               fixed={data.aboutPicture.childImageSharp.fixed}
             />
              <h2>
                littlelaffs t-shirt
              </h2>
              <p>
                One of a kind. large. the pumpkin is orange but looks brown in the picture for some reason.
              </p>
              <p>
                $100
              </p>
              <p>
                <b>Sold out.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ShopPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    aboutPicture: file(absolutePath: {
      regex: "/little-laffs-shirt.png/"
    }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
