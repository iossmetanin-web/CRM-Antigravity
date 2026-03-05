"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Edit, Plus, Users, LayoutList, DollarSign, MessageSquare, Paperclip } from "lucide-react"
import Link from "next/link"

export default function TopicDetailsClient({ id }: { id: string }) {
    const topic = {
        id,
        title: "Copper LME China",
        type: "trading",
        status: "negotiation",
        volume: "24,000 tons",
        description: "Primary supply line for Q3 copper cathodes targeting the Chinese market with LME standard pricing + premium.",
    }

    return (
        <div className="flex flex-col gap-6 p-6 md:p-10">
            {/* Header */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Link href="/topics" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Topics
                    </Link>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{topic.title}</h1>
                            <Badge variant="outline" className="capitalize">{topic.type}</Badge>
                            <Badge variant="secondary" className="capitalize">{topic.status}</Badge>
                        </div>
                        <p className="max-w-2xl text-gray-500">{topic.description}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                            <Edit className="h-4 w-4" />
                            Edit
                        </Button>
                        <Button size="sm" className="gap-2">
                            <Plus className="h-4 w-4" />
                            Add Deal
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content Tabs */}
            <Tabs defaultValue="overview" className="mt-4 w-full">
                <TabsList className="mb-4">
                    <TabsTrigger value="overview" className="gap-2"><LayoutList className="h-4 w-4" /> Overview</TabsTrigger>
                    <TabsTrigger value="tasks" className="gap-2"><LayoutList className="h-4 w-4" /> Tasks (3)</TabsTrigger>
                    <TabsTrigger value="clients" className="gap-2"><Users className="h-4 w-4" /> Clients (2)</TabsTrigger>
                    <TabsTrigger value="deals" className="gap-2"><DollarSign className="h-4 w-4" /> Deals</TabsTrigger>
                    <TabsTrigger value="chat" className="gap-2"><MessageSquare className="h-4 w-4" /> Chat</TabsTrigger>
                    <TabsTrigger value="files" className="gap-2"><Paperclip className="h-4 w-4" /> Files</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card><CardContent className="p-6"><p className="text-sm font-medium text-gray-500">Estimated Volume</p><p className="mt-2 text-2xl font-bold">{topic.volume}</p></CardContent></Card>
                        <Card><CardContent className="p-6"><p className="text-sm font-medium text-gray-500">Active Deals</p><p className="mt-2 text-2xl font-bold">1</p></CardContent></Card>
                        <Card><CardContent className="p-6"><p className="text-sm font-medium text-gray-500">Total Profit Margin</p><p className="mt-2 text-2xl font-bold text-green-600">$42,500</p></CardContent></Card>
                        <Card><CardContent className="p-6"><p className="text-sm font-medium text-gray-500">Task Completion</p><p className="mt-2 text-2xl font-bold">66%</p></CardContent></Card>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-4">Topic Description</h3>
                        <Card><CardContent className="p-6"><p className="text-gray-700 leading-relaxed text-sm">{topic.description} Looking to secure delivery for late August. Logistics currently being quoted.</p></CardContent></Card>
                    </div>
                </TabsContent>

                <TabsContent value="tasks">
                    <div className="grid gap-3">
                        {[{ t: "Finalize Contract", s: "overdue", d: "Yesterday" }, { t: "Draft Logistics Plan", s: "in_progress", d: "Today" }, { t: "Client KYC Check", s: "completed", d: "2 days ago" }].map((task, i) => (
                            <Card key={i} className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`h-2 w-2 rounded-full ${task.s === 'overdue' ? 'bg-red-500' : task.s === 'completed' ? 'bg-green-500' : 'bg-blue-500'}`} />
                                    <div>
                                        <p className="font-medium text-sm">{task.t}</p>
                                        <p className="text-xs text-gray-500">Due {task.d}</p>
                                    </div>
                                </div>
                                <Badge variant={task.s === 'overdue' ? 'destructive' : 'secondary'} className="text-[10px] uppercase">{task.s.replace('_', ' ')}</Badge>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="clients">
                    <div className="grid gap-4 sm:grid-cols-2">
                        {["Ural Copper Ltd", "Siberian Minerals"].map((client, i) => (
                            <Card key={i} className="p-4 flex items-center gap-4">
                                <div className="h-10 w-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">{client.charAt(0)}</div>
                                <div className="flex-1"><p className="font-semibold text-sm">{client}</p><p className="text-xs text-gray-500">Primary Partner</p></div>
                                <Button variant="ghost" size="sm">View</Button>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="deals">
                    <Card>
                        <CardContent className="p-0">
                            <div className="p-6 border-b border-gray-50">
                                <div className="flex items-center justify-between">
                                    <div><h4 className="font-bold">Deal #2401-C</h4><p className="text-xs text-gray-500">Contract Phase</p></div>
                                    <Badge className="bg-blue-500 hover:bg-blue-600">Active</Badge>
                                </div>
                                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                                    <div><p className="text-gray-500 text-xs">Volume</p><p className="font-medium">12,000 tons</p></div>
                                    <div><p className="text-gray-500 text-xs">Price</p><p className="font-medium">LME + $120 premium</p></div>
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50/50"><p className="text-xs font-medium text-gray-400">CONDITIONS</p><p className="text-xs mt-1">100 percent prepayment, delivery Ex-Works</p></div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="chat">
                    <Card className="flex h-64 flex-col items-center justify-center text-center p-6 bg-gray-50/30 border-dashed">
                        <MessageSquare className="h-10 w-10 text-gray-300 mb-2" />
                        <p className="text-sm font-medium text-gray-500">Internal Topic Chat</p>
                        <p className="text-xs text-gray-400 mt-1 max-w-[200px]">Communicate with your team regarding this topic.</p>
                        <Button variant="outline" size="sm" className="mt-4 rounded-full">Open Chat</Button>
                    </Card>
                </TabsContent>

                <TabsContent value="files">
                    <div className="grid gap-2">
                        {["contract_draft_v2.pdf", "logistics_quote_july.xlsx"].map((file, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer capitalize text-sm">
                                <div className="flex items-center gap-3">
                                    <Paperclip className="h-4 w-4 text-gray-400" />
                                    {file}
                                </div>
                                <span className="text-xs text-gray-400">2.4 MB</span>
                            </div>
                        ))}
                        <Button variant="outline" className="mt-2 border-dashed gap-2 rounded-xl h-12">
                            <Plus className="h-4 w-4" />
                            Upload File
                        </Button>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
