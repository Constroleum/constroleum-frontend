import {ReactSVG} from "react-svg";
import {GatsbyImage} from "gatsby-plugin-image";
import React from "react";
import useWindowWidth from "../../hooks/use-window-width";
import {type} from "os";

export function displayImage(img, style, objectFit: any = "contain") {
    if (img && img.format === "svg") {
        return <ReactSVG src={img.url} className={style}/>
    } else {
        return (
            <GatsbyImage
                image={img && img.gatsbyImageData}
                alt={img && img.alt || ""}
                className={style}
                objectFit={objectFit}
            />
        )
    }
}

export function elementOffset(element) {
    let rect = element && element.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop
    return rect ? { top: rect.top + scrollTop, left: rect.left + scrollLeft, bottom: rect.bottom + scrollTop } : null
}

export function isMobile():boolean {
    return useWindowWidth() <= 1200;
}

export function checkIfRefsAreLoaded(referencedElements: any, callback: () => void) {
    let refsLoaded = false;
    let undefinedRefs = false;
    let refs = [...referencedElements]

    let checkIfRefsAreLoaded = setInterval(() => {
        refs.forEach(ref => {
            if(typeof ref === undefined || typeof ref === null || ref === null) undefinedRefs = true;
        })

        if(!undefinedRefs) {
            refsLoaded = true;
            console.log(refsLoaded)
            if(refsLoaded) {
                callback()
                clearInterval(checkIfRefsAreLoaded)
            }
        }
    }, 100);
}