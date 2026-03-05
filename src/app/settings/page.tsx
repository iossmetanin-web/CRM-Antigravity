"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, Bell, Shield, Palette } from "lucide-react"

export default function SettingsPage() {
    return (
        <div className="flex flex-col gap-6 p-6 md:p-10">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Настройки</h1>
                <p className="text-gray-500">Управляйте своим профилем и параметрами системы.</p>
            </div>

            <div className="grid gap-6 max-w-4xl">
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <User className="h-6 w-6" />
                        </div>
                        <div>
                            <CardTitle>Профиль</CardTitle>
                            <CardDescription>Ваша персональная информация и роль в системе.</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700">Имя</label>
                                <Input defaultValue="Александр" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700">Роль</label>
                                <div className="flex items-center h-10">
                                    <Badge>Администратор</Badge>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <Input defaultValue="admin@crm.local" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                            <Bell className="h-6 w-6" />
                        </div>
                        <div>
                            <CardTitle>Уведомления</CardTitle>
                            <CardDescription>Настройте важные оповещения о дедлайнах и чатах.</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="flex items-center justify-between py-2 border-b border-gray-50">
                            <div>
                                <p className="font-medium text-sm">Просроченные задачи</p>
                                <p className="text-xs text-gray-500">Получать уведомления, если задача просрочена более чем на 24ч.</p>
                            </div>
                            <div className="h-5 w-9 bg-primary rounded-full relative">
                                <div className="h-4 w-4 bg-white rounded-full absolute right-0.5 top-0.5" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <p className="font-medium text-sm">Новые сообщения</p>
                                <p className="text-xs text-gray-500">Уведомлять о новых сообщениях в чатах топиков.</p>
                            </div>
                            <div className="h-5 w-9 bg-gray-200 rounded-full relative">
                                <div className="h-4 w-4 bg-white rounded-full absolute left-0.5 top-0.5" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-end gap-3">
                    <Button variant="outline" className="rounded-xl">Отмена</Button>
                    <Button className="rounded-xl">Сохранить изменения</Button>
                </div>
            </div>
        </div>
    )
}
