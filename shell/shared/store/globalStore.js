import { create } from "zustand"

export const useGlobalStore = create((set) => ({
  user: null,
  theme: "light",

  login: (user) =>
    set(() => ({
      user
    })),

  logout: () =>
    set(() => ({
      user: null
    })),

  setTheme: (theme) =>
    set(() => ({
      theme
    }))
}))