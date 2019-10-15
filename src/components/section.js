import React from "react"
import { css } from "@emotion/core"

const ProjectSection = ({ children, header, slug }) => {
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
          align-items: flex-end;
        `}
      >
        <h2>{header}</h2>
        <button>View All</button>
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

export default ProjectSection
