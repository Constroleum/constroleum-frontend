import React from 'react';
import * as styles from './footer.module.scss';
import useWindowWidth from "../../../hooks/use-window-width";
import { useHover } from '../../../hooks/useHover';

type RenderProps = {
    data: any
}

const Footer:React.FC<RenderProps> = ({data}) => {

    const isMobile = useWindowWidth() <= 1200;
    const [hoverRef, isHovered] = useHover<HTMLDivElement>()

    return (
        <nav className={styles.container}>

        </nav>
    )

}

export default Footer;