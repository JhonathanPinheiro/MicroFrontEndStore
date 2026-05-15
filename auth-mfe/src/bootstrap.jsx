import React from "react"
import { createRoot } from "react-dom/client"
import AuthApp from "./AuthApp"

const root = createRoot(document.getElementById("root"))

root.render(<AuthApp />)