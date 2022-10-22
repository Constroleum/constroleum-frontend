import React, {Fragment, useState} from "react";
import * as styles from "./burger-menu.module.scss";

type RenderProps = {
    data: any
}

const BurgerMenu: React.FC<RenderProps> = ({ data }) => {

    const [open, setOpen] = useState(false);

    return (
        <div className={styles.container}>
            {displayMenuButton()}
        </div>
    )

    function displayMenu():JSX.Element {
        return <Fragment />
    }

    function displayMenuButton():JSX.Element {
        return (
            <button className={styles.button} onClick={() => setOpen(prevState => !prevState)}>
                <span className={styles.span1}>{open ? 'X' : 'O'}</span>
            </button>
        )
    }

}

export default BurgerMenu;