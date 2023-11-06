'use client'

import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport
} from "@/components/ui/navigation-menu"
import Logo from "./Logo"

const components: { title: string, description: string }[] = [
    {
        title: "Frozen",
        description: "Recommanded template for most use cases. Includes all the components you nedd to get started."
    },
    {
        title: "Swift",
        description: "A template with a minimal set of components. Use this template if you want to build your own components"
    },
    {
        title: "Tuscany",
        description: "Advanced template with more components and featured. Use this template if you want to build a complex UI."
    },
    {
        title: "Ambert",
        description: "Great for building a marketing or landing page."
    },
    {
        title: "Tide",
        description: "Layered template with a sidebar navigation. Great for building a dashboard or admin panel."
    },
    {
        title: "Mint",
        description: "Nice template for building a blog or a content-heavy website."
    }
]

const NavigationBarLanding = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <Logo />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Magic Forge
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Build your own components with the power of tailwind css and shadcn/ui.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem title="Introduction">
                                Learn about the basics of Magic Forge.
                            </ListItem>
                            <ListItem href="/docs/installation" title="Installation">
                                How to install your components and structure your app.
                            </ListItem>
                            <ListItem href="/community" title="Community">
                                Join the community and get help or support.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink>
                            Documentation
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default NavigationBarLanding