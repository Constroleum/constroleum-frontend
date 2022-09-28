import React from "react";
import * as styles from "./header.module.scss";

type RenderProps = {
    data: any,
    isMobile: boolean
}

const Header: React.FC<RenderProps> = ({ data, isMobile }) => {

    return (
        <nav className={styles.container}>
            HEADER
        </nav>
    )

}

export default Header;