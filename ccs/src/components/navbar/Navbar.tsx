"use client";

import { Navbar} from "flowbite-react";
import './Navbar.css';

export function Component() {
  return (
    <>
      <main className="bg-transparent">
        <Navbar className="fixed z-10 w-full bg-transparent">
          <Navbar.Brand href="">
            <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-white">Adventure Time</span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="bg-transparent">
            <Navbar.Link href="#" className="nav text-white hover:text-yellow-300 ">
              Home
            </Navbar.Link>
            <Navbar.Link href="#" className="nav text-white ">About</Navbar.Link>
            <Navbar.Link href="/message" className="nav text-white ">Message</Navbar.Link>
            <Navbar.Link href="/spline" className="nav text-white ">Spline</Navbar.Link>
            <Navbar.Link href="#" className="nav text-white ">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </main>
    </>
  );
}
