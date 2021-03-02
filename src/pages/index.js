import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/react"

import "../styles/global.css"

export default () => {
  const { about } = useStaticQuery(graphql`
    query {
      about: markdownRemark(fileAbsolutePath: { regex: "/data/about.md/" }) {
        html
      }
    }
  `)

  return (
    <>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          min-height: 80vh;
          max-width: 650px;
          margin: 2.85rem auto 0.65rem;
          padding: 0px 1.0875rem 1.45rem;
          }
        `}
      >
        <section dangerouslySetInnerHTML={{ __html: about.html }} />
      </div>
    </>
  )
}
