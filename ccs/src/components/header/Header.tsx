import React, { useState, useEffect } from "react";
import "./Header.css";
import Lottie from "lottie-react";
import Code from "./code.json";
import Code3 from "./Code3.json";
import Code4 from "./Code4.json";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const animations = [Code, Code3, Code4];

const Header: React.FC = () => {
  const [currentAnimation, setCurrentAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % animations.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="bg-blue-50 dark:bg-gray-900">
        <div className="header">``
          <div className="header-content">
            <h1
              className="mb-4 font-extrabold uppercase leading-none tracking-tight text-yellow-300 dark:text-yellow-300"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              USPF{" "}
              <span className="text-yellow-300 dark:text-blue-500">
                College of Computer
              </span>
              <span className="text-blue-500 dark:text-yellow-300">
                {" "}
                Studies
              </span>
            </h1>
            <p
              className="text-lg font-normal text-gray-900 dark:text-white lg:text-xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="text-pink-600">Shape</span> the future line by
              line. <span className="text-indigo-300">Join</span> the next{" "}
              <span className="text-yellow-300">generation</span> of{" "}
              <span className="text-green-300 underline">tech innovators</span>
            </p>
          </div>
          <div
            className="header-image"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Lottie animationData={animations[currentAnimation]} loop={true} />
          </div>
        </div>
        <section></section>
      </main>
    </>
  );
};

export default Header;
