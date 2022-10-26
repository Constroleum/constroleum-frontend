import React, {useEffect, useRef} from "react";
import {graphql} from "gatsby";
import {ProjectsQuery} from "../../../graphql-types";
import Layout from "../../components/layout/layout";
import * as styles from "./projects.module.scss";
import {displayImage} from "../../global/functions/functions";
import {gsap} from "gsap";

type RenderProps = {
    data: ProjectsQuery
}

const ProjectsPage:React.FC<RenderProps> = ({ data }) => {

    const container = useRef();
    const projects = useRef([])

    const createProjectsRefs = (section, index) => {
        projects.current[index] = section;
    }

    useEffect(() => {
        loadAnimation()
    }, [])

    return (
        <Layout header={data.datoCmsHeader}>
            <div ref={container} className={styles.container}>
                <div className={styles.pageTitleContainer}>
                    <h1 className={styles.pageTitle}>{data.datoCmsAllProjectsPage.pageTitle}</h1>
                </div>
                <div className={styles.projectsListContainer}>
                    <ul className={styles.projectsList}>
                        {data.datoCmsAllProjectsPage.projectsList.map((project, index) => (
                            <li ref={(e) => createProjectsRefs(e, index)} className={styles.project}>
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

    function loadAnimation() {
        let animationDelay = 0;
        let checkIfRefsAreLoaded = setInterval(() => {
            if(typeof projects.current !== undefined && typeof container.current !== undefined) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container.current,
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true
                    }
                })
                projects.current.forEach((project, index) => {
                    tl.from(project, { y: container.current.offsetHeight, ease: 'Power1.easeOut', duration: 0.6 }, `-=0.3`)
                    animationDelay += 0.1;
                })
                clearInterval(checkIfRefsAreLoaded)
            }
        }, 100);
    }
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
