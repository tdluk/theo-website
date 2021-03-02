module.exports = {
  siteMetadata: {
    title: "theo-website",
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
      },
    },
    "gatsby-transformer-remark"
  ],
};
