"use client";
import React, { useState } from "react";

import Image from "next/image";
import { BsPlusCircleFill } from "react-icons/bs";
import { LuBus } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { TbClock24 } from "react-icons/tb";
import { TbArrowsDiff } from "react-icons/tb";
import Link from "next/link";

export default function page() {
  const [count , setcount] = useState(0)
  const toggle = () => {
    setcount(count + 1)
  }
  return (
    <div>

      <div id="home"  className="min-h-screen flex justify-between bg-customGray pt-[127px] ">

        <div>
          <h1 className="text-[54px] font-semibold text-white mt-32 ml-32 font-sans animate-fade-left animate-delay-700
">
          Discover the art of home elegance          </h1>
          <div className="flex mt-32 ml-[120px] gap-14">
            <button className="text-black animate-fade-down animate-delay-500 px-[54px] py-[24px] bg-brown text-[20px] rounded-full transition-transform hover:scale-110 ease-in-out duration-700">
              <Link href="#products">Shop Now </Link>
            </button>
            <button className=" px-[54px] py-[24px] animate-fade-down animate-delay-700 text-[20px] text-white border  border-white rounded-full transition-transform hover:scale-110 ease-in-out duration-700">
              <Link href="#products">Explore </Link>
            </button>
          </div>
        </div>
        
        <div className="animate-fade-up animate-delay-700"
      >
          <Image
            className="pr-9 mr-4 "
            src="/couch.png"
            width={1300}
            height={781}
            alt="couch"
          />
        </div>
        <span className="fixed top-8 right-28 bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
              {count}
            </span>
      </div>

      <div id="latest" className="min-h-screen bg-gray ">
        <div className=" flex gap-5 px-44 ">
          <div className="w-[237px] h-[349px] pt-[192px] animate-fade-up animate-delay-500 ">
            <h1 className="text-green-800 text-[34px] font-bold font-sans">
              Crafted with excellent material.
            </h1>
            <p className="text-slate-600 mt-6">
            Transform your space into a sanctuary of style and comfort with our curated interior design and home decor solutions.
            </p>
            <button className="text-black mt-14  px-[48px] py-[22px] bg-customGray  text-[20px] rounded-full transition-transform hover:scale-110 ease-in-out duration-700">
              <Link href="#products">Explore</Link> 
            </button>
          </div>

          <div>
            <div className="pt-[540px] absolute pl-[170px] ">
              <h1 className="text-[21px] text-black font-sans font-semibold">
                Nordic CHAIR
              </h1>
              <p className="pl-7 text-[22px]  font-bold text-black">$50.00</p>
              
              <span className="">
                <BsPlusCircleFill className="w-[120px] shadow-black  mt-16 h-[40px] " />
              </span>
            </div>
            <Image
              className="ml-28 pt-[182px] absolute"
              src="/ch1.png"
              width={229}
              height={261}
              alt="chair1"
            />
            <Image
              className=" mt-[340px] ml-[60px] mb-32 "
              src="/rec1.png"
              width={339}
              height={161}
              alt="chair1"
            />
          </div>
          <div>
            <div className="pt-[540px] absolute pl-[130px]">
              <h1 className="text-[21px] text-black font-sans font-semibold">
                Kruzo Aero Chair{" "}
              </h1>
              <p className="pl-7 text-[22px]  font-bold text-black">$78.00</p>
            </div>
            <Image
              className="ml-16 pt-44 absolute"
              src="/ch2.png"
              width={287}
              height={349}
              alt="chair1"
            />
          </div>
          <div>
            <div className="pt-[540px] absolute pl-[450px]">
              <h1 className="text-[21px] text-black font-sans font-semibold">
                Ergonomic Chair{" "}
              </h1>
              <p className="pl-7 text-[22px]  font-bold text-black">$43.00</p>
            </div>
            <Image
              className="ml-[430px] pt-44 relative"
              src="/ch3.png"
              width={183}
              height={235}
              alt="chair3"
            />
          </div>
        </div>
      </div>
      <div id="aboutus" className="min-h-screen flex justify-between pt-12 px-20 bg-grayish">
        <div className="pt-14 pl-12 w-[700px]">
          <h1 className=" text-[34px] font-semibold text-green-800   ">
            Why Choose Us
          </h1>
          <p className="text-[16px] text-slate-700  pt-11 w-[444px] ">
          Expert designs, personalized service, and quality that transforms spaces into stylish, comfortable homes. 
          </p>
          <div className="grid grid-cols-2 pt-14 gap-12">
            <div>
              <span ><LuBus className="w-[34px] h-[56px] "/></span>
              <h1>Fast  & Free Shipping </h1>
              <p className="pt-2 text-[14px] text-slate-700 "> Enjoy free, fast shipping on every order—bringing your dream space to life, quickly..</p>
            </div>
            <div>
              {" "}
              <span  ><FiShoppingBag className="w-[34px] h-[56px] "/></span>
              <h1>Easy to Shop</h1>
              <p className="pt-2 text-[14px] text-slate-700 ">Shop with ease and convenience—find everything you need to create your perfect space.</p>
            </div>
            <div>
              {" "}
              <span><TbClock24 className="w-[34px] h-[56px] "/></span>
             <h1>24/7 Support</h1>
             <p className="pt-2 text-[14px] text-slate-700 ">Our team is here for you, 24/7—ready to assist whenever you need.</p>
    
            </div>
            <div>
              {" "}
              <span><TbArrowsDiff  className="w-[34px] h-[56px] "/>
              </span>
              <h1>Hassle Free Returns</h1>
              <p className="pt-2 text-[14px] text-slate-500 ">Hassle-free returns for peace of mind, making decorating your home worry-free.</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            className=" rounded-sm  "
            src="/m1.png"
            width={542}
            height={709}
            alt="mask"
          />
        </div>
      </div>
      <div className="min-h-screen bg-gray pt-16 ">
        
        <div id="design"><h1 className="font-semibold text-[44px] text-green-950 font-serif text-center ">Our Designs</h1></div>
        <div className="grid grid-cols-4 pl-20  pt-16 ">
          <div><Image src="/p1.jpg" height={162} width={285} alt="product pic" /> </div>
          <div><Image src="/p2.jpg" height={162} width={285} alt="product pic" /> </div>
          <div><Image src="/p3.jpg" height={162} width={285} alt="product pic" /> </div>
          <div><Image src="/p4.jpg" height={162} width={285} alt="product pic" /> </div>
          <div><Image src="/p5.jpg" height={162} width={285} alt="product pic"  /> </div>
          <div><Image src="/p6.jpg" height={162} width={285} alt="product pic" className="pt-3"/> </div>
          <div><Image src="/p7.jpg" height={162} width={285} alt="product pic" /> </div>
          <div><Image src="/p8.jpg" height={162} width={285} alt="product pic" /> </div>
        </div>
      </div>
      <div className="min-h-screen bg-[url('/bgn.jpg')] bg-no-repeat bg-cover relative flex items-center">
  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 pl-24 pt-28 flex-1">
    <div className="text-white">
      <h1 className="text-9xl font-bold">Huge Sale!</h1>
      <p className="mt-9 text-3xl">Save 30% on all Sofas!</p>
      <button className="mt-8 px-14 py-3 bg-customGray text-white rounded-full text-lg hover:bg-gray hover:text-black transition-all duration-300">
        <Link href="#products">Shop Now</Link> 
      </button>
    </div>
  </div>

  <div className="absolute right-28 top-0 bottom-0 flex justify-end items-center">

<Image
src="/bg6.jpg"
alt="sofas"
width={450}
height={50}
/>
  </div>
</div>

<div id="products" className="min-h-[200vh] bg-white">
  <h1 className="text-green-950 text-[54px] font-bold font-serif  pt-10 text-center ">Buy Your Favourites</h1>
 <div className="pt-14 pl-24 grid grid-cols-4 gap-16">
  <div className="w-[270px] h-[350px]   " ><Image src="/1.jpg" width={500} height={100} alt="productpic"  className="transition-transform duration-700 ease-in-out hover:scale-110" /><div className="flex justify-between pt-8 text-[15px] font-semibold -"><h1 className="text-[20px]">Vantage</h1><button onClick={toggle} className="bg-customGray px-4 py-3 rounded-full hover:bg-opacity-65 hover:transition-all duration-500 ">Add to Cart</button><span className="text-[18px]">$120.00</span></div></div>
  <div className="w-[270px] h-[350px]  " ><Image src="/2.jpg" width={500} height={100} alt="productpic" className="transition-transform duration-700 ease-in-out hover:scale-110" /><div className="flex justify-between pt-8 text-[15px] font-semibold -"><h1 className="text-[20px]">Flux </h1><button onClick={toggle}  className="bg-customGray px-4 py-3 rounded-full hover:bg-opacity-65 hover:transition-all duration-500 ">Add to Cart</button><span className="text-[18px]">$190.00</span></div></div>
  <div className="w-[270px] h-[350px]  " ><Image src="/3.jpg" width={500} height={100} alt="productpic" className="transition-transform duration-700 ease-in-out hover:scale-110" /><div className="flex justify-between pt-8 text-[15px] font-semibold -"><h1 className="text-[20px]">Echo </h1><button onClick={toggle}  className="bg-customGray px-4 py-3 rounded-full hover:bg-opacity-65 hover:transition-all duration-500 ">Add to Cart</button><span className="text-[18px]">$140.00</span></div></div>
  <div className="w-[270px] h-[350px]  " ><Image src="/4.jpg" width={500} height={100} alt="productpic" className="transition-transform duration-700 ease-in-out hover:scale-110" /><div className="flex justify-between pt-8 text-[15px] font-semibold -"><h1 className="text-[20px]">Zephyr </h1><button onClick={toggle}  className="bg-customGray px-4 py-3 rounded-full hover:bg-opacity-65 hover:transition-all duration-500 ">Add to Cart</button><span className="text-[18px]">$160.00</span></div></div>
  <div className="w-[270px] h-[350px]  " ><Image src="/5.jpg" width={500} height={100} alt="productpic" className="transition-transform duration-700 ease-in-out hover:scale-110" /><div className="flex justify-between pt-8 text-[15px] font-semibold -"><h1 className="text-[20px]">Maverick </h1><button onClick={toggle}  className="bg-customGray px-4 py-3 rounded-full hover:bg-opacity-65 hover:transition-all duration-500 ">Add to Cart</button><span className="text-[18px]">$110.00</span></div></div>
  <div className="w-[270px] h-[350px]  " ><Image src="/p1.jpg" width={500} height={100} alt="productpic" className="transition-transform duration-700 ease-in-out hover:scale-110"/><div className="flex justify-between pt-8 text-[15px] font-semibold -"><h1 className="text-[20px]">Nimbus </h1><button onClick={toggle}  className="bg-customGray px-4 py-3 rounded-full hover:bg-opacity-65 hover:transition-all duration-500 ">Add to Cart</button><span className="text-[18px]">$230.00</span></div></div>
  <div className="w-[270px] h-[350px]  " ><Image src="/7.jpg" width={500} height={100} alt="productpic"  className="transition-transform duration-700 ease-in-out hover:scale-110"/><div className="flex justify-between pt-8 text-[15px] font-semibold -"><h1 className="text-[20px]">Bolt </h1><button onClick={toggle}  className="bg-customGray px-4 py-3 rounded-full hover:bg-opacity-65 hover:transition-all duration-500 ">Add to Cart</button><span className="text-[18px]">$105.00</span></div></div>
  <div className="w-[250px] h-[300px]  " ><Image src="/8.jpg" width={500} height={80} alt="productpic" className="transition-transform duration-700 ease-in-out hover:scale-110" /><div className="flex justify-between pt-8 text-[15px] font-semibold -"><h1 className="text-[20px]">Haven </h1><button onClick={toggle}  className="bg-customGray px-4 py-3 rounded-full hover:bg-opacity-65 hover:transition-all duration-500 ">Add to Cart</button><span className="text-[18px]">$180.00</span></div></div>
  <div className="w-[270px] h-[350px]  " ><Image src="/p3.jpg" width={500} height={100} alt="productpic" className=" transition-transform duration-700 ease-in-out hover:scale-110" /><div className="flex justify-between pt-8 text-[15px] font-semibold -"><h1 className="text-[20px]">Snugsy  </h1><button onClick={toggle}  className="bg-customGray px-4 py-3 rounded-full hover:bg-opacity-65 hover:transition-all duration-500 ">Add to Cart</button><span className="text-[18px]">$294.00</span></div></div>
  <div className="w-[270px] h-[350px]  " ><Image src="/p5.jpg" width={500} height={100} alt="productpic" className="transition-transform duration-700 ease-in-out hover:scale-110" /><div className="flex justify-between pt-8 text-[15px] font-semibold -"><h1 className="text-[20px]">Loaftopia  </h1><button onClick={toggle}  className="bg-customGray px-4 py-3 rounded-full hover:bg-opacity-65 hover:transition-all duration-500 ">Add to Cart</button><span className="text-[18px]">$140.00</span></div></div>
  <div className="w-[270px] h-[350px]  " ><Image src="/p8.jpg" width={500} height={100} alt="productpic" className="transition-transform duration-700 ease-in-out hover:scale-110" /><div className="flex justify-between pt-8 text-[15px] font-semibold -"><h1 className="text-[20px]">Nestle </h1><button onClick={toggle}  className="bg-customGray px-4 py-3 rounded-full hover:bg-opacity-65 hover:transition-all duration-500 ">Add to Cart</button><span className="text-[18px]">$230.00</span></div></div>
  <div className="w-[270px] h-[350px]  " ><Image src="/n1.jpg" width={500} height={100} alt="productpic" className="transition-transform duration-700 ease-in-out hover:scale-110" /><div className="flex justify-between pt-8 text-[15px] font-semibold -"><h1 className="text-[20px]">Plushion </h1><button onClick={toggle}  className="bg-customGray px-4 py-3 rounded-full hover:bg-opacity-65 hover:transition-all duration-500 ">Add to Cart</button><span className="text-[18px]">$280.00</span></div></div>

 </div>
    </div>
    </div>
  );
}
