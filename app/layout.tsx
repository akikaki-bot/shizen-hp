import { NavigationBar } from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["greek"] })

export const metadata: Metadata = {
    title: '自然係サーバー',
    description: '自然係サーバーの公式HPです。',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <head>
                <link rel="icon" href={`/sizengakari_icon.png`} />
            </head>
            <body className={`${inter.className}`}>
                <NavigationBar />
                {children}
            </body>
        </html>
    )
}
