"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, CheckCircle2, Clock, AlertCircle } from "lucide-react"

const mockTasks = [
    { id: "1", title: "Завершить контракт по меди", topic: "Медь LME Китай", deadline: "Вчера", status: "просрочено", priority: "высокий" },
    { id: "2", title: "Позвонить логистам по ценам", topic: "Продажа трансформаторов", deadline: "Сегодня 16:00", status: "в_процессе", priority: "средний" },
    { id: "3", title: "Обзор отчета за 3 квартал", topic: "Внутренний", deadline: "Сегодня 18:00", status: "новая", priority: "низкий" },
    { id: "4", title: "Подготовить условия медиации", topic: "Медиативные сделки", deadline: "Завтра", status: "новая", priority: "высокий" },
]

export default function TasksPage() {
    return (
        <div className="flex flex-col gap-6 p-6 md:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Задачи</h1>
                    <p className="text-gray-500">Отслеживайте дедлайны, назначения и результаты.</p>
                </div>
                <Button className="gap-2 sm:self-auto self-start rounded-full">
                    <Plus className="h-4 w-4" />
                    Новая задача
                </Button>
            </div>

            <div className="flex gap-2 pb-2 overflow-x-auto">
                <Badge variant="default" className="px-4 py-1.5 cursor-pointer text-sm rounded-full">Все задачи</Badge>
                <Badge variant="outline" className="px-4 py-1.5 cursor-pointer text-sm rounded-full bg-white">Мои задачи</Badge>
                <Badge variant="outline" className="px-4 py-1.5 cursor-pointer text-sm rounded-full text-red-600 bg-red-50 border-red-200">Просрочено</Badge>
                <Badge variant="outline" className="px-4 py-1.5 cursor-pointer text-sm rounded-full bg-white">Выполнено</Badge>
            </div>

            <div className="flex flex-col gap-3">
                {mockTasks.map((task) => (
                    <Card key={task.id} className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 transition-all hover:shadow-md cursor-pointer">
                        <div className="flex items-start gap-4">
                            <button className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 transition-colors hover:border-primary">
                                <CheckCircle2 className="h-4 w-4 text-transparent opacity-0 transition-opacity" />
                            </button>

                            <div>
                                <h3 className="font-semibold text-gray-900">{task.title}</h3>
                                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                    <Badge variant="secondary" className="font-normal text-xs">{task.topic}</Badge>
                                    <span className="flex items-center gap-1 text-xs">
                                        <Clock className="h-3 w-3" />
                                        {task.deadline}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 sm:mt-0 flex items-center justify-end gap-3 pl-10 sm:pl-0">
                            {task.status === 'overdue' && (
                                <Badge variant="destructive" className="flex items-center gap-1">
                                    <AlertCircle className="h-3 w-3" />
                                    Просрочено
                                </Badge>
                            )}
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium">
                                S
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
