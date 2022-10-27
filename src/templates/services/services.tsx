import React from "react";
import {graphql} from "gatsby";
import Layout from "../../components/layout/layout";
import * as styles from "./services.module.scss";
import {ServicesQuery} from "../../../graphql-types";
import {displayImage} from "../../global/functions/functions";
import ReactMarkdown from "react-markdown";

type RenderProps = {
    data: ServicesQuery,
    pageContext
}

const ServicesPage:React.FC<RenderProps> = ({ data, pageContext }) => {

    return (
        <Layout
            header={data.datoCmsHeader}
            lang={pageContext.lang}
            mainSlugs={pageContext.mainSlugs}
        >
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>{data.datoCmsServicesPage.servicesPageTitle}</h1>
                </div>
                <section className={styles.mainServices}>
                    <ul className={styles.servicesListContainer}>
                        {data.datoCmsServicesPage.mainServices.map((service) => renderService(service))}
                    </ul>
                </section>
                <section className={styles.servicesContainer}>
                    <div className={styles.titleContainer}>
                        <h3 className={styles.otherServicesTitle}>{data.datoCmsServicesPage.constructionIndustryServicesTitle}</h3>
                    </div>
                    <ul className={styles.servicesListContainer}>
                        {data.datoCmsServicesPage.constructionIndustryServices.map((service) => renderService(service))}
                    </ul>
                </section>
            </div>
        </Layout>
    )

    function renderService(service): JSX.Element {
        return (
            <li className={styles.service}>
                {displayImage(service.serviceIcon, styles.icon, "contain")}
                <p className={styles.serviceTitle}>{service.serviceTitle}</p>
                <ReactMarkdown className={styles.serviceDescription}>{service.serviceDescription}</ReactMarkdown>
            </li>
        )
    }
}

export const fragment = graphql`
    fragment ServicesFields on DatoCmsServicesPage {
        servicesPageTitle
        mainServices {
            serviceTitle
            serviceDescription
            serviceIcon {
                gatsbyImageData(layout: FIXED)
                url
                title
                format
                alt
            }
        }
        constructionIndustryServicesTitle
        constructionIndustryServices {
            serviceTitle
            serviceDescription
            serviceIcon {
                gatsbyImageData(layout: FIXED)
                url
                title
                format
                alt
            }
        }
    }
`

export const pageQuery = graphql`
    query Services($locale: String!) {
        datoCmsServicesPage(locale: { eq: $locale }) {
            ...ServicesFields
        }
        datoCmsHeader(locale: { eq: $locale }) {
            ...HeaderFields
        }
    }
`

export default ServicesPage
