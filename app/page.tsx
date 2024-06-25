import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">EventWays</h1>
          <nav className="space-x-4">
            <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
            <Link href="/event" className="text-gray-700 hover:text-black">My Event</Link>
            <Link href="/login" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Login</Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow">
        <section className="h-[500px] bg-cover bg-center relative" style={{ backgroundImage: "url('/assets/background.jpg')" }}>
          <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-white">Momen Spesial Anda</h2>
            <p className="text-xl text-white mt-4">Buat dan Bagikan Undangan Acara dengan Mudah dan Elegan</p>
            <button className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-800">Buat Undangan</button>
          </div>
        </section>
        
      </main>
      
      <footer className="bg-gray-100 p-4 text-center">
        <p>&copy; 2024 EventWays. All rights reserved.</p>
      </footer>
    </div>
  );
}
