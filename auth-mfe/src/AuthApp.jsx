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
    <div className="mfe-card">
      <span className="card-label">Autenticação</span>
      <h2>Fluxo de login</h2>
      {user ? (
        <>
          <p className="card-text">Usuário autenticado e estado compartilhado entre todos os microfrontends.</p>
          <div className="profile-row">
            <p className="profile-label">Conectado como</p>
            <p className="profile-value">{user.name}</p>
          </div>
          <div className="profile-row">
            <p className="profile-label">Função</p>
            <p className="profile-value">{user.role}</p>
          </div>
        </>
      ) : (
        <>
          <p className="card-text">Clique no botão para simular um login e liberar as ações do carrinho e do perfil.</p>
          <button className="btn btn-primary" onClick={handleLogin}>Fazer login</button>
        </>
      )}
    </div>
  )
}
