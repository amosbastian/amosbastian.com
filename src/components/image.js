import React, { useMemo } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  const match = useMemo(
    () =>
      data.allFile.nodes.find(image =>
        image.childImageSharp.fluid.src.includes(src)
      ),
    [data, src]
  )

  return <Img fluid={match.childImageSharp.fluid} fadeIn />
}

Image.propTypes = {
  src: PropTypes.string,
}

export default Image
