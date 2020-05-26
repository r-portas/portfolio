import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons"
import "./header.css"

const HeaderLink = ({ to, name }) => {
  return (
    <Link to={to} className="header-link">
      {name}
    </Link>
  )
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontSize: "1.5rem",
          }}
        >
          Roy Portas
        </Link>

        <a
          href="https://github.com/r-portas"
          target="_blank"
          rel="noreferrer"
          className="header-link"
          style={{ marginLeft: "5px" }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://gitlab.com/royportas"
          target="_blank"
          rel="noreferrer"
          className="header-link"
          style={{ marginLeft: "5px" }}
        >
          <FontAwesomeIcon icon={faGitlab} />
        </a>
        <a
          href="https://github.com/r-portas"
          target="_blank"
          rel="noreferrer"
          className="header-link"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://github.com/r-portas"
          target="_blank"
          rel="noreferrer"
          className="header-link"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>

      <div>
        <HeaderLink to="/posts" name="POSTS" />
        <HeaderLink to="/projects" name="PROJECTS" />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
