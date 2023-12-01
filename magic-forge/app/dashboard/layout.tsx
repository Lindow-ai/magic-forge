import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Logo from "../components/Logo";
import { UserButton } from "@clerk/nextjs";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import LogoDashboard from "./components/LogoDashboard";
import ThemeProvider from "@/components/providers/ThemeProvider";

const font = Outfit({ subsets: ["latin"] });

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
      <body className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
        <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
          <LogoDashboard />
          <div className="flex gap-4 items-center">
            <ThemeSwitcher />
            <UserButton afterSignOutUrl="/" />
          </div>
        </nav>
        <main className="flex w-full flex-grow">{children}</main>
      </body>
    </html>
  );
}
