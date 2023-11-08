const features = [
    {
        name: "Free",
        price: "$0/month",
        description: "Access web magic with no up-front costs. Our Magic Forge Free plan lets you create, customize, sell your web components. All for free. It's the ideal solution for designer who are just starting out or want to explore our basic features whithout spending a cent."
    },
    {
        name: "Basic",
        price: "$15/month",
        description: "Boost your creative potential with our affordable Basic plan. At a competitive rate, you get full access to all components and features components of Magic Forge, with the detailed analytics. It's the ideal option for individual designers and small team looking to make their mark in the web world."
    },
    {
        name: "Prenium",
        price: "$30/month",
        description: "Magic Forge Prenium plan offers you a prenium experience at every level. Access advanced features like block, exclusive templates, and more indexing for your component sales. Plus, get priority support to ensure your success in the world of web applications. It's the complete package in oder to create web app with no-code. It's the ideal option for individual and professionals."
    },
    {
        name: "Professional",
        price: "$100/month",
        description: "Magic Forge Professional plan is designed to meet the needs of experienced web and ambitious businesses. Enjoy advanced features, exclusive templates and increased visibility on the Magic Forge platform. As professional, you access to multi-account for your employee. You can sell your web component with confidence if you want and optimize your earnings with full access to analytics and dedicated support."
    }
]

const Pricing = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-4xl text-center md:text-6xl font-bold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent md:pb-10">
                Pricing
                <div className="text-2xl text-center md:text-4xl font-bold md:py-10">
                    Simple and transparent pricing plans.
                </div>
            </div>
            <div className="md:flex">
                {
                    features.map((feature, index) => (
                        <div
                         key={index}
                         className="p-4"
                        >
                            <div className="grid justify-center items-center gap-4 border rounded-xl p-4 w-96 h-[600px]">
                                <div className="text-2xl text-black pb-4">
                                    {feature.name}
                                </div>
                                <div className="text-xl">
                                    {feature.price}
                                </div>
                                <div className="text-xl">
                                    {feature.description}
                                </div>
                                <div className="bg-blue-500 text-white p-4 rounded-xl items-center justify-center">
                                    Get Started
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Pricing