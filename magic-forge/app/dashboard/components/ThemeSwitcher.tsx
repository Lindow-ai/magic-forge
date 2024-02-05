import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoonIcon, SunIcon, DesktopIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {

    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Tabs defaultValue={theme}>
            <TabsList className="border bg-zinc-950">
                <TabsTrigger className="" value="light" onClick={() => setTheme("light")}>
                    <SunIcon className="h-[1.2rem] w-[1.2rem]" />
                </TabsTrigger>
                <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
                    <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
                </TabsTrigger>
                <TabsTrigger value="system" onClick={() => setTheme("system")}>
                    <DesktopIcon className="h-[1.2rem] w-[1.2rem]" />
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}

export default ThemeSwitcher;