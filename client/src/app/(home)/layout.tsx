import { MenuLink } from "@/components/MenuLink/MenuLink";
import { ROUTE_BROWSE, ROUTE_CONTACT, ROUTE_HOME, ROUTE_LOGIN } from "@/constants/links";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="main-layout">
        <nav className="flex justify-end polysans-font custom-container bg-custom-black py-10">
            <ul className="flex gap-4 text-2xl justify-center items-center justify-items-center border-b-2 pb-4 border-custom-cyan text-custom-cyan">
                <MenuLink href={`/${ROUTE_HOME}`} additionalClassNames="text-custom-cyan">Home</MenuLink>
                <p>/</p>
                <MenuLink href={`/${ROUTE_CONTACT}`} additionalClassNames="text-custom-cyan">Contact</MenuLink>
                <p>/</p>
                <MenuLink href={`/${ROUTE_BROWSE}`} additionalClassNames="text-custom-cyan">Blog</MenuLink>
                <p>/</p>
                <MenuLink href={`/${ROUTE_LOGIN}`} additionalClassNames="text-custom-cyan">Login</MenuLink>
            </ul>
        </nav>
        {children}
    </section>
  )
}
