import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
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

const LinkIcon = ({ icon, href, ariaLabel }) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noreferrer"
      className="header-link header-profile-icon"
    >
      <FontAwesomeIcon
        icon={icon}
        style={{ height: "1.5rem", width: "1.5rem" }}
      />
    </a>
  )
}

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <div className="header-container">
        <div className="header-profile">
          <StaticImage
            src="../images/roy-face-round.png"
            alt="Roy Portas"
            style={{ marginRight: "1rem" }}
          />
          <Link
            to="/"
            style={{
              textDecoration: "none",
              fontSize: "2rem",
            }}
          >
            Roy Portas
          </Link>

          <LinkIcon
            href="https://github.com/r-portas"
            icon={faGithub}
            ariaLabel="Github"
          />
          <LinkIcon
            href="https://gitlab.com/royportas"
            icon={faGitlab}
            ariaLabel="Gitlab"
          />
          <LinkIcon
            href="https://gitlab.com/royportas"
            icon={faTwitter}
            ariaLabel="Twitter"
          />
          <LinkIcon
            href="https://gitlab.com/royportas"
            icon={faLinkedin}
            ariaLabel="LinkedIn"
          />
        </div>

        <div>
          <HeaderLink to="/posts" name="POSTS" />
          <HeaderLink to="/projects" name="PROJECTS" />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
