'use client'

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"

const features = [
    {
        name: "Create your own component",
        description: "Unleash your creativity by designing your own web components from A to Z. Customize them to match your vision and enrich the web world with your own unique creations.",
        image: "/images/images/image-1.png",
        alt: "Logo"
    },
    {
        name: "Sell",
        description: "Monetize your talent! Sell your web components and self template pack on Magic Forge. Generate income by sharing yours creations with other web enthusiasts.",
        image: "/images/images/image-2.png",
        alt: "Logo"
    },
    {
        name: "Customizable",
        description: "Fine-tune every detail to your needs. With Magic Forge, you can easily customize your web components by modifying colors, styles, features and more, to fit your project perfectly.",
        image: "/images/images/image-3.png",
        alt: "logo"
    },
    {
        name: "Integrations",
        description: "Assemble your vision with ease. Use Magic Forge to arrange your components in blocks and easily build your web application, a digital puzzle where each piece fits harmoniously together in oder to create an exceptional user experience.",
        image: "/images/images/image-4.png",
        alt: "logo"
    },
    {
        name: "Templates",
        description: "Save time and inspiration with our predefined templates. Magic Forge offers your a selection of default templates to help you get started quickly and customize your web components to suit your needs, while ensuring a solid foundation for your project.",
        image: "/images/images/image-5.png",
        alt: "logo"
    },
    {
        name: "Support",
        description: "Get 24/7 support from our team or our community to help you with any issues you have.",
        image: "/images/images/image-6.png",
        alt: "logo"
    }
]

const SecondSection = () => {

    const router = useRouter()

    return (
        <div>
            <div className="md:flex-row flex-col items-center flex justify-center pb-10">
                <div className="p-5 justify-center md:w-1/3">
                    <div className="bg-gradient-to-r from-blue-800 to-green-300 bg-clip-text text-transparent text-4xl md:text-6xl font-bold pb-10">
                        From Individual, startup to entreprise, Magic Forge is built for every type of business.
                    </div>
                    <SignedIn>
                        <button
                            className="bg-blue-500 text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-blue-600"
                            onClick={() => router.push('/dashboard')}
                        >
                            Get Started
                        </button>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <button
                                className="bg-blue-500 text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-blue-600"
                            >
                                Get Started
                            </button>
                        </SignInButton>
                    </SignedOut>
                </div>
                <video className="rounded-xl md:w-2/5 p-4 md:p-0" autoPlay loop muted>
                    <source src="/content/hero-2.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="flex-col items-center justify-center">
                <div className="text-3xl flex justify-center md:text-5xl font-bold pt-5 pb-10 bg-gradient-to-r from-purple-400 to-blue-800 bg-clip-text text-transparent">
                    Product Features
                </div>
                <div className="grid grid-cols-1 p-4 md:grid-cols-3 gap-4 md:px-40">
                    {
                        features.map((feature, index) => (
                            <div
                                className="flex-col space-y-6 pb-10 border p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out"
                                key={index}
                            >
                                <div className="text-gray-600 text-3xl font-bold">
                                    <Image
                                        src={feature.image}
                                        alt={feature.alt}
                                        width={300}
                                        height={300}
                                        className="object-contain h-20 w-20 items-center justify-center flex mb-10"
                                    />
                                    <div>
                                        <div className="text-2xl pb-4 bg-gradient-to-t from-black to-gray-400 bg-clip-text text-transparent">
                                            {feature.name}
                                        </div>
                                        <div className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent text-lg">
                                            {feature.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SecondSection