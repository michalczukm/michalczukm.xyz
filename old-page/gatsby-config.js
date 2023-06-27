module.exports = {
  siteMetadata: {
    title: "michalczukm | Michał Michalczuk",
    author: "michalczukm@gmail.com",
    description: "Michał Michalczuk personal website: Full-Stack software developer and IT trainer"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'michalczukm personal site',
        short_name: 'michalczukm',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass'
  ],
}
