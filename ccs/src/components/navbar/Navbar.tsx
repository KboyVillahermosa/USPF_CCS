
"use client";

import { Button, Navbar } from "flowbite-react";
import './Navbar.css'

export function Component() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/ccs.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">USPF CCS</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button color="blue">Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" className="nav text-blue-500 hover:text-blue-800" >
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="nav hover:text-blue-500">About</Navbar.Link>
        <Navbar.Link href="#" className="nav hover:text-blue-800">Services</Navbar.Link>
        <Navbar.Link href="#" className="nav hover:text-blue-800">Pricing</Navbar.Link>
        <Navbar.Link href="#" className="nav ">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
