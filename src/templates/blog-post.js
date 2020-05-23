import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/comic.css'

const BlogPostTemplate = ({ data, pageContext, location }) => {
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
          {previous && (
            <Link to={previous.fields.slug} rel="prev" className="btn btn-default">
              ← Previous
            </Link>
          )}
          {next && (
            <Link to={next.fields.slug} rel="next" className="btn btn-default">
              Next →
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
