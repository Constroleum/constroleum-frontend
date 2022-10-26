import React from "react";
import {graphql} from "gatsby";
import {ProjectsQuery} from "../../../graphql-types";
import Layout from "../../components/layout/layout";
import * as styles from "./projects.module.scss";
import {displayImage} from "../../global/functions/functions";

type RenderProps = {
    data: ProjectsQuery
}

const ProjectsPage:React.FC<RenderProps> = ({ data }) => {

    return (
        <Layout header={data.datoCmsHeader}>
            <div className={styles.container}>
                <div className={styles.pageTitleContainer}>
                    <h1 className={styles.pageTitle}>{data.datoCmsAllProjectsPage.pageTitle}</h1>
                </div>
                <div className={styles.projectsListContainer}>
                    <ul className={styles.projectsList}>
                        {data.datoCmsAllProjectsPage.projectsList.map(project => (
                            <li className={styles.project}>
                                <a className={styles.projectLink} href={`/projects/${project.slug}`}>
                                    {project.title}
                                </a>
                                <div className={styles.overlayer} />
                                {displayImage(project.mainImage, styles.projectBackgroundImage, "cover")}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query Projects($locale: String!) {
        datoCmsAllProjectsPage(locale: { eq: $locale }) {
            pageTitle
            projectsList {
                ...ProjectFields
            }
        }
        datoCmsHeader(locale: { eq: $locale }) {
            ...HeaderFields
        }
    }
`

export default ProjectsPage
