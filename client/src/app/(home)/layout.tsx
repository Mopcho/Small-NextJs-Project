import { MenuLink } from "@/components/MenuLink/MenuLink";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="mx-48 my-10">
        <nav className="flex py-5 justify-end polysans-font">
            <ul className="flex gap-4 text-2xl justify-center items-center justify-items-center border-b-2 pb-4 border-white-400">
                <MenuLink href={'/'}>Home</MenuLink>
                <p>/</p>
                <MenuLink href={'/contact'}>Contact</MenuLink>
                <p>/</p>
                <MenuLink href={'/blog'}>Blog</MenuLink>
                <p>/</p>
                <MenuLink href={'/login'}>Login</MenuLink>
                <p>/</p>
                <button className='hover:text-custom-green hover:scale-110'>More <span className="text-3xl">+</span></button>
            </ul>
        </nav>
        {children}
    </section>
  )
}
