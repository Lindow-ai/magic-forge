import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";

const NavBarDashboard = ({ links, theme, userProfile }: { links: string[]; theme: string; userProfile: string }) => (
  <nav className="bg-white dark:bg-inherit border-b dark:border-zinc-800">
    <div className="w-[900px] lg:w-full mx-auto px-5 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="font-bold text-lg">Magic Forge</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="mr-4">
            <ThemeSwitcher />
        </div>
        <div>
          {/* Afficher le profil de l'utilisateur connecté */}
          <UserButton afterSignOutUrl="/" afterMultiSessionSingleSignOutUrl="/" />
        </div>
      </div>
    </div>
  </nav>
);

export default NavBarDashboard;
