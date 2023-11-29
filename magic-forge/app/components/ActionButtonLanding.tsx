'use client'

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger
} from "@/components/ui/sheet"
import { SignedIn, UserButton } from "@clerk/nextjs"
import { SignInButton, SignedOut } from "@clerk/nextjs"
import { AlignJustify } from "lucide-react"
import Link from "next/link"
import { useRouter } from 'next/navigation'

const ActionsButtonsLanding = () => {
    const router = useRouter()

    return (
        <div>
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger>
                        <AlignJustify />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetDescription>
                                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                                    <SignedIn>
                                        <UserButton afterSignOutUrl="/" afterMultiSessionSingleSignOutUrl="/" />
                                        <Link
                                            href="/dashboard"
                                        >
                                            Get Started
                                        </Link>
                                    </SignedIn>
                                    <SignedOut>
                                        <SignInButton mode="modal">
                                            <Link
                                                href="/"
                                            >
                                                Sign in
                                            </Link>
                                        </SignInButton>
                                        <SignInButton mode="modal">
                                            <Link href="/">Get Started</Link>
                                        </SignInButton>
                                    </SignedOut>
                                    <Link
                                        href="/"
                                    >
                                        Pricing
                                    </Link>
                                    <Link
                                        href="/"
                                    >
                                        Features
                                    </Link>
                                    <Link
                                        href="/"
                                    >
                                        Contact
                                    </Link>
                                    <Link
                                        href="/"
                                    >
                                        About
                                    </Link>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="hidden md:flex md:space-x-4">
                <SignedIn>
                    <UserButton afterSignOutUrl="/" afterMultiSessionSingleSignOutUrl="/" />
                    <Button className="text-md" onClick={() => router.push('/dashboard')}>
                        Get Started
                    </Button>
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal">
                        <Button
                            className="text-md"
                            variant="ghost"
                        >
                            Sign in
                        </Button>
                    </SignInButton>
                    <SignInButton mode="modal">
                        <Button className="text-md">
                            Get Started
                        </Button>
                    </SignInButton>
                </SignedOut>
            </div>
        </div>
    )
}

export default ActionsButtonsLanding