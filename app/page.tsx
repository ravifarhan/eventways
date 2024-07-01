"use client";

import { useRouter } from "next/navigation";
import Header from "./components/Header";

export default function Home() {
  const router = useRouter();
  return (
    <>
      {/* <div className="flex flex-col h-screen"> */}
        <Header />
        <div
          className="h-[500px] flex flex-col justify-center items-center bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/background.jpg')` }}
        >
          {/* <div className="absolute h-[500px] bg-black bg-opacity-10 backdrop-blur-sm"></div> */}
          <div className="relative text-center p-6 rounded-lg">
            <h2 className="text-4xl font-bold text-white text-shadow-lg">
              Momen Spesial Anda
            </h2>
            <p className="text-xl text-white mt-4 text-shadow-md">
              Buat dan Bagikan Undangan Acara dengan Mudah dan Elegan
            </p>
            <button
              onClick={() => router.push("/add-events")}
              className="mt-6 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900"
            >
              Buat Undangan
            </button>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}
