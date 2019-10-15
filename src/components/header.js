import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import React from "react"
import { css } from "@emotion/core"

const NavLink = styled(Link)`
  color: #a0aec0;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1;
  text-decoration: none;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;

  &.current-page {
    color: #cbd5e0;
  }
`

const Header = () => (
  <header>
    <div
      css={css`
        max-width: 90vw;
        width: 800px;
        margin: 0 auto;
        padding: 1rem 0;
        display: flex;
        align-items: baseline;
        justify-content: space-between;
      `}
    >
      <span>
        <NavLink to="/">AB</NavLink>
      </span>

      <nav>
        <NavLink activeClassName="current-page" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="current-page" to="/projects">
          Projects
        </NavLink>
      </nav>
    </div>
  </header>
)

export default Header
