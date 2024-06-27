
"use client";
import { Button, Navbar, DarkThemeToggle } from "flowbite-react";
import './Navbar.css'

export function Component() {
  return (
    <>
     <main className="dark:bg-gray-900 bg-blue-100">
    <Navbar fluid rounded className="dark:bg-gray-900 bg-blue-50">
      <Navbar.Brand href="/">
        <img src="/ccs.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">USPF CCS</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className="dark-mode">
        <DarkThemeToggle className="mr-2"/>
        </div>
        <Button color="blue" className="mr-2">Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className="nav text-blue-500">
          Home
        </Navbar.Link>
        <Navbar.Link href="/about" className="nav">About</Navbar.Link>
        <Navbar.Link href="#" className="nav">Downloads</Navbar.Link>
        <Navbar.Link href="#" className="nav">Pricing</Navbar.Link>
        <Navbar.Link href="#" className="nav">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </main>
    </>
  );
}
