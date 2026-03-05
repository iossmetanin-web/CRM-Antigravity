import { create } from 'zustand'

interface User {
    id: string
    name: string
    role: 'admin' | 'user'
    avatar_url?: string
}

interface AppState {
    user: User | null
    setUser: (user: User | null) => void
    isLoading: boolean
    setLoading: (loading: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
    user: {
        id: "dummy-user",
        name: "Admin",
        role: "admin",
    }, // Pre-logged in for early dev testing
    setUser: (user) => set({ user }),
    isLoading: false,
    setLoading: (isLoading) => set({ isLoading }),
}))
