import React, {useEffect, useState} from 'react';
import * as styles from './layout.module.scss';
import Header from "./header/header";
import Footer from "./footer/footer";
import { Helmet } from 'react-helmet';
import BurgerMenu from "./header/burger-menu/burger-menu";

type RenderProps = {
    header: any,
    footer: any,
    isMobile: boolean,
    seo?: {
        title?: string,
        description?: string
    }
}

const Layout:React.FC<RenderProps> = ({ header, footer, isMobile, seo, children }) => {

    // THIS FEW LINES OF CODE ARE HERE TO AVOID PAGE FLICKERING ON PRODUCTION
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if(!hasMounted) return null;

    return (
        <div className={styles.container}>
            <Helmet htmlAttributes={{ lang: 'es' }}>
                <meta charSet="utf-8" />
                <title>{seo ? seo.title : `Constroleum`}</title>º
                <meta name="description" content={seo ? seo.description : `Constroleum`} />
            </Helmet>
            { isMobile ? <BurgerMenu data={{}} /> : <Header isMobile={false} data={{}} /> }
            <main id="main">
                {children}
            </main>
            <Footer data={{}} />
        </div>
    )

}

export default Layout;