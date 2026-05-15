import React, { Suspense } from "react"

const Products = React.lazy(() => import("products/Products"))
const AuthApp = React.lazy(() => import("auth/AuthApp"))
const CartApp = React.lazy(() => import("cart/CartApp"))
const ProfileApp = React.lazy(() => import("profile/ProfileApp"))

export default function App() {
    return (
        <div className="app-shell">
            <section className="app-hero">
                <div className="hero-title">
                    <span className="hero-badge">Demo de Estudo</span>
                    <h1>Microfrontends em prática: autenticação, catálogo, carrinho e perfil</h1>
                </div>
                <p>Uma aplicação de aprendizado que demonstra como fragmentar um front-end em partes independentes, mantendo um fluxo simples, claro e funcional.</p>
                <div className="hero-note">
                    Cada microfrontend roda de maneira isolada, mas compartilha estado e eventos para construir uma experiência unificada.
                </div>
            </section>

            <div className="app-grid">
                <Suspense fallback={<div className="mfe-card">Carregando autenticação...</div>}>
                    <AuthApp />
                </Suspense>

                <Suspense fallback={<div className="mfe-card">Carregando perfil...</div>}>
                    <ProfileApp />
                </Suspense>

                <Suspense fallback={<div className="mfe-card">Carregando produtos...</div>}>
                    <Products />
                </Suspense>

                <Suspense fallback={<div className="mfe-card">Carregando carrinho...</div>}>
                    <CartApp />
                </Suspense>
            </div>
        </div>
    )
}
