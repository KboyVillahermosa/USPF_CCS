// src/components/Testimonials.tsx
import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Carousel } from "flowbite-react";
import "./Textimonials.css";

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="about-title">
        <div className="about-title-content">
          <h1></h1>
        </div>
      </div>
      <main className="dark:bg-gray-800">
        <div className="about ">
          <div className="about-content">
            <div className="h-full">
              <Carousel
                leftControl={
                  <span className="control text-2xl">
                    <FaAngleLeft />
                  </span>
                }
                rightControl={
                  <span className="control text-2xl">
                    <FaAngleRight />
                  </span>
                }
              >
                <div className="flex h-full items-center justify-center">
                  <div className="slider">
                    <div className="slider-content">
                      <img src="/ccs.png" alt="" />
                    </div>
                    <div className="slider-text">
                      <h1>Hello</h1>
                    </div>
                  </div>
                </div>
                <div className="flex h-full items-center justify-center ">
                  Slide 2
                </div>
                <div className="flex h-full items-center justify-center ">
                  Slide 3
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Testimonials;
