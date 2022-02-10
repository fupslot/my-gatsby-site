import React from "react"
import { container } from "./Layout.module.css"

function Layout(props) {
    return (
        <section className={container}>{props.children}</section>
    )
}

export default Layout