module.exports = {
  siteMetadata: {
    title: `littlelaffs`,
    author: {
      name: `Miles Dickinson`,
      summary: `Artist`,
    },
    description: `Web Presence for the artist, littlelaffs.`,
    siteUrl: `http://littlelaffs.com`,
    social: {
      twitter: `thelittlelaffs`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    //{
      //resolve: `gatsby-source-filesystem`,
      //options: {
        //path: `${__dirname}/content/assets`,
        //name: `assets`,
      //},
    //},
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650,
              wrapperStyle: 'margin-left: 0px; margin-right: 0px;'
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-171055276-1`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
