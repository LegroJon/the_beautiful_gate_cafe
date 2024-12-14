import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      {/* Header Section */}
      <header className="w-full py-6 bg-white shadow-md font-serif">
        <h1 className="text-4xl font-bold text-center text-black">The Beautiful Gate Cafe</h1>
        <nav className="mt-4 flex justify-center font-serif">
          <Link href="/" className="px-2 text-blue-500">Home</Link>
          <Link href="/menu" className="px-2 text-blue-500">Menu</Link>
          <Link href="/about" className="px-2 text-blue-500">About</Link>
        </nav>
      </header>
      <main className="w-full max-w-4xl p-6 mx-auto mt-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-center text-black">About Us</h2>
        <p className="text-center text-black">The Beautiful Gate Cafe is a cozy spot serving the finest coffee and pastries.</p>
      </main>
    </div>
  );
}
