"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Film, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MovieSearch from "./MovieSearch";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get banner height (400px) plus any additional spacing
      const bannerHeight = 400;
      setIsScrolled(window.scrollY > bannerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full transition-all duration-300 ${
        isScrolled ? "fixed top-0 bg-gray-800 shadow-lg z-50" : "bg-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Film className="h-8 w-8 text-white" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/whatson"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  What&apos;s On
                </Link>
                <Link
                  href="/comingsoon"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Coming Soon
                </Link>
                <Link
                  href="/eats"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Eats
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <MovieSearch />
          </div>
          <div className="-mr-2 flex md:hidden">
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/whatson"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              What&apos;s On
            </Link>
            <Link
              href="/comingsoon"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Coming Soon
            </Link>
            <Link
              href="/eats"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Eats
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="px-2">
              <MovieSearch />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
