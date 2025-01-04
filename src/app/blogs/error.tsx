'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error); // Log the error for debugging
  }, [error]);

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold text-red-500 mb-4">
        Something went wrong!
      </h2>
      <p className="text-gray-600">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
      >
        Try again
      </button>
    </div>
  );
}
