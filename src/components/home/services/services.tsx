import React from "react";
import * as styles from "./services.module.scss";

type RenderProps = {
    data: any
}

const Services:React.FC<RenderProps> = ({ data }) => {

    return (
        <section id="services" className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>services</h1>
            </div>
        </section>
    )
}

export default Services