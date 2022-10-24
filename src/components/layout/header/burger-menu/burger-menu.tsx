import React, {useRef, useState} from "react";
import * as styles from "./burger-menu.module.scss";
import {gsap} from "gsap";
import {HeaderFieldsFragment} from "../../../../../graphql-types";

type RenderProps = {
    data: HeaderFieldsFragment
}

const BurgerMenu: React.FC<RenderProps> = ({ data }) => {

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
                    <a className={styles.link} href="/">{data.homeButtonName}</a>
                </li>
                <li className={styles.burgerMenuElement}>
                    <a className={styles.link} href="/">{data.aboutUsButtonName}</a>
                </li>
                <li className={styles.burgerMenuElement}>
                    <a className={styles.link} href="/">{data.projectsButtonName}</a>
                </li>
                <li className={styles.burgerMenuElement}>
                    <a className={styles.link} href="/">{data.servicesButtonName}</a>
                </li>
                <li className={styles.burgerMenuElement}>
                    <a className={styles.link} href="/">{data.contactButtonName}</a>
                </li>
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
            tl.to(menuContainer.current, { backgroundColor: '#000000', paddingLeft: 20, paddingTop: 20, height: window.innerHeight, duration: .5, delay: 0 });
            tl.play();

        } else {
            tl.to(menuContainer.current, { backgroundColor: 'transparent', paddingLeft: 20, paddingTop: 20, height: 100, duration: .5, delay: 0 })
            tl.play();
        }

    }
}

export default BurgerMenu;