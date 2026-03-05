"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAppStore } from "@/store/useAppStore"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Briefcase } from "lucide-react"

export default function LoginPage() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const setUser = useAppStore(state => state.setUser)
    const router = useRouter()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        // Simulate auth API
        setTimeout(() => {
            setUser({ id: "1", name: "Admin", role: "admin" })
            router.push("/")
        }, 1000)
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-[400px]">
                <div className="mb-8 flex flex-col items-center justify-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Briefcase className="h-8 w-8" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">CRM OS</h1>
                    <p className="text-sm text-gray-500 mt-2">Войдите, чтобы управлять вашими топиками и задачами.</p>
                </div>

                <Card className="shadow-xl shadow-gray-200/50">
                    <CardHeader>
                        <CardTitle>С возвращением</CardTitle>
                        <CardDescription>Введите ваши данные для доступа к аккаунту.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="flex flex-col gap-4">
                            {error && (
                                <div className="rounded-xl bg-red-50 p-3 text-sm text-red-600">
                                    {error}
                                </div>
                            )}

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700">Email или Логин</label>
                                <Input type="text" placeholder="admin@crm.local" defaultValue="admin" required />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-medium text-gray-700">Пароль</label>
                                    <a href="#" className="text-xs text-primary hover:underline">Забыли пароль?</a>
                                </div>
                                <Input type="password" placeholder="••••••••" defaultValue="password" required />
                            </div>

                            <Button type="submit" className="mt-2 w-full rounded-xl" disabled={loading}>
                                {loading ? "Вход..." : "Войти"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
