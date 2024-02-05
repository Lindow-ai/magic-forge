'use client'

import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs"
import NavBarDashboard from "./components/NavBarDashboard"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { Jost } from "next/font/google";

const Dashboard = () => {

  return (
    <div>
      <SignedIn>
      <html lang="en" suppressHydrationWarning>
			<body className={`antialiased dark:bg-[rgb(9,9,11)]`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
          <NavBarDashboard links={["test, test2"]} theme="dark" userProfile="test" />
				</ThemeProvider>
			</body>
		</html>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  )
}

export default Dashboard
