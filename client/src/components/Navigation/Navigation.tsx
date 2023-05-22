import { ROUTE_BROWSE, ROUTE_CONTACT, ROUTE_HOME } from '@/constants/links';
import { MenuLink } from '../MenuLink/MenuLink';
import { signIn } from 'next-auth/react';

export const Navigation = (): JSX.Element => {
  return (
    <nav className="main-nav flex justify-end polysans-font custom-container bg-custom-black py-10">
      <ul className="flex gap-4 text-2xl justify-center items-center justify-items-center border-b-2 pb-4 border-custom-cyan text-custom-cyan">
        <MenuLink
          href={`/${ROUTE_HOME}`}
          additionalClassNames="text-custom-cyan"
        >
          Home
        </MenuLink>
        <p>/</p>
        <MenuLink
          href={`/${ROUTE_CONTACT}`}
          additionalClassNames="text-custom-cyan"
        >
          Contact
        </MenuLink>
        <p>/</p>
        <MenuLink
          href={`/${ROUTE_BROWSE}`}
          additionalClassNames="text-custom-cyan"
        >
          Blog
        </MenuLink>
        <p>/</p>
        <button className="text-custom-cyan" onClick={() => signIn()}>
          Sign In
        </button>
      </ul>
    </nav>
  );
};
