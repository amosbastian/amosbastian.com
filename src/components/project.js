import React from "react"
import { css } from "@emotion/core"
import PropTypes from "prop-types"
import Image from "./image"
import GitHubButton from "react-github-btn"
import mq from "../utilities/emotion"
import ProjectTag from "./project-tag"

const Project = ({ project }) => {
  return (
    <div
      css={css`
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
        margin: 0 -1rem;
        transition: 0.3s all;

        ${mq("sm")} {
          background-color: #718096;
          margin: 0;
          padding: 1rem;
          z-index: 10;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

          & h4 {
            color: #1a202c;
          }
        }
        &:hover {
          background-color: #cbd5e0;
        }
      `}
    >
      <div
        css={css`
          display: grid;
          grid-template-columns: 40px 2fr auto;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        `}
      >
        <div
          css={css`
            display: flex;
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

      <div
        css={css`
          display: none;
          color: #2d3748;

          ${mq("sm")} {
            margin-top: 1rem;
            display: grid;
            gap: 1rem;
          }
        `}
      >
        {project.description}

        <div
          css={css`
            display: flex;
            flex-direction: row;
            align-items: baseline;
          `}
        >
          {project.tags.map(tag => (
            <ProjectTag key={`${project.id}-${tag}`}>{tag}</ProjectTag>
          ))}
        </div>
      </div>
    </div>
  )
}

Project.propTypes = {
  project: PropTypes.object,
}

export default Project
