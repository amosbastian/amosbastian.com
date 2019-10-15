import React from "react"
import { css } from "@emotion/core"
import PropTypes from "prop-types"
import Image from "./image"
import GitHubButton from "react-github-btn"

const Project = ({ project }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 50px 2fr auto;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 1rem;
        margin: 0 -1rem;
        border-radius: 0.25rem;
        gap: 0.5rem;

        &:hover {
          background-color: #4a5568;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          css={css`
            width: 2em;
            height: 2rem;
          `}
        >
          <Image src={project.image}></Image>
        </div>
      </div>
      <div>
        <h4>{project.name}</h4>
      </div>
      <div
        css={css`
          & span {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      >
        <GitHubButton
          href={project.github}
          data-icon="star"
          data-size="large"
          data-show-count="true"
        >
          Star
        </GitHubButton>
      </div>
    </div>
  )
}

Project.propTypes = {
  project: PropTypes.object,
}

export default Project
