import type { Metadata } from 'next'
import { Jost } from 'next/font/google'

const jost = Jost({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Magic Forge - Dashboard",
  description: "Dashboard for create your component",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${jost.className} antialiased dark:bg-[rgb(9,9,11)]`}>{children}</body>
        </html>
    )
}
