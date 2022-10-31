import React, {useEffect, useRef} from "react";
import * as styles from "./services.module.scss";
import {graphql} from "gatsby";
import {HomeServicesFieldsFragment} from "../../../../graphql-types";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {displayImage, getLocalizedSlug, isMobile} from "../../../global/functions/functions";
import ReactMarkdown from "react-markdown";

type RenderProps = {
    data: HomeServicesFieldsFragment,
    tl: any,
    projectsSection: any,
    lang: any,
    mainSlug: any
}

gsap.registerPlugin(ScrollTrigger);

const Services:React.FC<RenderProps> = ({ data, tl, projectsSection, lang, mainSlug }) => {

    const sectionContainer = useRef();
    const isSmallScreen = isMobile();
    const services = useRef([])
    const servicesTitle = useRef()
    const button = useRef()

    const createSectionsRefs = (section, index) => {
        services.current[index] = section;
    }

    useEffect(() => {
        if(isSmallScreen) {
            mobileAnimation();
        } else {
            desktopAnimation();
        }
    })

    return (
        <section ref={sectionContainer} id="services" className={styles.container}>
            <div className={styles.content}>
                <h3 ref={servicesTitle} className={styles.title}>services</h3>
                <ul className={styles.servicesListContainer}>
                    {data.services.map((service, index) => {
                        return (
                            <li className={styles.service} ref={(e) => createSectionsRefs(e, index)}>
                                {displayImage(service.serviceIcon, styles.icon, "contain")}
                                <p className={styles.serviceTitle}>{service.serviceTitle}</p>
                                <ReactMarkdown className={styles.serviceDescription}>{service.serviceDescription}</ReactMarkdown>
                            </li>
                        )
                    })}
                </ul>
                <a ref={button} href={getLocalizedSlug(lang, mainSlug)} className={styles.button}>{data.seeAllServicesButtonTitle}</a>
            </div>
        </section>
    )

    function desktopAnimation() {
        let s = services.current.slice().reverse();
        let refsLoaded = false;

        let checkIfRefsAreLoaded = setInterval(() => {
            if(
                typeof services.current !== undefined &&
                typeof servicesTitle.current !== undefined &&
                typeof button.current !== undefined &&
                tl !== null
            ) {
                refsLoaded = true;
                if(refsLoaded) {
                    tl.from(servicesTitle.current, { y: 900, ease: 'Power1.easeOut' }, '-=2')
                    s.forEach((service, index) => {
                        tl.from(service, { y: 900, ease: 'Power1.easeOut' }, `-=${0.3 + (index / 2)}`)
                    })
                    tl.from(button.current, { y: 900, ease: 'Power1.easeOut' }, '-=0.2')
                    tl.to(projectsSection, { xPercent: -300, duration: 2 }, `-=0.4`)
                    clearInterval(checkIfRefsAreLoaded)
                }
            }
        }, 100);
    }

    function mobileAnimation() {
        let checkIfRefsAreLoaded = setInterval(() => {
            if(
                typeof services.current !== undefined &&
                typeof servicesTitle.current !== undefined &&
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
                tl.from(servicesTitle.current, { x: sectionContainer.current.offsetWidth, ease: 'Power1.easeOut' })
                tl.to(servicesTitle.current, { x: 0, ease: 'Power1.easeOut' }, `-=5`)
                services.current.forEach(service => {
                    tl.from(service, { x: sectionContainer.current.offsetWidth, ease: 'Power1.easeOut', duration: 5 })
                })
                tl.from(button.current, { x: sectionContainer.current.offsetWidth, ease: 'Power1.easeOut', duration: 5 })
                clearInterval(checkIfRefsAreLoaded)
            }
        }, 100);
    }
}

export const fragment = graphql`
    fragment HomeServicesFields on DatoCmsHomePage {
        servicesSectionTitle
        seeAllServicesButtonTitle
        services {
            serviceTitle
            serviceDescription
            serviceIcon {
                gatsbyImageData(layout: FIXED)
                url
                title
                format
                alt
            }
        }
    }
`

export default Services