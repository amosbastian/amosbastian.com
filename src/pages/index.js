import React from "react"
import { css } from "@emotion/core"
import ThemedLayout from "../components/themed-layout"
import SEO from "../components/seo"
import Section from "../components/section"
import ProjectList from "../components/project-list"
import Image from "../components/image"
import mq from "../utilities/emotion"
import { SocialIcon } from "react-social-icons"
import { useThemeProvider } from "../hooks/use-theme"

const projects = [
  {
    id: 1,
    name: "FPL",
    description: "A Python package for the Fantasy Premier League API.",
    image: "fpl.png",
    github: "https://github.com/amosbastian/fpl",
    tags: ["Python", "aiohttp", "asyncio"],
  },
  {
    id: 2,
    name: "Understat",
    description: `A Python package for the website https://understat.com/.`,
    image: "understat.png",
    github: "https://github.com/amosbastian/understat",
    tags: ["Python", "aiohttp", "asyncio"],
  },
  {
    id: 3,
    name: "Utopian.rocks",
    description: "A web application built for Utopian.io with Flask.",
    image: "utopian_rocks.png",
    github: "https://github.com/amosbastian/utopian.rocks",
    tags: ["Flask", "JavaScript", "SCSS"],
  },
  {
    id: 4,
    name: "FPL Bot",
    description: "A bot made for the subreddit /r/FantasyPL.",
    image: "reddit_bot.png",
    github: "https://github.com/amosbastian/FPLbot",
    tags: ["Python", "PRAW", "MongoDB"],
  },
]

const IndexPage = () => {
  const themeState = useThemeProvider()
  return (
    <ThemedLayout>
      <SEO title="Home" />
      <h1
        css={css`
          font-size: 3rem;
          margin-bottom: 2rem;
        `}
      >
        Hi, I&apos;m Amos
      </h1>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <div>
          <p
            css={css`
              ${mq("sm")} {
                max-width: 65ch;
              }
              margin-right: 1rem;
            `}
          >
            I am a full stack software engineer who is currently living in
            Lisbon. My favourite technologies that I use daily are Python and
            React. I also love football if you couldn&apos;t tell!
          </p>
          <div
            css={css`
              display: flex;
              margin-top: 1rem;
            `}
          >
            <SocialIcon
              style={{ height: 25, width: 25, marginRight: 10 }}
              bgColor="#718096"
              url="https://github.com/amosbastian"
            />
            <SocialIcon
              style={{ height: 25, width: 25, marginRight: 10 }}
              url="https://linkedin.com/in/amosbastian/"
            />
            <SocialIcon
              style={{ height: 25, width: 25, marginRight: 10 }}
              url="mailto:amosbastian@gmail.com"
            />
          </div>
        </div>
        <div
          css={css`
            display: none;
            width: 200px;
            ${mq("sm")} {
              display: inline-block;
            }
          `}
        >
          <Image src="profile_picture.png"></Image>
        </div>
      </div>

      <Section header="Projects">
        <ProjectList projects={projects}></ProjectList>
      </Section>
    </ThemedLayout>
  )
}

export default IndexPage
