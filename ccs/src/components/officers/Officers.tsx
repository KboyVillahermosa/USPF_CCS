import React, { useState, useEffect } from 'react';
import './Officers.css'

// Example officer data
const officers = [
    {
        name: 'Officer 1',
        position: 'President',
        bio: 'Officer 1 is responsible for overseeing all activities and ensuring the smooth operation of CCSST. With a passion for technology and leadership, they drive the organization towards achieving its goals.',
        imageUrl: '/ccs.png'
    },
    {
        name: 'Officer 2',
        position: 'Vice President',
        bio: 'Officer 2 is dedicated to supporting the President and coordinating various initiatives within CCSST. With a strong background in technology and management, they contribute to the organization’s growth and success.',
        imageUrl: '/path/to/photo2.jpg'
    },

    {
      name: 'Officer 3',
      position: 'Vice President',
      bio: 'Officer 2 is dedicated to supporting the President and coordinating various initiatives within CCSST. With a strong background in technology and management, they contribute to the organization’s growth and success.',
      imageUrl: '/path/to/photo2.jpg'
  },
  {
    name: 'Officer 4',
    position: 'Vice President',
    bio: 'Officer 2 is dedicated to supporting the President and coordinating various initiatives within CCSST. With a strong background in technology and management, they contribute to the organization’s growth and success.',
    imageUrl: '/path/to/photo2.jpg'
},
    // Add more officers as needed
];

const Officers: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex === officers.length - 1 ? 0 : prevIndex + 1));
        }, 5000); // Auto slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const handleSlideChange = (index: number) => {
        setActiveIndex(index);
    };

    return (
   
    <main className="about-ccsst bg-blue-50 dark:bg-gray-900">
        <div className="officer-header">
        <div className="officers-slider">
            {officers.map((officer, index) => (
                <div key={index} className={`slide ${index === activeIndex ? 'active' : ''}`}>
                    <img src={officer.imageUrl} alt={officer.name} className="officer-image" />
                    <div className="officer-details">
                        <h3>{officer.name}</h3>
                        <p>{officer.position}</p>
                        <p>{officer.bio}</p>
                    </div>
                </div>
            ))}
            <div className="indicators">
                {officers.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => handleSlideChange(index)}
                    />
                ))}
            </div>
        </div>
        </div>
       </main>
    );
};

export default Officers;
