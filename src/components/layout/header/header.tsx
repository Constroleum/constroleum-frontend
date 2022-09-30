import React from "react";
import * as styles from "./header.module.scss";
import {graphql} from "gatsby";
import {HeaderFieldsFragment} from "../../../../graphql-types";

type RenderProps = {
    data: HeaderFieldsFragment,
}

const Header: React.FC<RenderProps> = ({ data }) => {

    return (
        <nav className={styles.container}>
            <div className={styles.content}>
                <a href={'/'} className={styles.link}>{data.homeButtonName}</a>
                <ul className={styles.linksGroup}>
                    <li className={styles.linkElement}>
                        <a href={"#aboutus"} className={styles.link}>{data.aboutUsButtonName}</a>
                    </li>
                    <li className={styles.linkElement}>
                        <a href={'/projects'} className={styles.link}>{data.projectsButtonName}</a>
                    </li>
                    <li className={styles.linkElement}>
                        <a href={'/services'} className={styles.link}>{data.servicesButtonName}</a>
                    </li>
                    <li className={styles.linkElement}>
                        <a href={'/contact'} className={styles.link}>{data.contactButtonName}</a>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export const fragment = graphql`
    fragment HeaderFields on DatoCmsHeader {
        aboutUsButtonName
        homeButtonName
        contactButtonName
        projectsButtonName
        servicesButtonName
    }
`

export default Header;