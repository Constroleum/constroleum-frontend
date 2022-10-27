import React, {useRef, useState} from "react";
import * as styles from "./burger-menu.module.scss";
import {gsap} from "gsap";
import {HeaderFieldsFragment} from "../../../../../graphql-types";
import {getLocalizedSlug} from "../../../../global/functions/functions";

type RenderProps = {
    data: HeaderFieldsFragment,
    lang: any,
    mainSlugs: any
}

const BurgerMenu: React.FC<RenderProps> = ({ data, lang, mainSlugs }) => {

    const [open, setOpen] = useState(false);
    const [tl, setTl] = useState(gsap.timeline({ paused: true }));
    const menuContainer = useRef();

    return (
        <div ref={menuContainer} className={styles.container}>
            {displayMenuButton()}
            {open && displayMenu()}
        </div>
    )

    function displayMenu():JSX.Element {
        return (
            <ul className={styles.burgerMenu}>
                <li className={styles.burgerMenuElement}>
                    <a className={styles.link} href={lang.locale === lang.defaultLanguage ? `/` : `/${lang.locale}`}>{data.homeButtonName}</a>
                </li>
                <li className={styles.burgerMenuElement}>
                    <a className={styles.link} href="/">{data.aboutUsButtonName}</a>
                </li>
                <li className={styles.burgerMenuElement}>
                    <a className={styles.link} href={getLocalizedSlug(lang, mainSlugs.projectsPageSlug)}>{data.projectsButtonName}</a>
                </li>
                <li className={styles.burgerMenuElement}>
                    <a className={styles.link} href={getLocalizedSlug(lang, mainSlugs.servicesPageSlug)}>{data.servicesButtonName}</a>
                </li>
                <li className={styles.burgerMenuElement}>
                    <a className={styles.link} href={getLocalizedSlug(lang, mainSlugs.contactPageSlug)}>{data.contactButtonName}</a>
                </li>
                <ul className={styles.langContainer}>
                    <li className={styles.langListElement}>
                        <a href={'/'} className={styles.link}>EN</a>
                        <span className={styles.separator} style={{ paddingLeft: 5 }}>|</span>
                    </li>
                    <li className={styles.langListElement}>
                        <a href={'/hu'} className={styles.link}>HU</a>
                        <span className={styles.separator} style={{ paddingLeft: 6 }}>|</span>
                    </li>
                    <li className={styles.langListElement}>
                        <a href={'/es'} className={styles.link}>ES</a>
                    </li>
                </ul>
            </ul>
        )
    }

    function displayMenuButton():JSX.Element {
        return (
            <button
                className={styles.button}
                onClick={() => {
                    openMenuAnimation();
                }}
            >
                <div className={open ? styles.burgerClose : styles.burger} />
            </button>
        )
    }

    function openMenuAnimation() {
        setOpen(prevState => !prevState);
        if (!open) {
            tl.to(menuContainer.current, { backgroundColor: '#000000', paddingLeft: 20, paddingTop: 20, height: "100vh", duration: .5, delay: 0 });
            tl.play();

        } else {
            tl.to(menuContainer.current, { backgroundColor: 'transparent', paddingLeft: 20, paddingTop: 20, height: 100, duration: .5, delay: 0 })
            tl.play();
        }

    }
}

export default BurgerMenu;