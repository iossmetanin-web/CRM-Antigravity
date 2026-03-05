"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Briefcase, CheckSquare, Users, MessageSquare, TrendingUp } from "lucide-react"

export function BottomNav() {
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
        <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-gray-200 bg-white/80 pb-px backdrop-blur-xl md:hidden">
            {links.map((link) => {
                const Icon = link.icon
                const isActive = pathname === link.href
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "flex flex-col items-center justify-center gap-1 overflow-hidden px-2 py-1 text-xs font-medium transition-colors",
                            isActive ? "text-primary" : "text-gray-500 hover:text-gray-900"
                        )}
                    >
                        <Icon className="h-6 w-6" strokeWidth={isActive ? 2.5 : 2} />
                        <span className="scale-90">{link.label}</span>
                    </Link>
                )
            })}
        </div>
    )
}
