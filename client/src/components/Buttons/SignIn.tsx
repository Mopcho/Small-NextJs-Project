'use client';

import { signIn } from 'next-auth/react';

interface Props {
  className?: string;
  children?: JSX.Element | string;
}

export const SignInButton: React.FC<Props> = ({ className, children }) => {
  return (
    <button onClick={() => signIn()} className={className}>
      {children}
    </button>
  );
};
