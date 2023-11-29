'use client'
import { SignIn, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

const FirstSection = () => {

    const router = useRouter()

    return (
        <section className="md:py-20 py-10 bg-gradient-to-r from gray-00 to-gray-200 spacey-10">
            <div className="container mx-auto text-center">
                <div className="text-6xl flex justify-center font-bold md:px-20 pb-10 text-gradient bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent">
                    Turn your ideas into web magic with Magic Forge: Use, Create, Customize and Sell!
                </div>
                <p className="text-lg md:text-xl md-10 bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent font-bold">The tool that lets you forge unique web components and monetize them.</p>
                <div className="flex gap-4 justify-center pt-10">
                    <SignedIn>
                        <button
                            className="bg-blue-500 text-white px-10 py-4 rounded-md text-lg font-bold"
                            onClick={() => router.push('/dashboard')}
                        >
                            Get started
                        </button>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <button
                                className="bg-blue-500 text-white px-10 py-4 rounded-md text-lg font-bold"
                            >
                                Get started
                            </button>
                        </SignInButton>
                    </SignedOut>
                    <button className="bg-gray-600 text-white px-10 py-4 rounded-md text-lg font-bold">Learn More</button>
                </div>
                <div className="pt-10">
                    <video className="rounded-xl" autoPlay muted loop>
                        <source src="/content/hero-1.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    )
}

export default FirstSection