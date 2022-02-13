import * as React from "react"

import "../css/index.css"
import Layout from "../components/Layout/Layout"
import Menu from "../components/Menu"
import { graphql } from "gatsby"

// markup
const ProductPage = ({ data }) => {
  const { html } = data.markdownRemark
  const { frontmatter } = data.markdownRemark

  return (
    <main className="bg-pink-50">
      <Layout post={frontmatter}>
        <Menu />
        <div>
          <h3 className="text-2xl mt-10">{frontmatter.title}</h3>
          <p className="my-8 p-4 bg-red-100" dangerouslySetInnerHTML={{__html: html}} />
        </div>
      </Layout>
    </main>
  )
}

export const query = graphql`
query ProductPage {
  markdownRemark(frontmatter: {slug: {eq: "product.page"}}) {
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

export default ProductPage
