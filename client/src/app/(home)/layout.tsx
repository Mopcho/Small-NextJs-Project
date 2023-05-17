'use client';
import { HamburgerNavigation } from '@/components/HamburgerNavigation/HamburgerNavigation';
import { Navigation } from '@/components/Navigation/Navigation';
import { useBreakpoints } from '@/hooks/useBreakpoints';
import { useEffect, useState } from 'react';
import { Menu } from 'react-feather';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  // Hamburger menu handling
  // TODO: Maybe make it a custom hook
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const { breakpoints } = useBreakpoints();

  useEffect(() => {
    const handleWindowResize = () => {
      if (typeof window !== 'undefined') {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      }
    };
    if (typeof window !== 'undefined') {
      // browser code
      window.addEventListener('resize', handleWindowResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        // browser code
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  }, []);

  useEffect(() => {
    if (windowSize.width >= breakpoints.tablet) {
      setIsHamburgerOpen(false);
    }
  }, [windowSize, breakpoints.tablet]);

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
