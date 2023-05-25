'use client';

import { signOut } from 'next-auth/react';

interface Props {
  className?: string;
  children?: JSX.Element | string;
}

export const SignOutButton: React.FC<Props> = ({ className, children }) => {
  return (
    <button onClick={() => signOut()} className={className}>
      {children}
    </button>
  );
};
