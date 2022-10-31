import React, {Fragment, useEffect, useState} from "react";
import * as styles from "./header.module.scss";
import {graphql} from "gatsby";
import {HeaderFieldsFragment} from "../../../../graphql-types";
import {getLocalizedSlug, isMobile} from "../../../global/functions/functions";
import BurgerMenu from "./burger-menu/burger-menu";

type RenderProps = {
    data: HeaderFieldsFragment,
    mainSlugs: any,
    lang: {
        defaultLanguage: string,
        locale: string
    }
}

const Header: React.FC<RenderProps> = ({ data, lang, mainSlugs }) => {

    const [container, setContainer] = useState(undefined);

    useEffect(() => {
        setContainer(document.querySelector("#container"))
    }, [])

    return (
        <Fragment>
            {isMobile() ?
                <BurgerMenu
                    data={data}
                    lang={lang}
                    mainSlugs={mainSlugs}
                /> :
                displayHeader()}
        </Fragment>
    )

    function displayHeader():JSX.Element {
        return (
            <nav className={styles.container}>
                <div className={styles.content}>
                    <a href={lang.locale === lang.defaultLanguage ? `/` : `/${lang.locale}`} className={styles.homeLink}>{data.homeButtonName}</a>
                    <ul className={styles.linksGroup}>
                        <li className={styles.linkElement}>
                            <a href={getLocalizedSlug(lang, mainSlugs.projectsPageSlug)} className={styles.link}>{data.projectsButtonName}</a>
                        </li>
                        <li className={styles.linkElement}>
                            <a href={getLocalizedSlug(lang, mainSlugs.servicesPageSlug)} className={styles.link}>{data.servicesButtonName}</a>
                        </li>
                        <li className={styles.linkElement}>
                            <a href={getLocalizedSlug(lang, mainSlugs.contactPageSlug)} className={styles.link}>{data.contactButtonName}</a>
                        </li>
                        <ul className={styles.langContainer}>
                            <li className={styles.linkElement}>
                                <a href={'/'} className={styles.link}>EN</a>
                                <span className={styles.separator} style={{ paddingLeft: 5 }}>|</span>
                            </li>
                            <li className={styles.linkElement}>
                                <a href={'/hu'} className={styles.link}>HU</a>
                                <span className={styles.separator} style={{ paddingLeft: 6 }}>|</span>
                            </li>
                            <li className={styles.linkElement}>
                                <a href={'/es'} className={styles.link}>ES</a>
                            </li>
                        </ul>
                    </ul>
                </div>
            </nav>
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