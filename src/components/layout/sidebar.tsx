"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Briefcase, CheckSquare, Users, MessageSquare, LogOut, Settings, TrendingUp } from "lucide-react"

export function Sidebar() {
    const pathname = usePathname()

    const links = [
        { href: "/", label: "Главная", icon: Home },
        { href: "/topics", label: "Топики", icon: Briefcase },
        { href: "/tasks", label: "Задачи", icon: CheckSquare },
        { href: "/clients", label: "Клиенты", icon: Users },
        { href: "/chats", label: "Чаты", icon: MessageSquare },
        { href: "/analytics", label: "Аналитика", icon: TrendingUp },
    ]

    return (
        <div className="hidden h-screen w-64 flex-col border-r border-gray-200 bg-white md:flex">
            <div className="flex h-16 shrink-0 items-center px-6">
                <span className="text-xl font-bold tracking-tight text-gray-900">CRM OS</span>
            </div>

            <div className="flex flex-1 flex-col justify-between overflow-y-auto p-4">
                <nav className="flex flex-col gap-1">
                    {links.map((link) => {
                        const Icon = link.icon
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                )}
                            >
                                <Icon className="h-5 w-5" />
                                {link.label}
                            </Link>
                        )
                    })}
                </nav>

                <nav className="flex flex-col gap-1 pt-4">
                    <Link
                        href="/settings"
                        className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                    >
                        <Settings className="h-5 w-5" />
                        Settings
                        Настройки
                    </Link>
                    <button className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-red-50 hover:text-red-600">
                        <LogOut className="h-5 w-5" />
                        Выход
                    </button>
                </nav>
            </div>
        </div>
    )
}
