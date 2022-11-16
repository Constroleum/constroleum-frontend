import React from "react";
import {graphql} from "gatsby";
import Layout from "../../components/layout/layout";
import {ContactQuery} from "../../../graphql-types";
import * as styles from "./contact.module.scss";
import contactBg from "../../assets/images/contact-bg.jpg"
import fb from "../../assets/images/facebook.png"
import ig from "../../assets/images/instagram.png"
import {displayImage} from "../../global/functions/functions";

type RenderProps = {
    data: ContactQuery,
    pageContext
}

const ContactPage:React.FC<RenderProps> = ({ data, pageContext }) => {

    return (
        <Layout
            header={data.datoCmsHeader}
            lang={pageContext.lang}
            mainSlugs={pageContext.mainSlugs}
            seo={data.datoCmsContactPage.seo}
        >
            <div className={styles.backgroundImage}>
                {displayImage(data.datoCmsContactPage.backgroundImage, styles.bgImage, "cover")}
            </div>
            <div className={styles.content}>
                <div className={styles.contactInfoContainer}>
                    <p className={styles.title}><b>{data.datoCmsContactPage.companyName}</b></p>
                    <p className={styles.title}><b>{data.datoCmsContactPage.ourEmailTitle}</b> {data.datoCmsContactPage.email}</p>
                    <p className={styles.title}>
                        <b>{data.datoCmsContactPage.callUsTitle}</b>
                        <p className={styles.title} style={{ marginLeft: 20 }}>{data.datoCmsContactPage.phoneNumber}</p>
                        <p className={styles.title} style={{ marginLeft: 20 }}>{data.datoCmsContactPage.secondPhoneNumber}</p>
                    </p>
                    <div className={styles.socialMedia}>
                        <a target="_blank" href={data.datoCmsContactPage.facebookUrl}>
                            <img loading="lazy" className={styles.icon} src={fb} alt="Facebook"/>
                        </a>
                        <a target="_blank" href={data.datoCmsContactPage.instagramUrl}>
                            <img loading="lazy" className={styles.icon} src={ig} alt="Instagram"/>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const fragment = graphql`
    fragment ContactFields on DatoCmsContactPage {
        pageTitle
        seo {
            title
            description
        }
        backgroundImage {
            gatsbyImageData(layout: FIXED)
            url
            title
            format
            alt
        }
        ourEmailTitle
        email
        callUsTitle
        phoneNumber
        secondPhoneNumber
        companyName
        facebookUrl
        instagramUrl
    }
`


export const pageQuery = graphql`
    query Contact($locale: String!) {
        datoCmsContactPage(locale: { eq: $locale }) {
            ...ContactFields
        }
        datoCmsHeader(locale: { eq: $locale }) {
            ...HeaderFields
        }
    }
`

export default ContactPage
