import React from "react"
import { Link, navigate, graphql } from "gatsby"
import $ from 'jquery'

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/comic.css'

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    const { previous, next } = this.props.pageContext

    // Arrow Key integration
    $(document).on('keydown', evt => {
      evt.stopPropagation()

      const { keyCode } = evt

      // Left Arrow
      if (keyCode === 37) {
        if (next) {
          navigate(next.fields.slug)
        } else {
          navigate('/comics')
        }
      }
      // Right Arrow
      if (keyCode === 39) {
        if (previous) {
          navigate(previous.fields.slug)
        } else {
          navigate('/comics')
        }
      }
    })
  }

  componentWillUnmount() {
    // Remove Event Handlers
    $(document).off('keydown')
  }

  render() {
    const { data, pageContext, location } = this.props
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title
    const { previous, next } = pageContext

    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="comic">
          <div className="comic__navigation">
            {previous ? (
              <Link to={previous.fields.slug} rel="prev" className="btn btn-default">
                ← Previous
              </Link>
            ) : (
              <Link to={'/comics'} rel="prev" className="btn btn-default">
                ← Comics
              </Link>
            )}
            {next ? (
              <Link to={next.fields.slug} rel="next" className="btn btn-default">
                Next →
              </Link>
            ) : (
              <Link to={'/comics'} rel="next" className="btn btn-default">
                Comics →
              </Link>
            )}
          </div>
          <div className="comic__title">
            {post.frontmatter.title}
          </div>
          <div className="comic__date">
            {post.frontmatter.date}
          </div>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
