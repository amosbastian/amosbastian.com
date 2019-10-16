import React from "react"
import { css } from "@emotion/core"
import { SocialIcon } from "react-social-icons"

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
      <span>
        <SocialIcon
          style={{ height: 25, width: 25 }}
          bgColor="#718096"
          url="https://github.com/amosbastian/amosbastian.me"
        ></SocialIcon>
      </span>
    </div>
  </footer>
)

export default Footer
