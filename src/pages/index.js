import * as React from "react"
import {Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../css/index.css"
import Layout from "../components/Layout/Layout"


// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
        <h3 class="text-2xl mt-10">Cloud Private Spaces</h3>
        <p>
          Coud Private Spaces (CPS) is an attempt to rethink the idea of private networks 
          in the cloud. Explore new trends in Software Define Perimeter architecture and 
          build tools for Zero Trust Application Access
        </p>
      </Layout>
    </main>
  )
}

export default IndexPage
