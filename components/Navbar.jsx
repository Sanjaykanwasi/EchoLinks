"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, Bell, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Shorten", href: "/shorten" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={` fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-800/90 backdrop-blur-md shadow-lg border-b border-slate-700/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <img src="/logo.png" alt="" />
                </div>
                <span
                  className={`text-xl font-bold ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                >
                  EchoLinks
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span
                      className={`px-4 py-2 rounded-lg ${
                        isScrolled ? "text-gray-200" : "text-white"
                      }  hover:bg-gray-50/10 transition-all duration-200 font-medium cursor-pointer`}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/shorten">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer">
                  Try Now
                </button>
              </Link>
              <Link href="/github">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer">
                  Github
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg ${isScrolled ? 'text-gray-200' : 'text-gray-200'} hover:text-purple-400 hover:bg-gray-50/10 transition-colors duration-200`}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className="block px-3 py-2 rounded-lg text-gray-200 hover:text-purple-400 hover:bg-slate-700/50 transition-colors duration-200 font-medium cursor-pointer">
                    {item.name}
                  </span>
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-700/30">
                <Link href="/get-started">
                  <span className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 text-center cursor-pointer">
                    Get Started
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
