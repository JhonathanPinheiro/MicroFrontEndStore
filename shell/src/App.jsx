import React, { Suspense } from "react"

const Products = React.lazy(() => import("products/Products"))

export default function App() {
    return (
        <div>
            <h1>Microfrontend Store</h1>

            <p>Shell application running</p>

            <Suspense fallback={<div>Loading...</div>}>
                <Products />
            </Suspense>
        </div>
    )
}