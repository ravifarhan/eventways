import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-600">EventWays</h1>
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-black font-semibold">
            Home
          </Link>
          <Link href="/events" className="text-gray-600 hover:text-black font-semibold">
            My Event
          </Link>
          <Link
            href="/login"
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900"
          >
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
