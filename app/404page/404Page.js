// pages/404.js
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-xl text-gray-700">Oops!🧐 The page you're looking for does not exist.</p>
      <Link href="/">
        <a className="mt-8 text-blue-600 hover:underline">Go back to home page</a>
      </Link>
    </div>
  );
}
