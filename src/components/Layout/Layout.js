import React from "react"
import SEO from "../../components/SEO"

function Layout({ post, children }) {
    return (
        <>
            <SEO post={post} />
            <section class="container mx-auto px-4">{children}</section>
        </>
    )
}

export default Layout