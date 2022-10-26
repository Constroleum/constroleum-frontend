import React, {useEffect, useRef} from "react";
import {graphql} from "gatsby";
import * as styles from "./project.module.scss";
import {ProjectQuery} from "../../../../graphql-types";
import Layout from "../../../components/layout/layout";
import {displayImage} from "../../../global/functions/functions";
import Slider from "./Slider/slider";
import {gsap} from "gsap";

type RenderProps = {
    data: ProjectQuery,
    pageContext
}

const ProjectPage:React.FC<RenderProps> = ({ data, pageContext }) => {

    const project = data.allDatoCmsProjectPage.nodes.find(proj => proj.id === pageContext.projectId);
    const container = useRef();
    const pageElements = useRef([])

    const createElementsRefs = (section, index) => {
        pageElements.current[index] = section;
    }

    useEffect(() => {
        loadAnimation()
    }, [])

    return (
        <Layout header={data.datoCmsHeader}>
            <div ref={container} className={styles.container}>
                <div className={styles.sideImageContainer}>
                    {displayImage(project.mainImage, styles.sideImage, "cover")}
                </div>
                <div className={styles.content}>
                    <div className={styles.textContentContainer}>
                        <h1 className={styles.title} ref={(e) => createElementsRefs(e, 0)}>{project.title}</h1>
                        <p className={styles.description} ref={(e) => createElementsRefs(e, 1)}>{project.description}</p>
                    </div>
                    <div className={styles.sliderContainer} ref={(e) => createElementsRefs(e, 2)}>
                        <Slider imageCollection={project.imagesCollection} />
                    </div>
                </div>
            </div>
        </Layout>
    )

    function loadAnimation() {
        let animationDelay = 0;
        let checkIfRefsAreLoaded = setInterval(() => {
            if(typeof pageElements.current !== undefined && typeof container.current !== undefined) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container.current,
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true
                    }
                })
                pageElements.current.forEach(element => {
                    tl.from(element, { y: container.current.offsetHeight, ease: 'Power1.easeOut', duration: 0.4 }, `-=${animationDelay}`)
                    animationDelay += 0.1;
                })
                clearInterval(checkIfRefsAreLoaded)
            }
        }, 100);
    }
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
