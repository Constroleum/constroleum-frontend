import React  from "react";
import * as styles from "./burger-menu.module.scss";

type RenderProps = {
    data: any
}

const BurgerMenu: React.FC<RenderProps> = ({ data }) => {

    return (
        <div className={styles.container}>
            Burger Menu
        </div>
    )

}

export default BurgerMenu;