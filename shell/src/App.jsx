import React, { Suspense } from "react"

const Products = React.lazy(() => import("products/Products"))
const AuthApp = React.lazy(() => import("auth/AuthApp"))
const CartApp = React.lazy(() => import("cart/CartApp"))
const ProfileApp = React.lazy(() => import("profile/ProfileApp"))

export default function App() {
    return (
        <div>
            <h1>Microfrontend Store</h1>

            <p>Shell application running</p>

            <Suspense fallback={<div>Loading...</div>}>
                <AuthApp />
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <ProfileApp />
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <Products />
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <CartApp />
            </Suspense>
        </div>
    )
}