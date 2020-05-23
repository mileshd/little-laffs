const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const postCollections = result.data.allMarkdownRemark.edges.reduce((postTypes, post) => {
    const slugContents = post.node.fields.slug.split('/')
    const type = slugContents[1]

    if (!postTypes[type]) {
      postTypes[type] = []
    }
    postTypes[type].push(post)

    return postTypes
  }, {})

  //console.log(JSON.stringify(posts, null, 2));

  for (let posts of Object.values(postCollections)) {
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({
      node,
      getNode,
      //basePath: 'comics/'
    })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

//exports.onCreateWebpackConfig = ({
  //actions,
//}) => {
  //const { setWebpackConfig } = actions;
  //setWebpackConfig({
    //externals: {
      //jquery: 'jQuery', // important: 'Q' capitalized
    //}
  //})
//}
