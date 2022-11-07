import React, {useEffect, useRef} from "react";
import {graphql} from "gatsby";
import * as styles from "./projects.module.scss";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {displayImage, getLocalizedSlug, isMobile} from "../../../global/functions/functions";
import {HomeProjectsFieldsFragment} from "../../../../graphql-types";

type RenderProps = {
    data: HomeProjectsFieldsFragment,
    tl: any,
    lang: any,
    mainSlug: any
}

gsap.registerPlugin(ScrollTrigger);

const Projects:React.FC<RenderProps> = ({ data, tl, lang, mainSlug }) => {

    const sectionContainer = useRef(null);
    const projects = useRef([]);
    const button = useRef();
    const isSmallScreen = isMobile();

    const createSectionsRefs = (section, index) => {
        projects.current[index] = section;
    }

    useEffect(() => {
        if(isSmallScreen) {
            mobileAnimation();
        } else {
            desktopAnimation();
        }
    })

    return (
        <section ref={sectionContainer} className={styles.container}>
            {data.projects.map((project,index) => (
                <a href={getLocalizedSlug(lang, mainSlug, project.slug)} className={styles.projectContainer} ref={(e) => createSectionsRefs(e, index)}>
                    <div className={styles.projectTitleContainer}>
                        <h3 className={styles.projectTitle}>{project.projectTitle}</h3>
                    </div>
                    <div className={styles.overlayer} />
                    {displayImage(project.projectImage, styles.projectImage, "cover")}
                </a>
            ))}
            {isSmallScreen ? (
                <div className={styles.projectContainer}>
                    <a ref={button} href={getLocalizedSlug(lang, mainSlug)} className={styles.button}>{data.seeAllProjectsButtonTitle}</a>
                </div>
            ) : (
                <a ref={button} href={getLocalizedSlug(lang, mainSlug)} className={styles.button}>{data.seeAllProjectsButtonTitle}</a>
            )}
        </section>
    )

    function desktopAnimation() {
        let p = projects.current.slice().reverse();
        let refsLoaded = false;

        let checkIfRefsAreLoaded = setInterval(() => {
            if(
                typeof p !== undefined &&
                typeof sectionContainer.current !== undefined &&
                tl !== null
            ) {
                refsLoaded = true;
                if(refsLoaded) {
                    p.forEach((project, index) => {
                        tl.from(project, { y: sectionContainer.current.offsetHeight, ease: 'Power1.easeOut' }, `-=${0.3 + (index / 2)}`)
                    })
                    clearInterval(checkIfRefsAreLoaded)
                }
            }
        }, 100);
    }

    function mobileAnimation() {
        let checkIfRefsAreLoaded = setInterval(() => {
            if(
                typeof projects.current !== undefined &&
                typeof button.current !== undefined &&
                typeof sectionContainer.current !== undefined
            ) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionContainer.current,
                        scrub: 2,
                        end: `+=${sectionContainer.current.offsetHeight}`
                    }
                })
                //tl.from(title.current, { x: sectionContainer.current.offsetWidth, ease: 'Power1.easeOut', duration: 3 })
                projects.current.forEach(service => {
                    tl.from(service, { x: sectionContainer.current.offsetWidth, ease: 'Power1.easeOut', duration: 5 })
                })
                tl.from(button.current, { x: sectionContainer.current.offsetWidth, ease: 'Power1.easeOut', duration: 5 })
                clearInterval(checkIfRefsAreLoaded)
            }
        }, 100);
    }

}

export const fragment = graphql`
    fragment HomeProjectsFields on DatoCmsHomePage {
        projects {
            projectTitle
            projectImage {
                gatsbyImageData(layout: FIXED)
                url
                title
                format
                alt
            }
            slug
        }
        seeAllProjectsButtonTitle
    }
`


export default Projects