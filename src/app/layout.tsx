import type { Metadata } from 'next'
import './globals.css'
import { Sidebar } from '@/components/layout/sidebar'
import { BottomNav } from '@/components/layout/bottom-nav'

export const metadata: Metadata = {
    title: 'CRM Operating System',
    description: 'Next-generation CRM and task management system',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="flex min-h-screen bg-background text-foreground selection:bg-primary/30">
                <Sidebar />
                <main className="flex-1 pb-16 md:pb-0 relative overflow-y-auto">
                    {children}
                </main>
                <BottomNav />
            </body>
        </html>
    )
}
