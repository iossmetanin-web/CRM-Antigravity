import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Briefcase, ChevronRight } from "lucide-react"
import Link from "next/link"

const mockTopics = [
    { id: "t1", title: "Медь LME Китай", status: "переговоры", type: "торговля", volume: "24,000 тонн", created_at: "2 дня назад" },
    { id: "t2", title: "Продажа трансформаторов", status: "исполнение", type: "торговля", volume: "$1.2M", created_at: "1 неделю назад" },
    { id: "t3", title: "Медиативные сделки", status: "идея", type: "медиация", volume: "TBD", created_at: "Сегодня" },
]

export default function TopicsPage() {
    return (
        <div className="flex flex-col gap-6 p-6 md:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Топики</h1>
                    <p className="text-gray-500">Управляйте вашими активными сделками, проектами и торговыми направлениями.</p>
                </div>
                <Button className="gap-2 self-start sm:self-auto rounded-full">
                    <Plus className="h-4 w-4" />
                    Новый Топик
                </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {mockTopics.map((topic) => (
                    <Link href={`/topics/${topic.id}`} key={topic.id}>
                        <Card className="group cursor-pointer transition-all hover:border-primary/50 hover:shadow-xl">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Briefcase className="h-4 w-4" />
                                    </div>
                                    <Badge variant="outline" className="capitalize">{topic.type}</Badge>
                                </div>
                                <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
                            </CardHeader>
                            <CardContent>
                                <CardTitle className="mb-2 text-lg">{topic.title}</CardTitle>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span className="font-medium text-gray-900">{topic.volume}</span>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="secondary" className="capitalize">{topic.status}</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
