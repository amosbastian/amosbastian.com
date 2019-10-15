import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import Project from "../components/project"

const projects = [
  {
    id: 1,
    name: "FPL",
    description: "A Python package for the Fantasy Premier League API.",
    image: "fpl.png",
    github: "https://github.com/amosbastian/fpl",
  },
  {
    id: 2,
    name: "Understat",
    description: "A Python package for the website https://understat.com/",
    image: "understat.png",
    github: "https://github.com/amosbastian/understat",
  },
  {
    id: 3,
    name: "Utopian.rocks",
    description: "A web application built for Utopian.io with Flask.",
    image: "utopian_rocks.png",
    github: "https://github.com/amosbastian/utopian.rocks",
  },
  {
    id: 4,
    name: "FPL Bot",
    description: "A bot made for the subreddit /r/FantasyPL.",
    image: "reddit_bot.png",
    github: "https://github.com/amosbastian/FPLbot",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1
      css={css`
        font-size: 3rem;
        margin-bottom: 2rem;
      `}
    >
      Hi, I&apos;m Amos
    </h1>
    <p>
      I am a full stack software engineer currenly living in Lisbon. My
      favourite technologies that I use daily are Python and React and I love
      football!
    </p>
    <div>
      <span>G</span>
      <span>L</span>
    </div>
    <Section header="Open Source Projects">
      {projects.map(project => (
        <Project key={project.id} project={project}></Project>
      ))}
    </Section>
  </Layout>
)

export default IndexPage
