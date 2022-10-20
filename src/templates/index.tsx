import React, {useEffect, useRef, useState} from "react";
import {graphql} from "gatsby";
import {HomeQuery} from "../../graphql-types";
import * as styles from "./index.module.scss";
import Layout from "../components/layout/layout";
import AboutUs from "../components/home/about-us/about-us";
import Cover from "../components/home/cover/cover";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type RenderProps = {
    data: HomeQuery
}

gsap.registerPlugin(ScrollTrigger);

const Index:React.FC<RenderProps> = ({ data }) => {

    const overlayer = useRef(null);
    const sections = useRef([]);
    const sectionsContainer = useRef();
    const [startAnimation, setStartAnimation] = useState(false);

    const createSectionsRefs = (section, index) => {
        sections.current[index] = section;
    }

    useEffect(() => {
        loadOverlayerAnimation()
    })

    useEffect(() => {
        const totalSections = sections.current.length;
        let loadTimeout = setTimeout(() => {
            let scrollTween = gsap.to(sections.current, {
                xPercent: +100 * (totalSections - 2),
                ease: "none",
                scrollTrigger: {
                    trigger: sectionsContainer.current,
                    pin: true,
                    scrub: .1,
                    // base vertical scrolling on how wide the container is so it feels more natural.
                    end: `+=${sectionsContainer.current.offsetWidth}`
                }
            });
        }, 1600);

        return () => clearTimeout(loadTimeout);
    }, [])

    return (
        <Layout header={data.datoCmsHeader}>
            <div
                id="container"
                className={styles.container}
                ref={sectionsContainer}
                style={{ backgroundImage: `url(${data.datoCmsHomePage.backgroundImage.url})` }}
            >
                <section id="cover-section" className={styles.section} ref={(e) => createSectionsRefs(e, 0)}>
                    <Cover data={data.datoCmsHomePage} />
                </section>
                <section id="about-section" className={styles.section} ref={(e) => createSectionsRefs(e, 1)}>
                    <AboutUs data={data.datoCmsHomePage} />
                </section>
                <section id="about-section2" className={styles.section} ref={(e) => createSectionsRefs(e, 2)}>
                    <AboutUs data={data.datoCmsHomePage} />
                </section>
                <div ref={overlayer} className={styles.overlayer} />
            </div>
        </Layout>
    )

    function loadOverlayerAnimation() {
        setTimeout(() => {
            overlayer.current.style.backgroundColor = "rgba(0,0,0,0.5)";
        }, 600)
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