require(`dotenv`).config()

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: "Thornton Pickard",
    description: "A resource dedicated to Thornton Pickard vintage cameras, equipment and ephemera",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: ["@reflexjs/gatsby-theme-base"],
}
