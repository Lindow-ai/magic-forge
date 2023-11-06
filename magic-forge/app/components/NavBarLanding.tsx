import ActionsButtonsLanding from "./ActionButtonLanding"
import Logo from "./Logo"
import NavigationBarLanding from "./NavigationBarLanding"

const NavBarLanding = () => {
    return(
        <div className="flex justify-between items-center px-10 border-b h-40">
            <Logo />
            <NavigationBarLanding />
            <ActionsButtonsLanding />
        </div>
    )
}

export default NavBarLanding