"use client";

import { useRouter } from "next/navigation";
import Header from "./components/Header";
import { FaCheckCircle } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { MdAutoAwesome } from "react-icons/md";
import { MdFamilyRestroom } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { LiaRingSolid } from "react-icons/lia";
import { FaHouse } from "react-icons/fa6";
import { LuBaby } from "react-icons/lu";
import { FaBuilding } from "react-icons/fa6";
import { FaHandsClapping } from "react-icons/fa6";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Header />
      <div
        className="h-[500px] flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/background.jpg')` }}
      >
        <div className="absolute inset-0 mt-14 h-[500px] bg-black bg-opacity-10 backdrop-blur-sm"></div>
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

      <div className="mt-[30px] max-w-[1000px] m-auto mb-[30px]">
        <h2 className="text-[40px] font-bold text-center">Keep It Simple</h2>
        <p className="text-center text-[20px] mt-[20px]">
          No math degree needed to understand our pricing. It's free or cheap. A
          no-brainer for every self-respecting organisation or event agency. One
          flat fee per organization, no per user fees.
        </p>

        <div className="grid grid-cols-2 gap-[30px] mt-[30px]">
          <div className="bg-white p-[50px] rounded-lg shadow-2xl hover:translate-y-[-10px] transition-all duration-300">
            <p className="text-[24px] text-black font-[700]">Free</p>
            <p className="text-black font-[400] text-[18px] mt-[10px]">
              Ideal for personal events: b’day bashes, mixers & showers, dinner
              parties, graduations.
            </p>

            <p className="text-[20px] text-black font-[500] mt-[50px]">
              Free Includes
            </p>

            <div className="flex flex-col gap-[10px] mt-[20px]">
              <div className="flex gap-2">
                <FaCheckCircle size={24} color="green" />
                <p className="text-black font-[400]">Unlimited attendees</p>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle size={24} color="green" />
                <p className="text-black font-[400]">Bring a +1 feature</p>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle size={24} color="green" />
                <p className="text-black font-[400]">Google Maps integration</p>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle size={24} color="green" />
                <p className="text-black font-[400]">Add payment link</p>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle size={24} color="green" />
                <p className="text-black font-[400]">E-mail reminders</p>
              </div>
            </div>

            <p className="text-[70px] text-black font-[700] mt-[20px]">$0</p>
            <p className="text-[20px] text-black font-[400]">
              No Acount Nedeed
            </p>

            <button className="mt-6 bg-transparent border border-black text-black px-4 py-2 rounded-[30px] hover:bg-black hover:text-white">
              Create Free Acount
            </button>
          </div>

          <div className="bg-white p-[50px] rounded-lg shadow-2xl hover:translate-y-[-10px] transition-all duration-300">
            <p className="text-[24px] text-black font-[700]">Pro</p>
            <p className="text-black font-[400] text-[18px] mt-[10px]">
              Perfect for professional events: small summits, galas &
              fundraisers, launch events.
            </p>

            <p className="text-[20px] text-black font-[500] mt-[50px]">
              Free Includes
            </p>

            <div className="flex flex-col gap-[10px] mt-[20px]">
              <div className="flex gap-2">
                <FaCheckCircle size={24} color="green" />
                <p className="text-black font-[400]">
                  Upload your own background
                </p>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle size={24} color="green" />
                <p className="text-black font-[400]">
                  Choose background from gallery
                </p>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle size={24} color="green" />
                <p className="text-black font-[400]">
                  Organize multiple events
                </p>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle size={24} color="green" />
                <p className="text-black font-[400]">
                  Ask for marketing consent
                </p>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle size={24} color="green" />
                <p className="text-black font-[400]">
                  Additional information attendees
                </p>
              </div>
            </div>

            <p className="text-[70px] text-black font-[700] mt-[20px]">$9</p>
            <p className="text-[20px] text-black font-[400]">
              Per month, billed annually
            </p>

            <button className="mt-6 bg-success text-white px-4 py-2 rounded-[30px] hover:bg-transparent hover:text-success hover:border hover:border-success">
              Request Early Access
            </button>
          </div>
        </div>
      </div>

      <div className="bg-primary py-[30px] mt-[50px]">
        <p className="text-white text-[40px] font-[700] text-center mb-[50px]">
          For individuals and companies
        </p>

        <div className="grid grid-cols-3 gap-10 max-w-[1000px] m-auto">
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white p-4 rounded-full">
              <FaRocket size={40} color="#3c699c" />
            </div>
            <p className="text-white text-[24px] font-[500] mt-[20px]">
              Ultra fast setup
            </p>
            <p className="text-white text-[14px] font-[400] text-center mt-[10px]">
              From scratch to accepting RSVP's in 60 seconds. No really, that's
              all it takes.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="bg-white p-4 rounded-full">
              <FaHandshake size={40} color="#3c699c" />
            </div>
            <p className="text-white text-[24px] font-[500] mt-[20px]">
              Easy to manage
            </p>
            <p className="text-white text-[14px] font-[400] text-center mt-[10px]">
              Invite your guest through Whatsapp or e-mail and collect RSVP's in
              no-time.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="bg-white p-4 rounded-full">
              <MdAutoAwesome size={40} color="#3c699c" />
            </div>

            <p className="text-white text-[24px] font-[500] mt-[20px]">
              Beautiful invites
            </p>
            <p className="text-white text-[14px] font-[400] text-center mt-[10px]">
              Desktop, tablet or mobile.. it just looks slick. No design-skills
              needed.
            </p>
          </div>
        </div>
      </div>

      <div className="py-[30px]">
        <p className="text-black text-[40px] font-[700] text-center mb-[30px]">
          Use EventWays For
        </p>

        <div className="grid grid-cols-3 gap-[30px] max-w-[1000px] m-auto">
          <div className="bg-white px-[30px] py-[50px] rounded-lg shadow-2xl flex flex-col gap-[50px] hover:translate-y-[-10px] transition-all duration-300">
            <div className="flex gap-2 items-center">
              <MdFamilyRestroom size={30} />
              <p className="text-black text-[20px] font-[700]">
                Family reunion
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <IoFastFood size={30} />
              <p className="text-black text-[20px] font-[700]">Dinner Party</p>
            </div>

            <div className="flex gap-2 items-center">
              <FaGraduationCap size={30} />
              <p className="text-black text-[20px] font-[700]">Graduation</p>
            </div>
          </div>

          <div className="bg-white px-[30px] py-[50px] rounded-lg shadow-2xl flex flex-col gap-[50px] hover:translate-y-[-10px] transition-all duration-300">
            <div className="flex gap-2 items-center">
              <LiaRingSolid size={30} />
              <p className="text-black text-[20px] font-[700]">
                Wedding Shower
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <FaHouse size={30} />
              <p className="text-black text-[20px] font-[700]">house warming</p>
            </div>

            <div className="flex gap-2 items-center">
              <LuBaby size={30} />
              <p className="text-black text-[20px] font-[700]">baby Shower</p>
            </div>
          </div>

          <div className="bg-white px-[30px] py-[50px] rounded-lg shadow-2xl flex flex-col gap-[50px] hover:translate-y-[-10px] transition-all duration-300">
            <div className="flex gap-2 items-center">
              <FaRocket size={30} />
              <p className="text-black text-[20px] font-[700]">launch Event</p>
            </div>

            <div className="flex gap-2 items-center">
              <FaBuilding size={30} />
              <p className="text-black text-[20px] font-[700]">
                Company Building
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <FaHandsClapping size={30} />
              <p className="text-black text-[20px] font-[700]">
                Farewell Party
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
