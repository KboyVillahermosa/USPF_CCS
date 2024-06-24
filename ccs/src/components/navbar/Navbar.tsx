"use client";
import React, { useEffect, useState } from "react";
import { Navbar } from "flowbite-react";
import './Navbar.css';

export function Component() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="bg-transparent">
        <Navbar className={`nav fixed z-10 w-full ${scrolled ? 'navbar-scrolled' : 'bg-transparent'}`}>
          <Navbar.Brand href="">
            <img src="/ccs.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
            <span className={`self-center whitespace-nowrap text-xl font-semibold dark:text-white ${scrolled ? 'hover:text-yellow-300' : 'text-white'}`}>
              USPF CCS
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="bg-transparent">
            <Navbar.Link href="#" className={`nav navbar-link text-white ${scrolled ? 'navbar-link-scrolled text-black'  : ''}`}>
              Home
            </Navbar.Link>
            <Navbar.Link href="#" className={`nav navbar-link text-white ${scrolled ? 'navbar-link-scrolled text-black' : ''}`}>
              About
            </Navbar.Link> 
            <Navbar.Link href="/message" className={`nav navbar-link text-white ${scrolled ? 'navbar-link-scrolled text-black' : ''}`}>
              Offers
            </Navbar.Link>
            <Navbar.Link href="/spline" className={`nav navbar-link text-white ${scrolled ? 'navbar-link-scrolled text-black' : ''}`}>
              Spline
            </Navbar.Link>
            <Navbar.Link href="#" className={`nav navbar-link text-white ${scrolled ? 'navbar-link-scrolled text-black' : ''}`}>
              Contact
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </main>
    </>
  );
}
