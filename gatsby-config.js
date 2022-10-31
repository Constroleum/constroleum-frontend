module.exports = {
    siteMetadata: {
        title: `Constroleum`,
        siteUrl: `https://www.constroleum.com/`,
        author: {
            name: `Guillem León Font`,
        },
    },
    plugins: [
        {
            resolve: 'gatsby-source-datocms',
            options: {
                apiToken: process.env.DATOCMS_TOKEN,
                preview: false,
                disableLiveReload: false,
                environment: `main`
            }
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                serialize: ({ path }) => ({ url: path }),
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/assets/images/logo.png",
                "name": "Constroleum",
                "short_name": "Constroleum",
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-plugin-graphql-codegen",
        "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/assets/images/"
            },
            __key: "images"
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true, // defaults to false
                jsxPragma: `jsx`, // defaults to "React"
                allExtensions: true, // defaults to false
            },
        },
    ]
}