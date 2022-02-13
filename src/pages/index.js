import * as React from "react"
// import {Link} from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import "../css/index.css"
import Layout from "../components/Layout/Layout"
import Menu from "../components/Menu"
import { graphql } from "gatsby"
import Img from "gatsby-image"

// markup
const IndexPage = ({ data }) => {
  const { html } = data.markdownRemark
  const { frontmatter } = data.markdownRemark

  return (
    <main className="bg-pink-50">
      <Layout post={frontmatter}>
        <Menu />
        <div>
          {/* <Img fluid={frontmatter.featured.childImageSharp.fluid} /> */}
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
    }
  }
}

`

export default IndexPage
