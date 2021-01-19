module.exports = {
  siteMetadata: {
    title: `Theo Despoudis - Professional Software Engineer`,
    description: `Software Engineer. Expert in React.js, Typescript, Go, JavaScript. Based in Ireland, Greek/English speaking. Consulting/Freelancing for Web Development project: Code Audits/Reviews, Workshops, Training, Implementation ...`,
    author: {
      name: `Theo Despoudis`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    siteUrl: 'https://theodespoudis.netlify.app/',
    social: {
      twitter: 'https://twitter.com/nerdokto',
      linkedin: 'https://www.linkedin.com/in/theofanis-despoudis-7bb30913/',
      github: 'https://github.com/theodesp'
    }
  },
  // plugins
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#001871`,
        theme_color: `#001871`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
