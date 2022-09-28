import React from "react"
import * as styles from "./youtube-video.module.scss"
import YoutubeEmbed from "../../../global/functions/youtube-embed/youtube-embed";

type RenderProps = {
    data: any
}

const YoutubeVideo: React.FC<RenderProps> = ({ data }) => {

    return (
        <section className={styles.container}>
            {/*<YoutubeEmbed embedLink={data.youtubeEmbedLink} />*/}
        </section>
    )

}

export default YoutubeVideo