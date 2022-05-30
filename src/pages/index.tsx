import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import featuredComic from '../../content/comics/sprucing-up/sprucing-up.jpg'
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
    'Puella sub arbore sedit et librum suum latinum legit'
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
                  <a href="/comics/sprucing-up/">
                    <h3>Sprucing Up the Homestead</h3>
                  </a>
                  <img src={featuredComic} width="100%" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="featured-music">
                <div className="featured-music__video">
                  <a href="/music"><h3>Apple Juice (feat. Tcup)</h3></a>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/VS9VUd9aLF0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  >
                  </iframe>
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
