"use client";
import {  Navbar, DarkThemeToggle, Dropdown } from "flowbite-react";
import "./Navbar.css";

export function Component() {
  return (
    <>
      <main className="bg-blue-50 dark:bg-gray-900">
        <Navbar
          fluid
          rounded
          className="navbar fixed z-10 w-full bg-transparent dark:bg-gray-900 "
        >
          <Navbar.Brand href="/">
            <img
              src="/ccs.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              USPF CCS
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <div className="dark-mode">
              <DarkThemeToggle className="mr-2" />
            </div>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="/" className="nav text-blue-500">
              Home
            </Navbar.Link>
            <Navbar.Link href="/about" className="nav">
              About
            </Navbar.Link>
            
            <div className="dropdown border-white dark:border-gray-600 text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-600">
              <Dropdown
                label=""
                dismissOnClick={false}
                renderTrigger={() => <span>Download</span> }
              >
                <Dropdown.Item href="https://drive.google.com/file/d/1WGcEdMgDJj5w7zu25mU3pfy9xy5GVFk3/view?usp=sharing">
                  BSCS Prospectus
                </Dropdown.Item>
                <Dropdown.Item href="https://drive.google.com/file/d/1vaKDuSuTFHK2QZekie4OyB95OyOTnwV7/view?usp=sharing">
                  BSIT Prospectus
                </Dropdown.Item>
              </Dropdown>
            </div>

            <Navbar.Link href="/officers" className="nav">
             officer
            </Navbar.Link>
            <Navbar.Link href="#" className="nav">
              Contact
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </main>
    </>
  );
}
