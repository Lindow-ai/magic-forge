import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'

const font = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Magic Forge - Dashboard',
    description: 'Dashboard for create your component',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={font.className}>{children}</body>
        </html>
    )
}
