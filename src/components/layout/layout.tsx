import React, {useEffect, useState} from 'react';
import * as styles from './layout.module.scss';
import Header from "./header/header";
import { Helmet } from 'react-helmet';
import {HeaderFieldsFragment} from "../../../graphql-types";

type RenderProps = {
    header: HeaderFieldsFragment,
    mainSlugs: any,
    lang: {
        defaultLanguage: string,
        locale: string
    },
    seo?: {
        title?: string,
        description?: string
    }
}

const Layout:React.FC<RenderProps> = ({ header, lang, mainSlugs, seo, children }) => {

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
                <title>{seo ? seo.title : `Constroleum`}</title>
                <meta name="description" content={seo ? seo.description : `Constroleum`} />
            </Helmet>
           <Header
               data={header}
               lang={lang}
               mainSlugs={mainSlugs}
           />
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )

}

export default Layout;