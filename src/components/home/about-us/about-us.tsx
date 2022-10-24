import React, {useEffect, useRef} from "react";
import {graphql} from "gatsby";
import * as styles from "./about-us.module.scss";
import {HomeAboutUsFieldsFragment} from "../../../../graphql-types";
import ReactMarkdown from "react-markdown";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {displayImage, isMobile} from "../../../global/functions/functions";

type RenderProps = {
    data: HomeAboutUsFieldsFragment,
    tl: any,
    servicesSection: any
}

gsap.registerPlugin(ScrollTrigger);

const AboutUs:React.FC<RenderProps> = ({ data, tl, servicesSection }) => {

    const section = useRef(null);
    const sectionContainer = useRef(null);
    const background = useRef(null);
    const isSmallScreen = isMobile();

    useEffect(() => {
        if(isSmallScreen) {
            mobileAnimation();
        } else {
            desktopAnimation();
        }
    })

    return (
        <section ref={sectionContainer} id="about-us" className={styles.container}>
            <div ref={background} className={styles.bgImageContainer}>
                {displayImage(data.aboutBackgroundImage, styles.bgImage, isSmallScreen ? "contain" : "cover")}
            </div>
            <div ref={section} id="about-us-content" className={styles.content}>
                <h1 className={styles.title}>{data.aboutUsTitle}</h1>
                <ReactMarkdown className={styles.paragraph}>{data.aboutUsTextContent}</ReactMarkdown>
            </div>
        </section>
    )

    function desktopAnimation() {
        const s = section;
        const sc = sectionContainer;
        const b = background;
        let refsLoaded = false;

        let checkIfRefsAreLoaded = setInterval(() => {
            if(typeof b.current !== undefined && typeof s.current !== undefined && typeof sc.current !== undefined && tl !== null) {
                refsLoaded = true;
                if(refsLoaded) {
                    tl
                        .from(b.current, { x: b.current.offsetWidth, width: 0, left: b.current.offsetWidth, ease: 'Power1.easeOut', duration: 2 }, '-=1.8')
                        .from(s.current, { y: 900, ease: 'Power1.easeOut' }, '-=1.2')
                        .to(b.current, { x: b.current.offsetWidth, width: 0, left: 0, ease: 'Power1.easeOut', duration: 2 })
                        .to(s.current, { x: -2000, ease: 'Power1.easeInOut' }, '-=1.3')
                        .to(servicesSection, { xPercent: -200, duration: 2 }, '-=2')
                    clearInterval(checkIfRefsAreLoaded)
                }
            }
        }, 100);
    }

    function mobileAnimation() {
        const s = section;
        const sc = sectionContainer;
        const b = background;

        let checkIfRefsAreLoaded = setInterval(() => {
            if(typeof s.current !== undefined && typeof sc.current !== undefined && typeof b.current !== undefined) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sc.current,
                        scrub: 2,
                        end: `+=${sc.current.offsetHeight}`
                    }
                })
                tl .from(b.current, { x: sc.current.offsetWidth, ease: 'Power1.easeOut', duration: 5 })
                    .from(s.current, { x: sc.current.offsetWidth, ease: 'Power1.easeOut', duration: 5 })

                clearInterval(checkIfRefsAreLoaded)
            }
        }, 100);
    }

}

export const fragment = graphql`
    fragment HomeAboutUsFields on DatoCmsHomePage {
        aboutUsTextContent
        aboutUsTitle
        aboutBackgroundImage {
            gatsbyImageData(layout: FIXED)
            url
            title
            format
            alt
        }
    }
`


export default AboutUs