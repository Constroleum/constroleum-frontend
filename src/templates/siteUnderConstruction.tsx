import React from "react";
import { graphql } from "gatsby";
import * as styles from "./siteUnderConstruction.module.scss";
import { SiteUnderConstructionFieldsFragment } from "../../graphql-types";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type RenderProps = {
  data: SiteUnderConstructionFieldsFragment;
};

const SiteUnderConstruction: React.FC<RenderProps> = ({ data }) => {
  return (
    <section
      className={styles.container}
      style={{
        backgroundImage: `url(${data.backgroundImage.url})`,
      }}
    >
      <div className={styles.overlayer}>
        <div className={styles.content}>
          <ReactMarkdown className={styles.paragraph}>
            {data.siteUnderConstructionText}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export const fragment = graphql`
  fragment SiteUnderConstructionFields on DatoCmsSiteUnderConstruction {
    siteUnderConstructionText
    backgroundImage {
      gatsbyImageData(layout: FIXED)
      url
      title
      format
      alt
    }
  }
`;

export default SiteUnderConstruction;
