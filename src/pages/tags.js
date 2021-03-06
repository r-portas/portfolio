import React from "react"
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const TagsPage = ({
  data: {
    allMdx: { group },
  },
}) => (
  <Layout>
    <SEO title="Tags" />
    <div>
      <h1>Tags</h1>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
