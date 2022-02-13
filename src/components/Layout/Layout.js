import React from "react"
import Seo from "../../components/SEO"


function Layout({ post, children }) {
    return (
        <>
            <Seo post={post} />
            <section className="container mx-auto px-4">{children}</section>
        </>
    )
}

export default Layout