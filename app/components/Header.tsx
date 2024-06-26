import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-3">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">EventWays</h1>
        <nav className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
          <Link href="/events" className="text-gray-700 hover:text-black">
            My Event
          </Link>
          <Link
            href="/login"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
