'use client';

import { signIn } from 'next-auth/react';

export const SignInButton = ({ className }: { className?: string }) => {
  return (
    <button onClick={() => signIn()} className={className}>
      Already have an account ? Sign in now !
    </button>
  );
};
