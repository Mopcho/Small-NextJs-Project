'use client';

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);
  return (
    <div className="grid place-content-center h-screen gap-4">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()} className='rounded-xl bg-red-500 p-3 hover:scale-110 hover:text-white hover:bg-lime-500'>Try again</button>
    </div>
  );
}