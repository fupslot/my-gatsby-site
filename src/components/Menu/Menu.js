import React from "react"
import { Link } from "gatsby"

const Menu = () => {
    return (
    <nav class="flex justify-around py-4">
        <div class="basis-1/4">
            <Link to="/">
            <h3 class="text-2xl">Safe Space</h3>
            </Link>
        </div>
        <div class="flex justify-evenly space-x-2">
            <div className="flex justify-center px-4 py-2 bg-pink-200 rounded-md hover:bg-pink-300 hover:text-pink-100 text-pink-700 shadow-md transition-colors duration-100">
                <Link to="/product">Product</Link>
            </div>
            {/* <div className="flex justify-center px-4 py-2 bg-pink-200 rounded-md hover:bg-pink-300 hover:text-pink-100 text-pink-700 shadow-md transition-colors duration-100">
                <Link to="/about">About</Link>
            </div> */}
        </div>
    </nav>
    )
}

export default Menu