import React from "react"
import { css } from "@emotion/core"

const Footer = () => (
  <footer>
    <div
      css={css`
        max-width: 90vw;
        width: 800px;
        margin: 0 auto;
        padding: 1rem 0;
        display: flex;
        align-items: baseline;
        justify-content: center;
      `}
    >
      <span>Footer</span>
    </div>
  </footer>
)

export default Footer
