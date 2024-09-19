import Link from 'next/link';

export default function Menu() {
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
        <h2 className="mb-4 text-2xl font-bold text-center text-black">Our Menu</h2>
        <div className="mb-6">
          <h3 className="mb-2 text-xl font-semibold text-center text-black">Food</h3>
          <ul>
            <li className="flex justify-between px-4 py-2 bg-gray-50 rounded-lg shadow mb-2 text-black">
              <span>Bagel</span>
              <span>$3.00</span>
            </li>
            <li className="flex justify-between px-4 py-2 bg-gray-50 rounded-lg shadow mb-2 text-black">
              <span>Muffin</span>
              <span>$2.50</span>
            </li>
            <li className="flex justify-between px-4 py-2 bg-gray-50 rounded-lg shadow mb-2 text-black">
              <span>Croissant</span>
              <span>$2.75</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-semibold text-center text-black">Drinks</h3>
          <ul>
            <li className="flex justify-between px-4 py-2 bg-gray-50 rounded-lg shadow mb-2 text-black">
              <span>Espresso</span>
              <span>$2.50</span>
            </li>
            <li className="flex justify-between px-4 py-2 bg-gray-50 rounded-lg shadow mb-2 text-black">
              <span>Cappuccino</span>
              <span>$3.50</span>
            </li>
            <li className="flex justify-between px-4 py-2 bg-gray-50 rounded-lg shadow mb-2 text-black">
              <span>Latte</span>
              <span>$4.00</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
