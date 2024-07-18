import React from "react";
import "./AboutCcs.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const AboutCcs: React.FC = () => {
  return (
    <main className="about-ccsst bg-blue-50 dark:bg-gray-900">
      <div className="ccs-header">
        <div className="ccs-content" data-aos="fade-up"
     data-aos-duration="1000">
          <h1 className="text-gray-900 dark:text-white">
            CCSST:{" "}
            <span className="text-yellow-400">
              {" "}
              College of Computer Southern Technovators{" "}
            </span>
          </h1>
          <p className="text-gray-500 dark:text-white">
            The College of Computer Southern Technovators (CCSST) at the
            University of Southern Philippines Foundation (USPF) is a dynamic
            organization dedicated to fostering innovation and excellence in the
            field of computer science and information technology. As officers of
            USPF's CCSST, we are committed to creating a vibrant and
            collaborative environment where students can thrive, develop their
            technical skills, and prepare for successful careers in the tech
            industry.
          </p>
        </div>
        <div className="ccs-content" data-aos="fade-up"
     data-aos-duration="1000">
          <h1 className="text-gray-900 dark:text-white">
            Our <span className="text-yellow-400"> Mission </span>
          </h1>
          <p className="text-gray-500 dark:text-white">
            CCSST aims to empower students with cutting-edge knowledge and
            practical experience in various domains of computer science,
            including software development, cybersecurity, data science, and
            more. We strive to bridge the gap between academic learning and
            real-world applications through hands-on projects, workshops, and
            industry partnerships.
          </p>
        </div>
        <div className="ccs-content" data-aos="fade-up"
     data-aos-duration="1000">
          <h1 className="text-gray-900 dark:text-white">
            Our <span className="text-yellow-400"> Vision </span>
          </h1>
          <p className="text-gray-500 dark:text-white">
            To be a leading organization that nurtures the next generation of
            tech innovators and leaders, driving technological advancements and
            contributing to the global tech community.
          </p>
        </div>
        <div className="ccs-content" data-aos="fade-up"
     data-aos-duration="1000">
          <h1 className="text-gray-900 dark:text-white">
            Meet Our <span className="text-yellow-400"> Dedicated Team </span>
          </h1>
          <p className="text-gray-500 dark:text-white">
            At the College of Computer Southern Technovators (CCSST), we are
            proud to have a team of passionate and committed individuals who
            drive our mission forward. Each officer and representative plays a
            crucial role in our organization, bringing their unique skills and
            perspectives to ensure our success and the betterment of our
            community.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutCcs;
