module.exports = {
    siteMetadata: {
        title: `Human Reborn`,
        siteUrl: `https://www.humanreborn.com/`,
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
                "icon": "src/assets/images/logo-blue.png",
                "name": "Human Reborn",
                "short_name": "Human Reborn",
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