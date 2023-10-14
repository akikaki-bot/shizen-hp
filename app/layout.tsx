import { NavigationBar } from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["greek"] })

export const metadata: Metadata = {
    title: '自然係サーバー',
    description: '自然係サーバーの公式HPです。',
    icons : "/sizengakari_icon.png"
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <body className={`${inter.className}`}>
                <NavigationBar />
                {children}
            </body>
        </html>
    )
}
