import {
  ROUTE_BROWSE,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_REGISTER,
} from '@/constants/links';
import { MenuLink } from '../MenuLink/MenuLink';
import { SignInButton } from '../Buttons/SignIn';
import { SignOutButton } from '../Buttons/SignOut';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export const DesktopNavigation = async (): Promise<JSX.Element> => {
  const session = await getServerSession(authOptions);
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
        {!session?.user && (
          <>
            <SignInButton>Login</SignInButton>
            <p>/</p>
          </>
        )}
        {session?.user && (
          <>
            <SignOutButton>Logout</SignOutButton>
          </>
        )}
        {!session?.user && (
          <>
            <MenuLink
              href={`/${ROUTE_REGISTER}`}
              additionalClassNames="text-custom-cyan"
            >
              Register
            </MenuLink>
          </>
        )}
      </ul>
    </nav>
  );
};
