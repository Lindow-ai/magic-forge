import Image from "next/image"

const Logo = () => {
    return (
        <div>
            <Image
                src="/images/logo/logo-1.svg"
                width={100}
                height={100}
                alt="logo" />
        </div>
    )
}

export default Logo