import React from "react"
import PropTypes from "prop-types"
import Project from "./project"
import { css } from "@emotion/core"
import mq from "../utilities/emotion"

const ProjectList = ({ projects }) => {
  const projectComponents = projects.map(project => (
    <Project key={project.id} project={project}></Project>
  ))
  return (
    <div
      css={css`
        display: grid;
        gap: 0.5rem;

        ${mq("sm")} {
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
      `}
    >
      {projectComponents}
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array,
}

export default ProjectList
