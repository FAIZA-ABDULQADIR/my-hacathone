"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
const RoomInspiration = () => {
  return (
    
    <div className="bg-[#fdf7f1] py-12">
      <div className="flex items-center gap-8 ">
        {/* Left Content */}
        <div className="text-left pl-[100px] pr-[42px] flex flex-col gap-[25px]">
          <div className="flex flex-col gap-2">
            <h2 className="text-[40px] font-bold text-Gray1 leading-[42px]">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-[16px] font-medium text-Gray2">
              Our designer already made a lot of beautiful prototype of rooms
              that inspire you.
            </p>
          </div>
          <button 
  style={{ backgroundColor: '#B88E2F' }}
  className="hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 text-white px-9 py-3 font-semibold text-lg w-fit transition duration-150 ease-in-out cursor-pointer hover:scale-105 hover:shadow-lg"
  aria-label="Explore more about our services"
>
  Explore More
</button>

        </div>

        {/* Right Content */}
        <div className="w-full md:flex hidden items-center justify-center gap-8 ">
          {/* Main Image */}
          <div className="relative w-[404px] h-[582px] overflow-hidden ">
            
            <Image src="/image1.png"
              alt="Inner Peace"
              className="w-full h-full object-cover"
              width={900} height={100}
              ></Image>
            <div className="absolute bottom-6 left-6 bg-white bg-opacity-70 p-8 ">
              <p className="text-[16px] font-medium text-Gray2">
                01 —— Bed Room
              </p>
              <h3 className="text-[28px] font-semibold text-Gray1">
                Inner Peace
              </h3>
            </div>
            <div 
  style={{ backgroundColor: '#B88E2F' }}
  className="p-3 w-12 h-12 absolute bottom-6 right-24 hover:bg-amber-700 transition duration-300 ease-in-out cursor-pointer hover:scale-110"
>
  <Icon
    icon="solar:arrow-right-outline"
    className="text-white w-6 h-6 hover:text-gray-300 transition-transform duration-300 ease-in-out"
  />
</div>



          </div>

          {/* Smaller Images */}
          <div className="flex flex-col justify-between h-[582px]">
            <div className="flex h-[486px] gap-[24px] ">
              <div className="w-[372px]  overflow-hidden">
                
                <Image src="/image2.png"
                  alt="Modern Vibes"
                  className="object-cover"
                  width={900} height={100}></Image>
              </div>
              <div className="w-fit h-[450px] overflow-hidden">
                
                <Image src="/image3.png"
                  alt="Modern Vibes"
                  className="object-contain"
                  width={60} height={100}></Image>
              </div>
            </div>
            <div className="flex gap-[20px] items-center mb-[30px]">
              <span className="w-[27px] h-[27px] rounded-full border border-primary cursor-pointer bg-transparent flex justify-center items-center">
                <div className="bg-primary w-[11px] h-[11px] rounded-full"></div>
              </span>
              <span className="bg-Gray5 w-[11px] h-[11px] rounded-full"></span>
              <span className="bg-Gray5 w-[11px] h-[11px] rounded-full"></span>
              <span className="bg-Gray5 w-[11px] h-[11px] rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default RoomInspiration;