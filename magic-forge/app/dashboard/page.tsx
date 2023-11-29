'use client'

import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs"

const Dashboard = () => {

  return (
    <div>
      <SignedIn>
        <div>test</div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  )
}

export default Dashboard
