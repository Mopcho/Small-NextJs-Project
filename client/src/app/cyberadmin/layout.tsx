import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function CyberAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session || session?.user?.email !== 'test@abv.bg') {
    redirect('api/auth/signin');
  }
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
