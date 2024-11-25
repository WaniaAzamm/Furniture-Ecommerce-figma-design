import React from 'react';
import Image from 'next/image';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="relative">
      
      <Image
        className="absolute right-0 -top-52" 
        src="/sofa1.png"
        width={524}
        height={324}
        alt="Sofa"
      />

      <div className="bg-[#FAF3E0] text-gray-800 mt-64 pt-52 pb-16 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Subscribe to Newsletter</h3>
            <p className="text-sm mb-4">Get updates and news delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="flex-1 p-2 border border-gray-300 rounded"
                required
              />
              <input 
                type="email" 
                placeholder="Enter your e-mail" 
                className="flex-1 p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button type="submit" className="bg-gray-800 text-white bg-black px-6 py-2 rounded-full w-full sm:w-auto">Subscribe</button>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">CasaDesigns</h2>
            <p className="text-sm mb-4">
            Expert designs, personalized service            </p>
            <div className="flex gap-4 mb-6">
              <span  className='w-50 h-20 size-9 text-3xl'><FaFacebook/></span>                 
              <span className='w-50 h-20 size-9 text-3xl'><FaLinkedin/></span>
              <span className='w-50 h-20 size-9 text-3xl'><FaYoutube/></span>       
              <span className='w-50 h-20 size-9 text-3xl'><FaGithub/></span> 

                      </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#aboutus" className="hover:underline">About us</a></li>
              <li><a href="#products" className="hover:underline">Products</a></li>
              <li><a href="#aboutus" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-4 text-sm text-center text-gray-500">
          <p>© 2024 waniaazam605@gmail.com. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#terms" className="hover:underline">Terms & Conditions</a>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
