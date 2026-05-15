import React from "react"
import { useGlobalStore } from "shell/store"

export default function AuthApp() {
  const user = useGlobalStore(state => state.user)
  const login = useGlobalStore(state => state.login)

  const handleLogin = () => {
    login({
      id: 1,
      name: "Jhonathan Pinheiro",
      role: "user"
    })
  }

  return (

    <div style={{ border: "2px solid blue", padding: 20 }}>

      <h2>Auth Microfrontend</h2>

      {user ? (

        <p>Welcome, {user.name}!</p>
      ) : (

        <button onClick={handleLogin}>Login</button>
      )}

    </div>

  )

}