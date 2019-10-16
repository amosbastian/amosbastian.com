import React from "react"
import Layout from "./layout"
import { ThemeProvider } from "../hooks/use-theme"
import PropTypes from "prop-types"
import Header from "./header"
import { useStaticQuery, graphql } from "gatsby"

const ThemedLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <ThemeProvider>
      <Header siteTitle={data.site.siteMetadata.title} />

      <Layout>{children}</Layout>
    </ThemeProvider>
  )
}

ThemedLayout.propTypes = {
  children: PropTypes.node,
}

export default ThemedLayout
