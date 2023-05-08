import { MenuLink } from "@/components/MenuLink/MenuLink";
import { ROUTE_BROWSE, ROUTE_CONTACT, ROUTE_HOME, ROUTE_LOGIN } from "@/constants/links";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="main-layout">
        <nav className="flex py-5 justify-end polysans-font">
            <ul className="flex gap-4 text-2xl justify-center items-center justify-items-center border-b-2 pb-4 border-white-400">
                <MenuLink href={`/${ROUTE_HOME}`}>Home</MenuLink>
                <p>/</p>
                <MenuLink href={`/${ROUTE_CONTACT}`}>Contact</MenuLink>
                <p>/</p>
                <MenuLink href={`/${ROUTE_BROWSE}`}>Blog</MenuLink>
                <p>/</p>
                <MenuLink href={`/${ROUTE_LOGIN}`}>Login</MenuLink>
            </ul>
        </nav>
        {children}
    </section>
  )
}
