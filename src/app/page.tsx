import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Clock, CheckCircle2 } from "lucide-react"

const mockOverdue = [
    { id: "1", title: "Завершить контракт по меди", topic: "Медь LME Китай", deadline: "Вчера", assignees: ["Anar", "admin"] }
]

const mockToday = [
    { id: "2", title: "Позвонить логистам по ценам", topic: "Продажа трансформаторов", deadline: "Сегодня 16:00", assignees: ["Ram"] },
    { id: "3", title: "Обзор отчета за 3 квартал", topic: "Внутренний", deadline: "Сегодня 18:00", assignees: ["Alik", "Magel"] }
]

const mockActive = [
    { id: "4", title: "Подготовить условия медиации", topic: "Медиативные сделки", deadline: "Завтра", assignees: ["Smit"] }
]

export default function Home() {
    return (
        <div className="flex flex-col gap-8 p-6 md:p-10">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Дашборд</h1>
                    <p className="text-gray-500">С возвращением. Вот обзор работы вашей команды.</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="font-bold">A</span>
                </div>
            </div>

            {mockOverdue.length > 0 && (
                <section>
                    <div className="mb-4 flex items-center gap-2 text-red-600">
                        <AlertCircle className="h-5 w-5" />
                        <h2 className="text-lg font-semibold">Проблемные задачи</h2>
                        <Badge variant="destructive" className="ml-2">{mockOverdue.length}</Badge>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {mockOverdue.map(task => (
                            <TaskCard key={task.id} task={task} isOverdue />
                        ))}
                    </div>
                </section>
            )}

            <section>
                <div className="mb-4 flex items-center gap-2 text-blue-600">
                    <Clock className="h-5 w-5" />
                    <h2 className="text-lg font-semibold text-gray-900">На сегодня</h2>
                    <Badge variant="secondary" className="ml-2">{mockToday.length}</Badge>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {mockToday.map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
            </section>

            <section>
                <div className="mb-4 flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="h-5 w-5" />
                    <h2 className="text-lg font-semibold text-gray-900">Активные задачи</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {mockActive.map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
            </section>
        </div>
    )
}

function TaskCard({ task, isOverdue = false }: { task: any; isOverdue?: boolean }) {
    return (
        <Card className="transition-all hover:shadow-lg">
            <CardHeader className="pb-3 text-left">
                <div className="flex items-start justify-between">
                    <Badge variant={isOverdue ? "destructive" : "outline"} className="mb-2">
                        {task.topic}
                    </Badge>
                </div>
                <CardTitle className="text-base">{task.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between text-sm">
                    <div className={`flex items-center gap-1.5 font-medium ${isOverdue ? "text-red-600" : "text-gray-500"}`}>
                        <Clock className="h-4 w-4" />
                        {task.deadline}
                    </div>
                    <div className="flex -space-x-2">
                        {task.assignees.map((assignee: string, i: number) => (
                            <div
                                key={i}
                                className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-xs font-medium"
                                title={assignee}
                            >
                                {assignee.charAt(0)}
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
