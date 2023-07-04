// Gatsby supports TypeScript natively!
import React from "react"
import { navigate, PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/thoughts.css"

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/blog/" } } },
      sort: { frontmatter: { date: DESC } },
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

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

class ThoughtIndex extends React.Component {
  componentDidMount() {
    const thoughts = this.props.data.allMarkdownRemark.edges
    const firstThought = thoughts[0].node
    const lastThought = thoughts[thoughts.length - 1].node

    // Arrow Key integration
    $(document).on('keydown', evt => {
      evt.stopPropagation()

      const { keyCode } = evt

      // Left Arrow
      if (keyCode === 37) {
        navigate(lastThought.fields.slug)
      }
      // Right Arrow
      if (keyCode === 39) {
        navigate(firstThought.fields.slug)
      }
    })
  }

  componentWillUnmount() {
    // Remove Event Handlers
    $(document).off('keydown')
  }

  render() {
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const thoughts = data.allMarkdownRemark.edges

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Thoughts" />
        <div className="thoughts-page">
          <div className="thoughts__list">
            {thoughts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <Link key={node.fields.slug} to={node.fields.slug}>
                  <div className="thought-list-item">
                    <div className="thought__title">
                      {title}
                    </div>
                    <div className="thought__date">
                      {node.frontmatter.date}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
       </div> 
      </Layout>
    )
  }
}

export default ThoughtIndex
