import React from "react"
import { useGlobalStore } from "shell/store"

export default function Profile() {
  const user = useGlobalStore(state => state.user)
  const logout = useGlobalStore(state => state.logout)

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="mfe-card">
      <span className="card-label">Perfil</span>
      <h2>Informações do usuário</h2>
      {user ? (
        <>
          <p className="card-text">O perfil reflete o estado global compartilhado entre todos os microfrontends.</p>
          <div className="profile-row">
            <p className="profile-label">Nome</p>
            <p className="profile-value">{user.name}</p>
          </div>
          <div className="profile-row">
            <p className="profile-label">Função</p>
            <p className="profile-value">{user.role}</p>
          </div>
          <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p className="empty-state">Faça login para visualizar seu perfil.</p>
      )}
    </div>
  )
}
