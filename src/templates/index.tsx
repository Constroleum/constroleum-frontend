import React from "react";
import {graphql} from "gatsby";
import {HomeQuery} from "../../graphql-types";
import Cover from "../components/home/cover/cover";
import Layout from "../components/layout/layout";

type RenderProps = {
    data: HomeQuery
}

const Index:React.FC<RenderProps> = ({ data }) => {

    return (
        <Layout header={data.datoCmsHeader}>
            <Cover data={data.datoCmsHomePage} />
        </Layout>
    )
}

export const pageQuery = graphql`
    query Home($locale: String!) {
        datoCmsHomePage(locale: { eq: $locale }) {
            ...HomeCoverFields
        }
        datoCmsHeader(locale: { eq: $locale }) {
            ...HeaderFields
        }
    }
`


export default Index
