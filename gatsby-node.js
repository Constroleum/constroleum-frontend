const path = require(`path`)
const {ignore} = require("gatsby/dist/schema/infer/inference-metadata");

exports.createPages = async function ({ actions, graphql, reporter }) {
    const { createPage } = actions;

    const allLocalesAndMainSlugs = await graphql(`
        query AllSiteLocales {
            allDatoCmsSlugsConfiguration {
                edges {
                    node {
                        locale
                        projectsPageSlug
                        servicesPageSlug
                        contactPageSlug
                    }
                }
            }
            allDatoCmsSite {
                edges {
                    node {
                        locale
                    }
                }
            }
        }
    `)

    const defaultLanguage =
        allLocalesAndMainSlugs.data.allDatoCmsSite.edges[0].node.locale
    const allMainSlugs =
        allLocalesAndMainSlugs.data.allDatoCmsSlugsConfiguration.edges

    await Promise.all([
        generateHomePage(),
        console.log("--- Home page built ---"),
        generateAllProjectsPages(),
        console.log("--- All projects pages built ---"),
        generateProjectPage(),
        console.log("--- Projects page built ---"),
        generateServicesPage(),
        console.log("--- Services page built ---"),
        generateContactPage(),
        console.log("--- Contact page built ---"),
        generateNotFoundPage(),
        console.log("--- 404 page built ---")
    ])

    /* HOME PAGE */
    async function generateHomePage() {
        const index = path.resolve('./src/templates/index.tsx')
        const result = await graphql(`
            query HomePageCreation {
                allDatoCmsSlugsConfiguration {
                    nodes {
                        locale
                        projectsPageSlug
                        servicesPageSlug
                    }
                }
            }
        `)

        result.data.allDatoCmsSlugsConfiguration.nodes.forEach(({ locale }) => {
            const mainSlugs = allMainSlugs.find(page => page.node.locale === locale)

            createPage({
                path: locale === defaultLanguage ? `/` : `/${locale}`,
                component: index,
                context: {
                    locale: locale,
                    lang: {
                        defaultLanguage: defaultLanguage,
                        locale: locale,
                    },
                    mainSlugs: {
                        projectsPageSlug: mainSlugs.node.projectsPageSlug,
                        servicesPageSlug: mainSlugs.node.servicesPageSlug,
                        contactPageSlug: mainSlugs.node.contactPageSlug
                    }
                }
            })
        })
    }

    /* ALL PROJECTS PAGES */
    async function generateAllProjectsPages() {
        const projectPage = path.resolve('./src/templates/projects/project/project.tsx')
        const result = await graphql(`
            query AllProjectsPageCreation {
                allDatoCmsSlugsConfiguration {
                    nodes {
                        locale
                        projectsPageSlug
                    }
                }
                allDatoCmsProjectPage {
                    nodes {
                        id
                        locale
                        slug
                    }
                }  
            }
        `)

        result.data.allDatoCmsSlugsConfiguration.nodes.forEach(({ locale }) => {
            const mainSlugs = allMainSlugs.find(page => page.node.locale === locale)

            result.data.allDatoCmsProjectPage.nodes
                .filter(page => page.locale === locale)
                .forEach(page => {
                createPage({
                    path: locale === defaultLanguage ?
                        `/${mainSlugs.node.projectsPageSlug}/${page.slug}` :
                        `/${locale}/${mainSlugs.node.projectsPageSlug}/${page.slug}`,
                    component: projectPage,
                    context: {
                        locale: locale,
                        lang: {
                            defaultLanguage: defaultLanguage,
                            locale: locale,
                        },
                        projectId: page.id,
                        mainSlugs: {
                            projectsPageSlug: mainSlugs.node.projectsPageSlug,
                            servicesPageSlug: mainSlugs.node.servicesPageSlug,
                            contactPageSlug: mainSlugs.node.contactPageSlug
                        }
                    }
                })
            })
        })
    }

    /* PROJECT PAGE */
    async function generateProjectPage() {
        const projectsPage = path.resolve('./src/templates/projects/projects.tsx')
        const result = await graphql(`
            query ProjectsPageCreation {
                allDatoCmsSlugsConfiguration {
                    nodes {
                        locale
                        projectsPageSlug
                    }
                }
            }
        `)

        result.data.allDatoCmsSlugsConfiguration.nodes.forEach(({ locale }) => {
            const mainSlugs = allMainSlugs.find(page => page.node.locale === locale)

            createPage({
                path: locale === defaultLanguage ?
                    `/${mainSlugs.node.projectsPageSlug}` :
                    `/${locale}/${mainSlugs.node.projectsPageSlug}`,
                component: projectsPage,
                context: {
                    locale: locale,
                    lang: {
                        defaultLanguage: defaultLanguage,
                        locale: locale,
                    },
                    mainSlugs: {
                        projectsPageSlug: mainSlugs.node.projectsPageSlug,
                        servicesPageSlug: mainSlugs.node.servicesPageSlug,
                        contactPageSlug: mainSlugs.node.contactPageSlug
                    }
                }
            })
        })
    }

    /* SERVICES PAGE */
    async function generateServicesPage() {
        const servicesPage = path.resolve('./src/templates/services/services.tsx')
        const result = await graphql(`
            query ServicesPageCreation {
                allDatoCmsSlugsConfiguration {
                    nodes {
                        locale
                        servicesPageSlug
                    }
                }
            }
        `)

        result.data.allDatoCmsSlugsConfiguration.nodes.forEach(({ locale }) => {
            const mainSlugs = allMainSlugs.find(page => page.node.locale === locale)

            createPage({
                path: locale === defaultLanguage ?
                    `/${mainSlugs.node.servicesPageSlug}` :
                    `/${locale}/${mainSlugs.node.servicesPageSlug}`,
                component: servicesPage,
                context: {
                    locale: locale,
                    lang: {
                        defaultLanguage: defaultLanguage,
                        locale: locale,
                    },
                    mainSlugs: {
                        projectsPageSlug: mainSlugs.node.projectsPageSlug,
                        servicesPageSlug: mainSlugs.node.servicesPageSlug,
                        contactPageSlug: mainSlugs.node.contactPageSlug
                    }
                }
            })
        })
    }

    /* CONTACT PAGE */
    async function generateContactPage() {
        const contactPage = path.resolve('./src/templates/contact/contact.tsx')
        const result = await graphql(`
            query ContactPageCreation {
                allDatoCmsSlugsConfiguration {
                    nodes {
                        locale
                        contactPageSlug
                    }
                }
            }
        `)

        result.data.allDatoCmsSlugsConfiguration.nodes.forEach(({ locale }) => {
            const mainSlugs = allMainSlugs.find(page => page.node.locale === locale)

            createPage({
                path: locale === defaultLanguage ?
                    `/${mainSlugs.node.contactPageSlug}` :
                    `/${locale}/${mainSlugs.node.contactPageSlug}`,
                component: contactPage,
                context: {
                    locale: locale,
                    lang: {
                        defaultLanguage: defaultLanguage,
                        locale: locale,
                    },
                    mainSlugs: {
                        projectsPageSlug: mainSlugs.node.projectsPageSlug,
                        servicesPageSlug: mainSlugs.node.servicesPageSlug,
                        contactPageSlug: mainSlugs.node.contactPageSlug
                    }
                }
            })
        })
    }

    /* NOT FOUND PAGE */
    async function generateNotFoundPage() {
        const notFoundPage = path.resolve('./src/templates/404.tsx')
        createPage({
            path: '/404',
            component: notFoundPage,
            context: {
                defaultLanguage: defaultLanguage,
            }
        })
    }
}
