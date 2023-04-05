import Link from "next/link"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="mx-48 my-10">
        <nav className="flex py-5 justify-end cyberpunk-font text-yellow-400">
            <ul className="flex gap-4 text-2xl justify-center items-center justify-items-center border-b-2 pb-4 border-yellow-400">
                <Link href={'/'} className='hover:text-red-500 hover:scale-110'>Home</Link>
                <p>/</p>
                <Link href={'/about'} className='hover:text-red-500 hover:scale-110'>About</Link>
                <p>/</p>
                <Link href={'/blog'} className='hover:text-red-500 hover:scale-110'>Blog</Link>
                <p>/</p>
                <Link href={'/login'} className='hover:text-red-500 hover:scale-110'>Login</Link>
                <p>/</p>
                <Link href={'/register'} className='hover:text-red-500 hover:scale-110'>Register</Link>
                <p>/</p>
                <button className='hover:text-red-500 hover:scale-110'>More <span className="text-3xl">+</span></button>
            </ul>
        </nav>
        {children}
    </section>
  )
}
