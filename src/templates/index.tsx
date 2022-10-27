import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import {graphql} from "gatsby";
import {HomeQuery} from "../../graphql-types";
import * as styles from "./index.module.scss";
import Layout from "../components/layout/layout";
import AboutUs from "../components/home/about-us/about-us";
import Cover from "../components/home/cover/cover";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {isMobile} from "../global/functions/functions";
import Services from "../components/home/services/services";
import Projects from "../components/home/projects/projects";

type RenderProps = {
    data: HomeQuery,
    pageContext
}

gsap.registerPlugin(ScrollTrigger);

const Index:React.FC<RenderProps> = ({ data, pageContext }) => {

    const sections = useRef([])
    const sectionsContainer = useRef(null)
    const [timeline, setTimeline] = useState(null);
    const isSmallScreen = isMobile();

    const createSectionsRefs = (section, index) => {
        sections.current[index] = section;
    }

    useEffect(() => {
        if(!isSmallScreen) desktopAnimation();
    }, [])

    return (
        <Layout
            header={data.datoCmsHeader}
            lang={pageContext.lang}
            mainSlugs={pageContext.mainSlugs}
        >
            <div
                id="container"
                className={styles.container}
                ref={sectionsContainer}
            >
                <section
                    id="cover-section"
                    className={styles.coverSection}
                    ref={(e) => createSectionsRefs(e, 0)}
                    style={{ backgroundImage: `url(${data.datoCmsHomePage.backgroundImage.url})` }}
                >
                    <div className={styles.overlayer} />
                    <Cover data={data.datoCmsHomePage} />
                </section>
                <section id="about-section" className={styles.aboutSection} ref={(e) => createSectionsRefs(e, 1)}>
                    <AboutUs
                        data={data.datoCmsHomePage}
                        tl={timeline}
                        servicesSection={sections.current[2]}
                    />
                </section>
                <section id="services-section" className={styles.servicesSection} ref={(e) => createSectionsRefs(e, 2)}>
                    <Services
                        data={data.datoCmsHomePage}
                        tl={timeline}
                        projectsSection={sections.current[3]}
                        lang={pageContext.lang}
                        mainSlug={pageContext.mainSlugs.servicesPageSlug}
                    />
                </section>
                <section id="projects-section" className={styles.projectsSection} ref={(e) => createSectionsRefs(e, 3)}>
                    <Projects
                        data={data.datoCmsHomePage}
                        tl={timeline}
                        lang={pageContext.lang}
                        mainSlug={pageContext.mainSlugs.projectsPageSlug}
                    />
                </section>
            </div>
        </Layout>
    )

    function desktopAnimation() {
        let refsLoaded = false;

        let checkIfRefsAreLoaded = setInterval(() => {
            if(typeof sections.current !== undefined && typeof sectionsContainer.current !== undefined) {
                refsLoaded = true;
                if(refsLoaded) {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: sectionsContainer.current,
                            pin: true,
                            scrub: 1,
                            end: sections.current[0].offsetWidth * 4,
                            invalidateOnRefresh: true
                        }
                    })
                        .to(sections.current[1], { xPercent: -100, duration: 2 })
                    ScrollTrigger.refresh()
                    setTimeline(tl)
                    clearInterval(checkIfRefsAreLoaded)
                }
            }
        }, 100);
    }

}

export const pageQuery = graphql`
    query Home($locale: String!) {
        datoCmsHomePage(locale: { eq: $locale }) {
            backgroundImage {
                gatsbyImageData(layout: FIXED)
                url
                title
                format
                alt
            }
            logo {
                gatsbyImageData(layout: FIXED)
                url
                title
                format
                alt
            }
            ...HomeAboutUsFields
            ...HomeServicesFields
            ...HomeProjectsFields
        }
        datoCmsHeader(locale: { eq: $locale }) {
            ...HeaderFields
        }
    }
`


export default Index