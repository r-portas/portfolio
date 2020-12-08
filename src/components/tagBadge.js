import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const TagBadge = ({ tag }) => {
  return (
    <Link
      to={`/tags/${kebabCase(tag)}/`}
      className="badge bg-secondary"
      style={{ margin: "5px", fontSize: "1rem", textDecoration: "none" }}
    >
      {tag}
    </Link>
  )
}

export default TagBadge
