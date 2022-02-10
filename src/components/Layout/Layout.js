import React from "react"
import { container } from "./Layout.module.css"

function Layout(props) {
    return (
        <section class="container mx-auto px-4">{props.children}</section>
    )
}

export default Layout