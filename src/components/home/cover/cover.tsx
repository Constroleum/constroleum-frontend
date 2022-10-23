import React, {useEffect, useRef, useState} from "react";
import {graphql} from "gatsby";
import * as styles from "./cover.module.scss";
import {displayImage} from "../../../global/functions/functions";
import {HomeCoverFieldsFragment} from "../../../../graphql-types";

type RenderProps = {
    data: HomeCoverFieldsFragment
}

const Cover:React.FC<RenderProps> = ({ data }) => {

    const logo = useRef(null)

    useEffect(() => {
        loadLogoAnimation()
    }, [])

    return (
        <section className={styles.container}>
            <div ref={logo} className={styles.logoContainer} style={{ opacity: 0 }}>
                {displayImage(data.logo, styles.logo, "contain")}
            </div>
        </section>
    )

    function loadLogoAnimation() {
        setTimeout(() => {
            logo.current.style.opacity = 1;
        }, 800)
    }
}

export const fragment = graphql`
    fragment HomeCoverFields on DatoCmsHomePage {
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
    }
`


export default Cover