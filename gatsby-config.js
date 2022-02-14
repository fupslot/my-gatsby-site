require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Cloud Safe Guard",
    baseUrl: `https://www.brodskysolutions.com`
  },
  plugins: [
    {
      resolve: "gatsby-source-buttercms",
      options: {
        authToken: process.env.BUTTERCMS_AUTH_TOKEN,
        preview: 1
      }
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto", "png"]
        }
      }
    },
    {
      resolve: "gatsby-plugin-gdpr-cookies",
      options: {
        googleAnalytics: {
          trackinId: process.env.GOOGLE_ANALYTICS_ID,
          cookieName: "cookie-consent",
          anonymize: true,
          allowAdFeatures: false
        },
        environments: ["development", "production"]
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        footnotes: true,
        gfm: true,
        plugins: []
      }
    }
  ]
};