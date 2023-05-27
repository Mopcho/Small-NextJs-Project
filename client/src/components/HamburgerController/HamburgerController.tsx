'use client';

import { useState } from 'react';
import { HamburgerLinks } from '../HamburgerLinks/HamburgerLinks';
import { Menu } from 'react-feather';

export const HamburgerController = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  return (
    <>
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
        <HamburgerLinks close={() => setIsHamburgerOpen(false)} />
      ) : null}
    </>
  );
};
