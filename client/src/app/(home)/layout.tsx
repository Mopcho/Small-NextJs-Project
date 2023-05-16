'use client'
import { HamburgerNavigation } from "@/components/HamburgerNavigation/HamburgerNavigation";
import { Navigation } from "@/components/Navigation/Navigation";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Menu } from "react-feather";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  // Hamburger menu handling
  // TODO: Maybe make it a custom hook
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const { breakpoints } = useBreakpoints();

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({width: window.innerWidth, height: window.innerHeight});
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize.width >= breakpoints.tablet) {
      setIsHamburgerOpen(false);
    }
  }, [windowSize]);

  return (
    <section className="main-layout">
        <Navigation />
        <div className="icon-wrapper bg-custom-black py-5 px-5">
          <Menu size="48" color="white" className="float-right" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}/>
        </div>
        {isHamburgerOpen ? (<HamburgerNavigation />) : null}
        {children}
    </section>
  )
}
