"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/60 shadow-md sticky backdrop:blur-3xl top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-500">
              Pranav
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-black hover:text-gray-900">
              Home
            </Link>
            <Link href="/#about" className="text-black hover:text-gray-900">
              About
            </Link>
            <Link href="/#project" className="text-black hover:text-gray-900">
              Project
            </Link>
            <Link href="/#experience" className="text-black hover:text-gray-900">
              Experience
            </Link>
            <Link href="/#contact" className="text-black hover:text-gray-900">
              Contact
            </Link>
          </div>
          <div className="flex md:hidden items-center">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            Home
          </Link>
          <Link href="/#about" onClick={() => setIsOpen(false)} className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            About
          </Link>
          <Link href="/#services" onClick={() => setIsOpen(false)} className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            Services
          </Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
}
