import React from "react";
import {graphql} from "gatsby";
import * as styles from "./project.module.scss";
import {ProjectQuery} from "../../../../graphql-types";
import Layout from "../../../components/layout/layout";
import {displayImage} from "../../../global/functions/functions";
import Slider from "./Slider/slider";

type RenderProps = {
    data: ProjectQuery,
    pageContext
}

const ProjectPage:React.FC<RenderProps> = ({ data, pageContext }) => {

    const project = data.allDatoCmsProjectPage.nodes.find(proj => proj.id === pageContext.projectId);

    return (
        <Layout header={data.datoCmsHeader}>
            <div className={styles.container}>
                <div className={styles.sideImageContainer}>
                    {displayImage(project.mainImage, styles.sideImage, "cover")}
                </div>
                <div className={styles.content}>
                    <div className={styles.textContentContainer}>
                        <h1 className={styles.title}>{project.title}</h1>
                        <p className={styles.description}>{project.description}</p>
                    </div>
                    <div className={styles.sliderContainer}>
                        <Slider imageCollection={project.imagesCollection} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export const fragment = graphql`
    fragment ProjectFields on DatoCmsProjectPage {
        id
        title
        slug
        description
        mainImage {
          gatsbyImageData(layout:FIXED)
          alt
          format
          url
        }
        imagesCollection {
          gatsbyImageData(layout:FIXED)
          alt
          format
          url
        }
    }
`

export const pageQuery = graphql`
    query Project($locale: String!) {
        allDatoCmsProjectPage(filter: { locale: { eq: $locale } }) {
            nodes {
                ...ProjectFields
            }
        }
        datoCmsHeader(locale: { eq: $locale }) {
            ...HeaderFields
        }
    }
`

export default ProjectPage
