import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/music.css'

const MusicPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Music" />
      <div className="music-page">
        <div className="music-release">
          <div className="music-release__art">
           <Image
             fixed={data.albumArt.childImageSharp.fixed}
           />
          </div>
          <div className="music-release__details">
            <div className="details-title">
              Rough Cut
            </div>
            <div className="details-tracks">
              <div className="track">
                <span className="artist">
                  Little Laffs x Tcup -
                </span>
                <span className="song">
                  Apple Juice
                </span>
              </div>
              <div className="track">
                <span className="artist">
                  Little Laffs - 
                </span>
                <span className="song">
                  Darling Demo
                </span>
              </div>
              <div className="track">
                <span className="artist">
                  Little Laffs x Tcup -
                </span>
                <span className="song">
                  Get Out Demo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MusicPage

export const pageQuery = graphql`
  query {
    albumArt: file(absolutePath: {
      regex: "/rough-cut-album.png/"
    }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    site {
      siteMetadata {
        title
      }
    }
  }
`
