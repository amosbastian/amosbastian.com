import { Link } from "gatsby"
import styled from "@emotion/styled"
import React from "react"
import { css } from "@emotion/core"
import { useThemeProvider } from "../hooks/use-theme"
import { useTheme } from "emotion-theming"

const NavLink = styled(Link)`
  color: ${props => props.theme.textColour};
  font-size: 1rem;
  font-weight: normal;
  line-height: 1;
  text-decoration: none;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  transition: 0.3s all;

  &.current-page {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
    padding-right: 0;
  }
`

const Header = () => {
  const themeState = useThemeProvider()
  const theme = useTheme()

  return (
    <header
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 69;
        background-color: ${theme.background};
      `}
    >
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
          <NavLink activeClassName="current-page" theme={theme} to="/">
            Amos
          </NavLink>
        </span>

        <div
          css={css`
            display: flex;
            flex-direction: row;
            align-items: baseline;
          `}
        >
          <nav>
            <NavLink activeClassName="current-page" theme={theme} to="/about">
              About
            </NavLink>
            {/* <NavLink activeClassName="current-page" to="/projects">
          Projects
        </NavLink> */}
          </nav>

          <button
            css={css`
              margin-left: 0.5rem;
            `}
            onClick={() => themeState.toggle()}
          >
            {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
