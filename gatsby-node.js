const path = require(`path`)
const {ignore} = require("gatsby/dist/schema/infer/inference-metadata");

exports.createPages = async function ({ actions, graphql, reporter }) {
    const { createPage } = actions;
    const getLocale = await graphql(`
        query Locale {
            allDatoCmsSite {
                edges {
                    node {
                        locale
                    }
                }
            }
        }
    `);

    const defaultLocale = getLocale.data.allDatoCmsSite.edges[0].node.locale;

    await Promise.all([
        generateHomePage(),
        console.log("--- Home page built ---"),
        generateNotFoundPage(),
        console.log("--- 404 page built ---")
    ])

    /* HOME PAGE */
    async function generateHomePage() {
        const index = path.resolve('./src/templates/index.tsx')
        createPage({
            path: '/',
            component: index,
            context: {
                locale: defaultLocale
            }
        })
    }

    /* NOT FOUND PAGE */
    async function generateNotFoundPage() {
        const notFoundPage = path.resolve('./src/templates/404.tsx')
        createPage({
            path: '/404',
            component: notFoundPage,
            context: {
                locale: defaultLocale
            }
        })
    }
}
