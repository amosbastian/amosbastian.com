import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Section from "../components/section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1
      css={css`
        font-size: 3rem;
        margin-bottom: 2rem;
      `}
    >
      Hi, I'm Amos
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
    <Section header="Projects" slug="projects">
      Projects here...
    </Section>
  </Layout>
)

export default IndexPage
