import type { Metadata } from 'next'
import { Gamja_Flower, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const gamjaFlower = Gamja_Flower({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-gamja',
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
})

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'My portfolio website',
}

export default function PortfolioLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return (
        <div className={`${gamjaFlower.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
            {children}
        </div>
    )
}
