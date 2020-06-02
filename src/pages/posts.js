import React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHardHat } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PostsPage = ({ data }) => {
  const { edges: posts } = data.allMdx
  console.log(posts)
  return (
    <Layout>
      <SEO title="Posts" />
      <h1>Posts</h1>
      <div>
        {posts.map(({ node: post }) => {
          const isDraft = post.fields.slug.startsWith("/posts/drafts/")

          return (
            <div key={post.id} style={{ paddingBottom: "1rem" }}>
              <Link
                to={post.fields.slug}
                style={{ textDecoration: "none", color: isDraft && "orange" }}
              >
                <h3 style={{ marginBottom: "0.5rem" }}>
                  {isDraft && (
                    <FontAwesomeIcon
                      icon={faHardHat}
                      style={{ marginRight: "1rem" }}
                    />
                  )}
                  {post.frontmatter.title}
                </h3>
              </Link>
              <p style={{ marginBottom: "0.5rem" }}>
                <b>Last updated {post.frontmatter.date}</b>

                {post.frontmatter.tags &&
                  post.frontmatter.tags.map(t => (
                    <span className="tag">{t}</span>
                  ))}
              </p>
              <p>{post.excerpt}</p>
            </div>
          )
        })}
      </div>
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
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
