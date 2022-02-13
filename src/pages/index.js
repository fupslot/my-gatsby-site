import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "../css/index.css"
import Layout from "../components/Layout/Layout"
import Menu from "../components/Menu"
import { graphql } from "gatsby"

// markup
const IndexPage = ({ data }) => {
  const { html } = data.markdownRemark
  const { frontmatter } = data.markdownRemark

  const image = getImage(frontmatter.featured)

  return (
    <main className="bg-pink-50">
      <Layout post={frontmatter}>
        <Menu />
        <div>
          <GatsbyImage image={image} />
          <h3 class="text-2xl mt-10">{frontmatter.title}</h3>
          <p class="my-8 p-4 bg-red-100" dangerouslySetInnerHTML={{__html: html}} />
        </div>
      </Layout>
    </main>
  )
}

export const query = graphql`
query RootPage {
  markdownRemark(frontmatter: {slug: {eq: "root.page"}}) {
    html
    frontmatter {
      date
      keywords
      title
      slug
      featured {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
}
`

export default IndexPage
