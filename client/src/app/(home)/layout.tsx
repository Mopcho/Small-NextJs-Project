export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
            </ul>
        </nav>
        {children}
    </section>
  )
}
