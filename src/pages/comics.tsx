// Gatsby supports TypeScript natively!
import React from "react"
import { navigate, PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/comics.css"

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/comic/" } } },
      sort: { fields: [frontmatter___date],
      order: DESC }
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
            imgSrc
          }
        }
      }
    }
  }
`

            /*imgSrc {*/
              /*childImageSharp {*/
                /*fluid(maxWidth: 800) {*/
                  /*...GatsbyImageSharpFluid*/
                /*}*/
              /*}*/
            /*}*/

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
          imgSrc: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

class ComicIndex extends React.Component {
  componentDidMount() {
    const comics = this.props.data.allMarkdownRemark.edges
    const firstComic = comics[0].node
    const lastComic = comics[comics.length - 1].node

    // Arrow Key integration
    $(document).on('keydown', evt => {
      evt.stopPropagation()

      const { keyCode } = evt

      // Left Arrow
      if (keyCode === 37) {
        navigate(lastComic.fields.slug)
      }
      // Right Arrow
      if (keyCode === 39) {
        navigate(firstComic.fields.slug)
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
    const comics = data.allMarkdownRemark.edges

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Comics" />
        <div className="comics-page">
          <div className="comics__list">
            {comics.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              console.log(node)
              return (
                <Link key={node.fields.slug} to={node.fields.slug}>
                  <div className="comic">
                    <div className="comic__header">
                      <div className="comic__header__title">
                        {title}
                      </div>
                      <div className="comic__header__date">
                        {node.frontmatter.date}
                      </div>
                    </div>
                    <div className="comic__body">
                      <img
                        src={`/${node.frontmatter.imgSrc}`}
                        alt="The image"
                        className="comic__image"
                      />
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

export default ComicIndex
