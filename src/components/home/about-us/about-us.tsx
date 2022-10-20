import React from "react";
import {graphql} from "gatsby";
import * as styles from "./about-us.module.scss";
import {HomeAboutUsFieldsFragment} from "../../../../graphql-types";
import ReactMarkdown from "react-markdown";

type RenderProps = {
    data: HomeAboutUsFieldsFragment,
}

const AboutUs:React.FC<RenderProps> = ({ data }) => {

    return (
        <section id="about-us" className={styles.container}>
            <div id="about-us-content" className={styles.content}>
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
    }
`


export default AboutUs