import Image from "next/image"

const ThirdSection = () => {
    return (
        <div className="flex p-10 flex-col md:flex-row md:justify-evenly">
            <div className="flex-col md:flex-row gap-6 md:px-10 flex">
                <div className="md:w-2/3 w-full">
                    <video className="rounded-xl" autoPlay muted loop>
                        <source src="/content/hero-3.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="flex-col border p-4 rounded-xl md:w-2/5">
                    <div className="text-4xl flex justify-center text-center md:text-6xl bg-gradient-to-l from-yellow-300 to-blue-300 bg-clip-text text-transparent">
                        Fully Customizable components
                    </div>
                    <div className="md: px-20 space-y-6 flex-col items-center justify-center">
                        <div className="flex-col">
                            <div className="text-lg pt-10 flex items-center gap-5">
                                <Image
                                    src="/images/images/image-7.png"
                                    alt="feature-7"
                                    width={70}
                                    height={70}
                                />
                                <div className="flex flex-col gap-2">
                                    Choose from a variety of component or templates to get started. And customize your web applications.
                                </div>
                            </div>
                        </div>
                        <div className="flex-col">
                            <div className="text-lg flex items-center gap-5">
                                <Image
                                    src="/images/images/image-5.png"
                                    alt=""
                                    width={70}
                                    height={70}
                                />
                                <div>
                                    Add unlimited components and block and variations and manges your inventory with ease.
                                </div>
                            </div>
                        </div>
                        <div className="flex-col">
                            <div className="text-lg flex items-center gap-5">
                                <Image
                                    src="/images/images/image-8.png"
                                    alt=""
                                    width={70}
                                    height={70}
                                />
                                <div>
                                    Stay informed and in control. Track, the performance of your web components in real time with detailed analysis data, incluing earnings, market visibility and number of uses, so you can make informed decisions and optimize your success.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection