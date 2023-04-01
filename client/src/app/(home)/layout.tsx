export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="m-7">
        <nav className="flex py-5 justify-between">
            <h2 className="text-4xl">MopBlog</h2>
            <ul className="flex gap-2 text-xl">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
            </ul>
        </nav>
        {children}
    </section>
  )
}
