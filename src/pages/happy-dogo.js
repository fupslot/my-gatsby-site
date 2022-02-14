import React from "react"
import { Link } from "gatsby"
import "../css/index.css"

import { ChevronDoubleLeftIcon } from "@heroicons/react/solid"

const SSRPage = ({ serverData }) => (
    <main className="overflow-none">
        <div className="container mx-auto">
            <section className="flex flex-col space-y-5 mt-8 p-8 border shadow-md border-gray-100 rounded-md">
                <h1 className="text-4xl text-center mb-4">Happy Dogo!!!</h1>
                <img className="rounded-md" src={serverData.message} alt="Happy Dog!" />
                <div className="flex items-center">
                    <ChevronDoubleLeftIcon className="w-4" />                    
                    <Link to="/">Back to Work!</Link>
                </div>
            </section>
        </div>
    </main>
)

export default SSRPage

export async function getServerData() {
    try {
        const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
        if (!res.ok) {
            throw new Error("Responce failed")
        }

        return {
            props: await res.json()
        }
    } catch (error) {
        return {
            status: 500,
            headres: {},
            props: {}
        }
    }
}