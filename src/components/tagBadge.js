import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const TagBadge = ({ tag }) => {
  return (
    <Link
      to={`/tags/${kebabCase(tag)}/`}
      className="badge badge-primary"
      style={{ margin: "5px" }}
    >
      {tag}
    </Link>
  )
}

export default TagBadge
