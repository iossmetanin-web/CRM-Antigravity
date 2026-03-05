"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, Hash, Lock, Search } from "lucide-react"

const mockChats = [
    { id: "1", name: "General", type: "general", lastMessage: "Has anyone seen the contract?", time: "10:42 AM", unread: 0 },
    { id: "2", name: "Copper LME China", type: "topic", lastMessage: "Admin uploaded final_terms.pdf", time: "Yesterday", unread: 2 },
    { id: "3", name: "Management", type: "private", lastMessage: "Let's review Q3 numbers", time: "Monday", unread: 0 },
]

export default function ChatsPage() {
    return (
        <div className="flex h-[calc(100vh-4rem)] md:h-screen bg-gray-50 flex-col md:flex-row">
            {/* Sidebar / Chat List */}
            <div className="w-full md:w-80 flex flex-col border-r border-gray-200 bg-white shrink-0">
                <div className="p-4 border-b border-gray-100 flex-none text-2xl font-bold tracking-tight text-gray-900">
                    Chats
                </div>
                <div className="p-4 border-b border-gray-100 flex-none relative">
                    <Search className="absolute left-7 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search messages..."
                        className="h-10 w-full rounded-xl bg-gray-50 pl-10 pr-4 text-sm outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>

                <div className="flex-1 overflow-y-auto">
                    {mockChats.map((chat) => (
                        <div key={chat.id} className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                                {chat.type === 'general' && <Hash className="h-5 w-5" />}
                                {chat.type === 'private' && <Lock className="h-5 w-5 text-purple-600" />}
                                {chat.type === 'topic' && <Hash className="h-5 w-5 text-orange-600" />}
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-semibold text-gray-900 truncate">{chat.name}</h4>
                                    <span className="text-xs text-gray-400 whitespace-nowrap">{chat.time}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                                    {chat.unread > 0 && (
                                        <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center shrink-0">{chat.unread}</Badge>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Active Chat Area - Hidden on mobile unless selected */}
            <div className="hidden md:flex flex-1 flex-col bg-white">
                {/* Chat Header */}
                <div className="flex h-[73px] items-center border-b border-gray-100 px-6 shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                            <Hash className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Copper LME China</h3>
                            <p className="text-xs text-gray-500">Topic Chat • 3 participants</p>
                        </div>
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                    <div className="text-center">
                        <Badge variant="secondary" className="mx-auto mt-4 font-normal">Yesterday</Badge>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold shrink-0 text-xs">
                            M
                        </div>
                        <div className="flex flex-col gap-1 max-w-[80%]">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm">Magel</span>
                                <span className="text-xs text-gray-400">14:02</span>
                            </div>
                            <div className="rounded-2xl rounded-tl-sm bg-gray-100 p-3 text-sm text-gray-800">
                                Are we still waiting on the logistics quote?
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 flex-row-reverse">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold shrink-0 text-xs">
                            A
                        </div>
                        <div className="flex flex-col gap-1 items-end max-w-[80%]">
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-400">14:05</span>
                                <span className="font-semibold text-sm">Admin (You)</span>
                            </div>
                            <div className="rounded-2xl rounded-tr-sm bg-primary p-3 text-sm text-white">
                                Yes, should have it by EOD today.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chat Input */}
                <div className="p-4 bg-white border-t border-gray-100 shrink-0">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-4 pr-12 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                        <button className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white transition-transform hover:scale-105">
                            <Send className="h-4 w-4 shrink-0 -ml-0.5 mt-0.5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
