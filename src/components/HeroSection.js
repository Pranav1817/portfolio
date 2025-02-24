"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img from '/public/section1.png';
import { DialogPanel, Dialog } from '@headlessui/react';
import resume from '@/app/resume/pranavkumbhalkarsde1.pdf';
export default function HeroSection() {
  const [certificateUrl, setCertificateUrl] = useState('');
  const [open, setOpen] = useState(false);
  const handleCardClick = (certificate) => {
    setCertificateUrl(certificate);
    setOpen(true);
  };
    return (
        <section className="relative flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white h-full">

          <div className="container my-10 mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:items-stretch space-y-10 lg:space-y-0 lg:space-x-16 max-h-screen">
            
            {/* Left Side: Profile Picture and Name */}
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <Image
                src={img} 
                alt="Pranav Keshao Kumbhalkar"
                width={150}
                height={150}
                className="rounded-full mb-6 shadow-2xl border-4 border-white"
              />
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-2 ">Pranav Keshao Kumbhalkar</h1>
              <p className="text-lg lg:text-2xl font-semibold">Software Developer | Freelancer | Security Engineer</p>
            </div>
    
            {/* Right Side: Brief Introduction and Call to Action */}
            <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-justify">
              <p className="text-lg font-semibold lg:text-xl max-w-xl leading-relaxed mx-auto lg:mx-0">
                I am a passionate Software Developer with experience in full-stack development, 
                specializing in modern web technologies. Currently I am working at Accenture in Pune as a Security Delivery Associate in Identiy and Access Mangement domain using CyberArk
              </p>
              <div className="my-6 flex gap-3 " >
                <Link href="/#project" className="font-bold inline-block bg-white text-blue-600 text-lg px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                    View Projects
                </Link>
                <button onClick={() => handleCardClick(resume)} className=" inline-block bg-white  text-blue-600 font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                        Resume
                </button>
              </div>
            </div>
          </div>
          <Dialog open={open} onClose={() => setOpen(false)} className="fixed inset-0 flex items-center justify-center p-4">
                  <DialogPanel className="bg-white rounded-lg p-6 shadow-lg w-[90vw] h-[80vh]">
                    <iframe src={certificateUrl} className="w-full h-[90%]" />
                    <div className="mt-4 flex justify-between">
                      <button onClick={() => window.open(certificateUrl, '_blank')} className="text-blue-500 underline">
                        Open in New Window
                      </button>
                      <button onClick={() => setOpen(false)} className="text-red-500 underline">
                        Close
                      </button>
                    </div>
                  </DialogPanel>
                </Dialog>
        </section>
      );
}