import * as React from "react"
import {Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"


// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
        <StaticImage
          alt="Image"
          src="../images/icon.png"/>
        <Link to="/about-us">About Us</Link>
      </Layout>
    </main>
  )
}

export default IndexPage
