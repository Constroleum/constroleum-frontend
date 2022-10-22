import React, {useEffect, useState} from "react";
import * as styles from "./header.module.scss";
import {graphql} from "gatsby";
import {HeaderFieldsFragment} from "../../../../graphql-types";
import {isMobile} from "../../../global/functions/functions";
import BurgerMenu from "./burger-menu/burger-menu";

type RenderProps = {
    data: HeaderFieldsFragment
}

const Header: React.FC<RenderProps> = ({ data }) => {

    const [container, setContainer] = useState(undefined);

    useEffect(() => {
        setContainer(document.querySelector("#container"))
    }, [])

    return (
        <nav className={styles.container}>
            {isMobile() ? <BurgerMenu data={data} /> : displayHeader()}
        </nav>
    )

    function displayHeader():JSX.Element {
        return (
            <div className={styles.content}>
                <a href={'/'} className={styles.homeLink}>{data.homeButtonName}</a>
                <ul className={styles.linksGroup}>
                    <li className={styles.linkElement}>
                        <span
                            onClick={() => {
                                container && container.scrollTo({
                                    left: window.innerWidth,
                                    behavior: "smooth"
                                })
                            }}
                            className={styles.link}
                        >
                            {data.aboutUsButtonName}
                        </span>
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
        )
    }

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