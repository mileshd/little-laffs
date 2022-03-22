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

const Index = ({ data, location }: PageProps<Data>) => {
  console.log(data)
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <div className="home-page">
        <div className="container">
          <div className="home-section">
            <h1>Welcome to Little Laffs!</h1>
            <p>
              Home to <a href="/comics">insightful comics</a>, <a href="/music">ground-breaking music</a>, amazing games, and the best vibes.
            </p>
            <p>
               I hope you enjoy your stay.
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
