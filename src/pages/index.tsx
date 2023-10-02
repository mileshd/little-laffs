import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import featuredComic from '../../content/comics/poetic-journey/poetic-journey.jpg'
import albumCover from '../../content/assets/chestar-ballads-album-cover.png'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/index.css'

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const randomSayings = [
    'What a time to be alive. How alive we are this time.',
    'That is what I thought.',
    'We are the truth of the World.',
    'Only you can figure out what will make you happy, now, in 10 years, in 50. Be patient and love while you learn and grow.',
    `Only buy what you can't explain`,
    'It takes one second to smile but one hour to frown',
    `Stand back. I've stolen the chips and I'm about to start snacking`,
]

const Index = ({ data, location }: PageProps<Data>) => {
  console.log(data)
  const siteTitle = data.site.siteMetadata.title

  const sayingIndex = getRandomInt(0, randomSayings.length - 1)
  const randomSaying = randomSayings[sayingIndex]

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <div className="home-page">
        <div className="container">
          <div className="home-section">
            <p>
              We are <a href="/comics">insightful comics</a>, <a href="/music">ground-breaking music</a>, amazing games, and the best vibes.
            </p>
            <p>
              {randomSaying}
            </p>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="featured-comic">
                <div className="featured-comic__picture">
                  <a href="/comics/poetic-journey/">
                    <h3>Poetic Journey</h3>
                  </a>
                  <img src={featuredComic} width="100%" className="layered-shadow" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="featured-music">
                <div className="featured-music__video">
                  <h3>EP Drop this October!</h3>
                  <img src={albumCover} width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
