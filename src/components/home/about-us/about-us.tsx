import React, {useEffect, useRef} from "react";
import {graphql} from "gatsby";
import * as styles from "./about-us.module.scss";
import {HomeAboutUsFieldsFragment} from "../../../../graphql-types";
import ReactMarkdown from "react-markdown";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {displayImage} from "../../../global/functions/functions";

type RenderProps = {
    data: HomeAboutUsFieldsFragment,
    tl: any
}

gsap.registerPlugin(ScrollTrigger);

const AboutUs:React.FC<RenderProps> = ({ data, tl }) => {

    const section = useRef();
    const sectionContainer = useRef();
    const background = useRef();

    useEffect(() => {
        const s = section;
        const sc = sectionContainer;
        const b = background;
        let refsLoaded = false;

        let checkIfRefsAreLoaded = setInterval(() => {
            if(typeof b.current !== undefined && typeof s.current !== undefined && typeof sc.current !== undefined && tl !== null) {
                refsLoaded = true;
                if(refsLoaded) {
                    tl
                        .from(s.current, { y: 900, ease: 'Power1.easeOut' }, '-=1.2')
                        .from(b.current, { x: b.current.offsetWidth, width: 0, left: b.current.offsetWidth, ease: 'Power1.easeOut', duration: 2 }, '-=1.8')
                    clearInterval(checkIfRefsAreLoaded)
                }
            }
        }, 100);
    })

    return (
        <section ref={sectionContainer} id="about-us" className={styles.container}>
            <div ref={background} className={styles.bgImageContainer}>
                {displayImage(data.aboutBackgroundImage, styles.bgImage, "cover")}
            </div>
            <div ref={section} id="about-us-content" className={styles.content}>
                <h1 className={styles.title}>{data.aboutUsTitle}</h1>
                <ReactMarkdown className={styles.paragraph}>{data.aboutUsTextContent}</ReactMarkdown>
            </div>
        </section>
    )

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