module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.brodskysolutions.com`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sass",
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
  ]
};