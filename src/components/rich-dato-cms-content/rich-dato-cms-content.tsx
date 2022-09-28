import React from "react"
import * as styles from "./rich-dato-cms-content.module.scss"

/*
type RichDatoCmsContentUnion = { __typename: string } & (
    | YoutubeVideoFieldsFragment
    )
*/

type RenderProps = {
    data: any /* RichDatoCmsContentUnion[] */
}

const RichDatoCmsContent: React.FC<RenderProps> = ({data}) => {
    function fetchRichDatoCmsContent(richContent: any /* RichDatoCmsContentUnion */, index: number) {
        switch (richContent.__typename) {
            /* case "DatoCmsButton":
                return <Button key={index} data={richContent as ButtonFieldsFragment}/> */
            default:
                return;
        }
    }

    return <div className={styles.richContent}>{data && data.map(fetchRichDatoCmsContent)}</div>
}

export default RichDatoCmsContent