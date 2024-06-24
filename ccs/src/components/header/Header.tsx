import React, { useState, useEffect } from 'react';
import './Header.css';
import Lottie from 'lottie-react';
import Code from './code.json';
import Code3 from './Code3.json';
import Code4 from './Code4.json';


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
    <main className="dark:bg-gray-800">
      <div className="header">
        <div className="header-content">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-yellow-300 dark:text-white md:text-5xl lg:text-6xl uppercase">
            USPF <span className="text-yellow-300 dark:text-blue-500">College of Computer</span> <span className="text-blue-100">Studies</span>
          </h1>
          <p className="text-lg font-normal text-white dark:text-gray-400 lg:text-xl">
          Shape the future line by line. Join the  next generation of tech innovators
          </p>
        </div>
        <div className="header-image">
          <Lottie animationData={animations[currentAnimation]} loop={true} />
        </div>
      </div>
    </main>
  );
};

export default Header;
