import { HamburgerController } from '@/components/HamburgerController/HamburgerController';
import { DesktopNavigation } from '@/components/DesktopNavigation/DesktopNavigation';

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="main-layout">
      <DesktopNavigation />
      <HamburgerController></HamburgerController>
      {children}
    </section>
  );
}
