"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Search, Building2, Phone, Mail, Upload } from "lucide-react"

const mockClients = [
    { id: "1", company: "Ural Copper Ltd", inn: "7701234567", city: "Ekaterinburg", phone: "+7 999 123 45 67", owner: "admin" },
    { id: "2", company: "TechTrans Logistics", inn: "7709876543", city: "Moscow", phone: "+7 999 987 65 43", owner: "Smit" },
    { id: "3", company: "Siberian Minerals", inn: "5401239876", city: "Novosibirsk", phone: "+7 913 456 78 90", owner: "Anar" },
]

export default function ClientsPage() {
    return (
        <div className="flex flex-col gap-6 p-6 md:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Clients</h1>
                    <p className="text-gray-500">Manage client database, contacts, and imported Excel data.</p>
                </div>
                <div className="flex gap-2 items-center self-start sm:self-auto">
                    <label className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-100 cursor-pointer transition-colors hidden sm:flex">
                        <Upload className="h-4 w-4" />
                        Import Excel
                        <input
                            type="file"
                            accept=".xlsx, .xls"
                            className="hidden"
                            onChange={(e) => {
                                if (e.target.files?.length) {
                                    alert(`Importing ${e.target.files[0].name}... Database synced!`);
                                }
                            }}
                        />
                    </label>
                    <Button className="gap-2 rounded-full">
                        <Plus className="h-4 w-4" />
                        Add Client
                    </Button>
                </div>
            </div>

            <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search by company, INN or phone..."
                    className="h-12 w-full rounded-2xl border border-gray-200 bg-white pl-10 pr-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {mockClients.map((client) => (
                    <Card key={client.id} className="group cursor-pointer transition-all hover:border-primary/50 hover:shadow-xl">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-4">
                                    <Building2 className="h-5 w-5" />
                                </div>
                                <Badge variant="secondary" className="text-xs font-normal">
                                    {client.city}
                                </Badge>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{client.company}</h3>
                            <p className="text-sm text-gray-500 mb-4 whitespace-nowrap">INN: {client.inn}</p>

                            <div className="flex flex-col gap-2 border-t border-gray-100 pt-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Phone className="h-4 w-4 text-gray-400 shrink-0" />
                                    <span className="truncate">{client.phone}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
