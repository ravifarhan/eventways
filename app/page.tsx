"use client";

import { useRouter } from "next/navigation";
import Header from "./components/Header";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section
          className="h-[500px] bg-cover bg-center relative"
          style={{ backgroundImage: "url('/assets/background.jpg')" }}
        >
          <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-white">
              Momen Spesial Anda
            </h2>
            <p className="text-xl text-white mt-4">
              Buat dan Bagikan Undangan Acara dengan Mudah dan Elegan
            </p>
            <button
              onClick={() => router.push("/add-events")}
              className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
            >
              Buat Undangan
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 p-4 text-center">
        <p>&copy; 2024 EventWays. All rights reserved.</p>
      </footer>
    </div>
  );
}
