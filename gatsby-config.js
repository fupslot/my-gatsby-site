module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.brodskysolutions.com`
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
        ignore: [
          "**\/.**",
          "**/*.un~",
          "**/.DS_Store",
          "**/.gitignore",
          "**/.npmignore",
          "**/.babelrc",
          "**/yarn.lock",
          "**/node_modules",
          "../**/dist/**",
        ]
      }
    },
    {
      resolve: "gatsby-plugin-styled-components"
    },
    {
      resolve: "gatsby-plugin-image"
    },
    {
      resolve: "gatsby-plugin-sharp"
    }
  ]
};