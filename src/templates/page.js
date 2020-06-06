import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TagBadge from "../components/tagBadge"

const shortcodes = { Link } // Provide common components here

const Page = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <h1>{mdx.frontmatter.title}</h1>
      {mdx.frontmatter.date && <h5>Published {mdx.frontmatter.date}</h5>}
      {mdx.frontmatter.tags &&
        mdx.frontmatter.tags.map(t => <TagBadge tag={t} key={t} />)}
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        tags
      }
    }
  }
`
