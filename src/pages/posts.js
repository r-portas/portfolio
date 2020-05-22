import React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHardHat } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PostsPage = ({ data }) => {
  console.log(process.env.NODE_ENV)
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      <SEO title="Posts" />
      <h1>Posts</h1>
      <ul>
        {posts.map(({ node: post }) => {
          const isDraft = post.fields.slug.startsWith("/posts/drafts/")

          return (
            <li key={post.id}>
              <Link
                to={post.fields.slug}
                style={{ textDecoration: "none", color: isDraft && "orange" }}
              >
                <h3>
                  {post.frontmatter.date}: {post.frontmatter.title}
                  {isDraft && (
                    <FontAwesomeIcon
                      icon={faHardHat}
                      style={{ marginLeft: "1rem" }}
                    />
                  )}
                </h3>
              </Link>
              <p>{post.excerpt}</p>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default PostsPage

export const pageQuery = graphql`
  query postsIndex {
    allMdx(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
