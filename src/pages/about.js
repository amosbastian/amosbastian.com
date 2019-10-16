import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const TextLink = styled("a")`
  border-bottom: 2px solid transparent;
  color: #81a5f8;
  text-decoration: none;
  font-weight: 600;
`

const Button = styled("a")`
  color: #5183f5;
  border: 2px solid #2161f2;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: 0.3s all;
  display: inline-block;

  &:hover {
    background-color: #000;
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>

    <p
      css={css`
        max-width: 65ch;
        margin-top: 1.5rem;
      `}
    >
      I&apos;m Amos Bastian, a 25 year old full stack software engineer who was
      born in England. I spent most of my life living in the Netherlands
      however, so I am fluent in both languages.
      <br></br>
      <br></br>
      I&apos;m very comfortable with programming languages such as{" "}
      <TextLink href="https://www.python.org/">Python</TextLink> and{" "}
      <TextLink href="https://www.javascript.com/">JavaScript</TextLink> and a
      wide range of technologies such as{" "}
      <TextLink href="https://palletsprojects.com/p/flask/">Flask</TextLink>,{" "}
      <TextLink href="https://reactjs.org/">React.js</TextLink>,{" "}
      <TextLink href="https://vuejs.org/">Vue.js</TextLink>,{" "}
      <TextLink href="https://www.mongodb.com/">MongoDB</TextLink> and{" "}
      <TextLink href="https://www.postgresql.org/">PostgreSQL</TextLink>. I love
      understanding each part of the technology stack I&apos;m using, which is
      why I&apos;m currently looking for a job as a full stack software
      engineer.
      <br></br>
      <br></br>
      Open source is something I&apos;m very passionate about. I also love
      football and so I have created multiple open source projects which combine
      the two together. My most popular project is the{" "}
      <TextLink href="https://github.com/amosbastian/fpl">
        Python package fpl
      </TextLink>{" "}
      -- go check it out!
      <br></br>
      <br></br>
      This website was created with{" "}
      <TextLink href="https://www.gatsbyjs.org">Gatsby</TextLink>, inspired by{" "}
      <TextLink href="https://www.taniarascia.com/">
        Tania Rascia&apos;s personal website
      </TextLink>{" "}
      and is sort of meant as a portfolio of my projects. I will also eventually
      add some articles that I want to write, so look forward to that!
      <br></br>
      <br></br>
      <Button href="/">Click here to see my CV!</Button>
    </p>
  </Layout>
)

export default AboutPage
