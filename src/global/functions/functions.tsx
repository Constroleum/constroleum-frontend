import {ReactSVG} from "react-svg";
import {GatsbyImage} from "gatsby-plugin-image";
import React from "react";

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