import React from "react"
import { css } from "@emotion/core"
import PropTypes from "prop-types"

const ProjectTag = ({ children }) => {
  return (
    <span
      css={css`
        background-color: #bee3f8;

        border-radius: 0.35rem;
        margin-right: 0.5rem;
        padding: 0.15rem 0.3rem;

        font-size: 0.8rem;
        font-weight: 600;
        color: #2c5282;

        &:last-of-type {
          margin-right: 0;
        }
      `}
    >
      {children}
    </span>
  )
}

ProjectTag.propTypes = {
  children: PropTypes.node,
}

export default ProjectTag
