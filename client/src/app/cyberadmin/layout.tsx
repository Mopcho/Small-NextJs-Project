import Link from 'next/link';

export default function CyberAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="admin-layout custom-container py-5">
      <nav className="admin-navigation">
        <ul>
          <li>
            <Link href="/cyberadmin/create" className="text-custom-cyan">
              Create
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </section>
  );
}
