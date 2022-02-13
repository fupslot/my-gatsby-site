import React from "react"
import { Link } from "gatsby"

const Menu = () => {
    return (
    <nav className="flex justify-between py-4">
        <div className="">
            <Link to="/">
            <h3 className="text-2xl">Safe Space</h3>
            </Link>
        </div>
        <div className="flex justify-evenly items-scenter space-x-2">
            <div className="flex px-4 py-2 bg-pink-200 rounded-md hover:bg-pink-300 hover:text-pink-100 text-pink-700 shadow-md transition-colors duration-100">
                <Link to="/product">Product</Link>
            </div>
            {/* <div className="flex justify-center px-4 py-2 bg-pink-200 rounded-md hover:bg-pink-300 hover:text-pink-100 text-pink-700 shadow-md transition-colors duration-100">
                <Link to="/about">About</Link>
            </div> */}
        </div>
        <div />
    </nav>
    )
}

export default Menu