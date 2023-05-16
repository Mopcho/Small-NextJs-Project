import { ROUTE_BROWSE, ROUTE_CONTACT, ROUTE_HOME, ROUTE_LOGIN } from "@/constants/links";
import { MenuLink } from "../MenuLink/MenuLink";
import { Home, Phone, Globe, LogIn } from 'react-feather';

export const HamburgerNavigation = (): JSX.Element => {
    return (
    <nav className="hamburger-nav w-3/4 absolute right-0 h-screen bg-white">
        <ul className="flex flex-col gap-2 px-7 py-5 overflow-visible">
            <p className="text-custom-gray uppercase tracking-widest w-full text-sm">Menus</p>
            <div className="hamburger-menu-tile">
                <MenuLink href={`/${ROUTE_HOME}`} additionalClassNames="hamburger-menu-link">
                    <div className="flex items-center gap-3"><Home color="black" size="20"></Home>Home</div>
                </MenuLink>
            </div>
            <div className="hamburger-menu-tile">
                <MenuLink href={`/${ROUTE_CONTACT}`} additionalClassNames="hamburger-menu-link">
                    <div className="flex items-center gap-3"><Phone color="black" size="20"></Phone>Contact</div>
                </MenuLink>
            </div>
            <div className="hamburger-menu-tile">
                <MenuLink href={`/${ROUTE_BROWSE}`} additionalClassNames="hamburger-menu-link">
                    <div className="flex items-center gap-3"><Globe color="black" size="20"></Globe>Browse</div>
                </MenuLink>
            </div>
            <div className="hamburger-menu-tile">
                <MenuLink href={`/${ROUTE_LOGIN}`} additionalClassNames="hamburger-menu-link">
                    <div className="flex items-center gap-3"><LogIn color="black" size="20"></LogIn>Login</div>
                </MenuLink>
            </div>
        </ul>
    </nav>
    )
}