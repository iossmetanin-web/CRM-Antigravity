"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, CheckCircle2, Clock, AlertCircle } from "lucide-react"

const mockTasks = [
    { id: "1", title: "Finalize Copper Contract", topic: "Copper LME China", deadline: "Yesterday", status: "overdue", priority: "high" },
    { id: "2", title: "Call Logistics for pricing", topic: "Transformer Sales", deadline: "Today 16:00", status: "in_progress", priority: "medium" },
    { id: "3", title: "Review Q3 Report", topic: "Internal", deadline: "Today 18:00", status: "new", priority: "low" },
    { id: "4", title: "Draft Mediation Terms", topic: "Mediation Deals", deadline: "Tomorrow", status: "new", priority: "high" },
]

export default function TasksPage() {
    return (
        <div className="flex flex-col gap-6 p-6 md:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Tasks</h1>
                    <p className="text-gray-500">Track deadlines, assignments, and follow up.</p>
                </div>
                <Button className="gap-2 sm:self-auto self-start rounded-full">
                    <Plus className="h-4 w-4" />
                    New Task
                </Button>
            </div>

            <div className="flex gap-2 pb-2 overflow-x-auto">
                <Badge variant="default" className="px-4 py-1.5 cursor-pointer text-sm rounded-full">All Tasks</Badge>
                <Badge variant="outline" className="px-4 py-1.5 cursor-pointer text-sm rounded-full bg-white">My Tasks</Badge>
                <Badge variant="outline" className="px-4 py-1.5 cursor-pointer text-sm rounded-full text-red-600 bg-red-50 border-red-200">Overdue</Badge>
                <Badge variant="outline" className="px-4 py-1.5 cursor-pointer text-sm rounded-full bg-white">Completed</Badge>
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
                                    Overdue
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
