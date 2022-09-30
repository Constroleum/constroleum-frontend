import React from "react";
import {graphql} from "gatsby";
import * as styles from "./cover.module.scss";
import {HomeCoverFieldsFragment} from "../../../../graphql-types";
import {displayImage} from "../../../global/functions/functions";

type RenderProps = {
    data: HomeCoverFieldsFragment
}

const Cover:React.FC<RenderProps> = ({ data }) => {

    return (
        <section className={styles.container}>
            <div className={styles.logoContainer}>
                {displayImage(data.logo, styles.logo, "contain")}
            </div>
            <div className={styles.overlayer} />
            <div className={styles.bgImageContainer}>
                {displayImage(data.backgroundImage, styles.bgImage, "cover")}
            </div>
        </section>
    )
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