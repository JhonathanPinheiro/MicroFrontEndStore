import React from "react"
import { useGlobalStore } from "shell/store"

export default function Profile() {
  const user = useGlobalStore(state => state.user)
  const logout = useGlobalStore(state => state.logout)

  const handleLogout = () => {
    logout()
  }

  return (

    <div style={{ border: "2px solid blue", padding: 20 }}>

      <h2>Profile Microfrontend</h2>

      {user ? (

        <div>
          <p>Name: {user.name}</p>
          <p>Role: {user.role}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (

        <p>Please log in to see your profile</p>
      )}

    </div>

  )

}