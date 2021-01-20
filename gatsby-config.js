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
        name: `theodespoudis.me`,
        short_name: `theodespoudis`,
        start_url: `/`,
        background_color: `#001871`,
        theme_color: `#001871`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
        icons: [
          {
            "src": "src/images/android-icon-36x36.png",
            "sizes": "36x36",
            "type": "image/png",
            "density": "0.75"
          },
          {
            "src": "src/images/android-icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png",
            "density": "1.0"
          },
          {
            "src": "src/images/android-icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png",
            "density": "1.5"
          },
          {
            "src": "src/images/android-icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png",
            "density": "2.0"
          },
          {
            "src": "src/images/android-icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png",
            "density": "3.0"
          },
          {
            "src": "src/images/android-icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "density": "4.0"
          }
        ]
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
