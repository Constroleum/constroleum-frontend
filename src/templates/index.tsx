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

type RenderProps = {
    data: HomeQuery
}

gsap.registerPlugin(ScrollTrigger);

const Index:React.FC<RenderProps> = ({ data }) => {

    const overlayer = useRef(null);
    const sections = useRef([])
    const sectionsContainer = useRef(null)
    const [timeline, setTimeline] = useState(null);
    const isSmallScreen = isMobile();

    const createSectionsRefs = (section, index) => {
        sections.current[index] = section;
    }

    useEffect(() => {
        loadOverlayerAnimation()
        if(!isSmallScreen) desktopAnimation();
    }, [])

    return (
        <Layout header={data.datoCmsHeader}>
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
                    <div ref={overlayer} className={styles.overlayer} />
                    <Cover data={data.datoCmsHomePage} />
                </section>
                <section id="about-section" className={styles.aboutSection} ref={(e) => createSectionsRefs(e, 1)}>
                    <AboutUs data={data.datoCmsHomePage} tl={timeline} servicesSection={sections.current[2]} />
                </section>
                <section id="services-section" className={styles.servicesSection} ref={(e) => createSectionsRefs(e, 2)}>
                    <Services data={data.datoCmsHomePage} tl={timeline} />
                </section>
            </div>
        </Layout>
    )

    function loadOverlayerAnimation() {
        setTimeout(() => {
            overlayer.current.style.backgroundColor = "rgba(0,0,0,0.5)";
        }, 600)
    }

    /*function desktopAnimation() {
        let refsLoaded = false;

        let checkIfRefsAreLoaded = setInterval(() => {
            if(typeof sections.current !== undefined && typeof sectionsContainer.current !== undefined) {
                refsLoaded = true;
                if(refsLoaded) {
                    const tl = gsap.timeline();
                    ScrollTrigger.create({
                        animation: tl,
                        trigger: sectionsContainer.current,
                        start: "top top",
                        end: "+=3000",
                        scrub: true,
                        pin: true,
                        markers: true,
                        anticipatePin: 1
                    })
                    tl.to(sections.current[0], { width: 0, duration: 2 })
                        .to(sections.current[1], { width: 0, duration: 2 })
                        .to(sections.current[2], { width: 0, duration: 2 })
                    setTimeline(tl)
                    clearInterval(checkIfRefsAreLoaded)
                }
            }
        }, 100);
    }*/

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
                            scrub: 2,
                            end: `+=5000`,
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
        }
        datoCmsHeader(locale: { eq: $locale }) {
            ...HeaderFields
        }
    }
`


export default Index

/*

typeof window !== undefined && document.addEventListener("scroll", (e) => {
            const vh = window.innerHeight;
            setOpacity(prevOpacity => {
                return (window.pageYOffset * 0.8 / vh) + 0.5 > 0.8 ? 0.8 : (window.pageYOffset * 0.8 / vh) + 0.5
            })
        }, {passive: false})

 */