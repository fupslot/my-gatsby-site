import * as React from "react"

import "../css/index.css"
import { graphql } from "gatsby"
import Menu from "../components/Menu"

const Feature = ({ content }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <img className="max-w-xs" src={content.icon} alt={content.headline} title={content.headline}/>
      <h2 className="text-lg text-center font-bold">{content.headline}</h2>
      <h3 className="text-center">{content.description}</h3>
    </div>
  )
}

// markup
const IndexPage = ({ data }) => {
  const page = data.butterPage
  const vpn = (page.vpn || [])[0]

  return (
    <main className="h-screen bg-green-50">
    <section className="container mx-auto">
      <Menu />
      <div className="pt-20 pb-10">
        <h3 className="text-4xl text-center text-blue-800 font-bold">
          {page.headline}
        </h3>
      </div>
      <div className="bg-white rounded-md shadow-md p-10 overflow-auto">
        <h2 className="text-3xl text-center">{vpn.fields.headline}</h2>
        <h3 className="text-xl text-center my-4">{vpn.fields.subheadline}</h3>
        <div className="flex flex-wrap md:flex-nowrap space-x-4">
          {Array.isArray(vpn.fields.features) && vpn.fields.features.map((data, i) => {
            return <Feature key={i} content={data} />
          })}
        </div>
      </div>
    </section>
    </main>
  )
}

export const query = graphql`
query RootPage {
  butterPage(slug: {eq: "private-cloud-spaces"}) {
    headline
    seo_title
    seo_description
    seo_keywords
    customer_logo
    vpn {
      type
      fields {
        headline
        subheadline
        features {
          description
          headline
          icon
        }
      }
    }
  }
}
`

// export const query = graphql`
// query RootPage {
//   markdownRemark(frontmatter: {slug: {eq: "root.page"}}) {
//     html
//     frontmatter {
//       date
//       keywords
//       title
//       slug
//       heroImg {
//         childImageSharp {
//           gatsbyImageData
//         }
//       }
//     }
//   }
// }
// `

export default IndexPage
