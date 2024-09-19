/**
 * This is the Home component of the Beautiful Gate Cafe website. It utilizes the Next.js framework to render
 * a homepage that features a header section with navigation links. The page is styled with Tailwind CSS
 * to provide a responsive and visually appealing layout.

* Project Name: Beautiful Gate Cafe Website
 * File Purpose: Description of the specific file's purpose (e.g., Home Component, Global Styles)
 * Author: Jonathan Legro
 * Created Date: YYYY-MM-DD
 * Last Modified: YYYY-MM-DD
 * Notes: Any additional notes or references about the file
 */


// Importing the Link component from Next.js for client-side navigation
import Link from 'next/link';

// Exporting the default function component for the home page
export default function Home() {
  return (
    // Main container with Tailwind CSS classes for layout and styling
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      {/* Header Section with navigation */}
      <header className="w-full py-6 bg-white shadow-md font-serif">
        {/* Site title */}
        <h1 className="text-4xl font-bold text-center text-black">The Beautiful Gate Cafe</h1>
        {/* Navigation bar */}
        <nav className="mt-4 flex justify-center font-serif">
          {/* Navigation links */}
          <Link href="/" className="px-2 text-blue-500">Home</Link>
          <Link href="/menu" className="px-2 text-blue-500">Menu</Link>
          <Link href="/about" className="px-2 text-blue-500">About</Link>
        </nav>
      </header>
    </div>
  );
}
