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