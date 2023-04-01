import Link from "next/link"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="mx-24 my-10">
        <nav className="flex py-5 justify-between">
            <h2 className="text-4xl select-none">MopBlog</h2>
            <ul className="flex gap-4 text-xl">
                <Link href={'/'} className='hover:text-red-500 hover:scale-110'>Home</Link>
                <Link href={'/about'} className='hover:text-red-500 hover:scale-110'>About</Link>
                <Link href={'/blog'} className='hover:text-red-500 hover:scale-110'>Blog</Link>
            </ul>
        </nav>
        {children}
    </section>
  )
}
