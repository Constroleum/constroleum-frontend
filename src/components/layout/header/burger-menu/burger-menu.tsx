import React, {Fragment, useRef, useState} from "react";
import * as styles from "./burger-menu.module.scss";
import {gsap} from "gsap";

type RenderProps = {
    data: any
}

const BurgerMenu: React.FC<RenderProps> = ({ data }) => {

    const [open, setOpen] = useState(false);
    const [tl, setTl] = useState(gsap.timeline({ paused: true }));
    const menuContainer = useRef();

    return (
        <div ref={menuContainer} className={styles.container}>
            {displayMenuButton()}
        </div>
    )

    function displayMenu():JSX.Element {
        return <Fragment />
    }

    function displayMenuButton():JSX.Element {
        return (
            <button className={styles.button} onClick={() => {
                openMenuAnimation();
            }}>
                <span className={styles.span1}>{open ? 'X' : 'O'}</span>
            </button>
        )
    }

    function openMenuAnimation() {
        tl.to(menuContainer.current, { backgroundColor: '#FFE600', padding: 0, height: window.innerHeight, duration: .5 })
        if (tl.reversed()) {
            tl.play();
        } else {
            tl.reverse();
        }

    }
}

export default BurgerMenu;