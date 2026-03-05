"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, CheckCircle2, AlertCircle, Clock, Award } from "lucide-react"

const teamStats = [
    { name: "Alik", total: 45, completed: 42, overdue: 0, index: 93 },
    { name: "Admin", total: 112, completed: 100, overdue: 2, index: 89 },
    { name: "Anar", total: 34, completed: 28, overdue: 1, index: 82 },
    { name: "Smit", total: 56, completed: 40, overdue: 5, index: 71 },
    { name: "Magel", total: 22, completed: 14, overdue: 3, index: 63 },
    { name: "Ram", total: 18, completed: 10, overdue: 4, index: 55 },
]

export default function AnalyticsPage() {
    return (
        <div className="flex flex-col gap-6 p-6 md:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Аналитика</h1>
                    <p className="text-gray-500">Мониторинг дисциплины команды и показателей эффективности.</p>
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-gradient-to-br from-blue-50 to-white">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium text-blue-600">Всего задач</p>
                            <TrendingUp className="h-4 w-4 text-blue-600" />
                        </div>
                        <p className="text-3xl font-bold">287</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-white">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium text-green-600">Выполнено</p>
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-3xl font-bold">234</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-red-50 to-white">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium text-red-600">Всего просрочено</p>
                            <AlertCircle className="h-4 w-4 text-red-600" />
                        </div>
                        <p className="text-3xl font-bold">15</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-50 to-white">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium text-purple-600">Ср. дисциплина</p>
                            <Award className="h-4 w-4 text-purple-600" />
                        </div>
                        <p className="text-3xl font-bold">75.5%</p>
                    </CardContent>
                </Card>
            </div>

            <h2 className="text-xl font-bold mt-4">Рейтинг дисциплины команды</h2>
            <Card>
                <CardContent className="p-0">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-4">Ранг</th>
                                    <th className="px-6 py-4">Пользователь</th>
                                    <th className="px-6 py-4 hidden sm:table-cell">Всего задач</th>
                                    <th className="px-6 py-4 hidden sm:table-cell">Выполнено</th>
                                    <th className="px-6 py-4">Просрочено</th>
                                    <th className="px-6 py-4">Индекс дисциплины</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teamStats.map((stat, index) => (
                                    <tr key={stat.name} className="bg-white border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium">
                                            {index === 0 ? <span className="text-yellow-500 text-lg">🥇</span> :
                                                index === 1 ? <span className="text-gray-400 text-lg">🥈</span> :
                                                    index === 2 ? <span className="text-amber-600 text-lg">🥉</span> :
                                                        `#${index + 1}`}
                                        </td>
                                        <td className="px-6 py-4 font-semibold">{stat.name}</td>
                                        <td className="px-6 py-4 hidden sm:table-cell">{stat.total}</td>
                                        <td className="px-6 py-4 hidden sm:table-cell text-green-600">{stat.completed}</td>
                                        <td className="px-6 py-4 text-red-600">{stat.overdue}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 w-full max-w-[120px]">
                                                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full ${stat.index > 80 ? 'bg-green-500' : stat.index > 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                                        style={{ width: `${stat.index}%` }}
                                                    />
                                                </div>
                                                <span className="font-medium text-xs w-8 text-right">{stat.index}%</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
