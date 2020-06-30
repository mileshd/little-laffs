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
            <div className="details-sub-title">
              By Little Laffs, 2020
            </div>
            <div className="details-tracks">
              <div className="track">
                <span className="song">
                  Apple Juice (feat. Tcup)
                </span>
              </div>
              <div className="track">
                <span className="song">
                  Darling Demo
                </span>
              </div>
              <div className="track">
                <span className="song">
                  Get Out (feat. Tcup)
                </span>
              </div>
              <div className="track">
                <span className="song">
                  Dickinsonian Museum (feat. Tcup)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="song row">
          <div className="song__video col-sm-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OLrJq3-Crmg"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            >
            </iframe>
          </div>
          <div className="song__details col-sm-6">
            <div className="song__details-title">Apple Juice (feat. Tcup)</div>
            <p>
              When it's time to enjoy the good things in life. Enjoy them.
            </p>
            <p>
              Get in the zone, and stay in the zone.
            </p>
            <p>
              Have the time of your life.
            </p>
          </div>
        </div>
        <div className="song row">
          <div className="song__video col-sm-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8na47XEBrLY"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            >
            </iframe>
          </div>
          <div className="song__details col-sm-6">
            <div className="song__details-title">Darling Demo</div>
            <p>
              This song is about finding the love of my life. I had to get the one-take demo out, but I have so much more planned for this song in the future.
            </p>
          </div>
        </div>
        <div className="song row">
          <div className="song__video col-sm-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Ns_8jadm2Bo"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            >
            </iframe>
          </div>
          <div className="song__details col-sm-6">
            <div className="song__details-title">Get Out (feat. Tcup)</div>
            <p>
              And take your pens and pencils with you.
            </p>
          </div>
        </div>
        <div className="song row">
          <div className="song__video col-sm-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_3ahkJLh7A0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            >
            </iframe>
          </div>
          <div className="song__details col-sm-6">
            <div className="song__details-title">Dickinsonian Museum (feat. Tcup)</div>
            <p>
              Start a riff, and the rest is history.
            </p>
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
      regex: "/rough-cut-album-cover.png/"
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

            //<p>
              //It's not even the people themselves, but who they become in our mind.
            //</p>
            //<p>
              //That's who we're really talking to. Get out of my life.
            //</p>
