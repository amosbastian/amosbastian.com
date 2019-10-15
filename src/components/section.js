import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const Section = ({ children, header, slug }) => {
  return (
    <section
      css={css`
        margin-top: 2rem;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        `}
      >
        <h2>{header}</h2>
        {slug ? (
          <Link to={`/${slug}`}>
            <button onClick={() => {}}>View All</button>
          </Link>
        ) : null}
      </div>
      <section
        css={css`
          margin-top: 2rem;
        `}
      >
        {children}
      </section>
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string,
  slug: PropTypes.string,
}

export default Section
