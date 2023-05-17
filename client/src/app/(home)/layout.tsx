'use client';
import { HamburgerNavigation } from '@/components/HamburgerNavigation/HamburgerNavigation';
import { Navigation } from '@/components/Navigation/Navigation';
import { useState } from 'react';
import { Menu } from 'react-feather';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <section className="main-layout">
      <Navigation />
      {isHamburgerOpen ? null : (
        <div className="icon-wrapper bg-custom-black py-5 px-5">
          <Menu
            size="48"
            color="white"
            className="float-right"
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          />
        </div>
      )}
      {isHamburgerOpen ? (
        <HamburgerNavigation close={() => setIsHamburgerOpen(false)} />
      ) : null}
      {children}
    </section>
  );
}
