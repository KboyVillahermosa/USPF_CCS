import React from "react";
import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css"; 
AOS.init();

const About: React.FC = () => {
  return (
    <>
      <main className="dark:bg-gray-900 bg-blue-50">
        <div className="about-header">
          <div className="about-content"  
            data-aos="fade-up"
            data-aos-duration="1000">
            <div className="overflow-x-auto">
              <Tabs aria-label="Full width tabs" style="fullWidth" className="Tabs">
                <Tabs.Item title="Dean" icon={HiUserCircle} className="tabs">
                  <div className="tab-header">
                    <div className="tab-content">
                    <h1 className="text-gray-900 dark:text-white">Sir Gian Cataraja</h1>
                     <p className="text-gray-900 dark:text-white mt-5">It contains tons of predesigned components and pages starting from login screen to complex dashboard.
                       Perfect choice for your next SaaS application."</p>

                       <p className="text-gray-900 dark:text-white mt-5">It contains tons of predesigned components and pages starting from login screen to complex dashboard.
                       Perfect choice for your next SaaS application."</p>

                       <p className="text-gray-900 dark:text-white mt-5">It contains tons of predesigned components and pages starting from login screen to complex dashboard.
                       Perfect choice for your next SaaS application."</p>
                    </div>
                    <div className="tab-image">
                      <img src="/sir-gian.jpg" alt="" />
                    </div>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Adviser" icon={MdDashboard}>
                <div className="tab-header">
                    <div className="tab-content">
                    <h1 className="text-gray-900 dark:text-white">Joan Val</h1>
                     <p className="text-gray-900 dark:text-white mt-5">It contains tons of predesigned components and pages starting from login screen to complex dashboard.
                       Perfect choice for your next SaaS application."</p>

                       <p className="text-gray-900 dark:text-white mt-5">It contains tons of predesigned components and pages starting from login screen to complex dashboard.
                       Perfect choice for your next SaaS application."</p>

                       <p className="text-gray-900 dark:text-white mt-5">It contains tons of predesigned components and pages starting from login screen to complex dashboard.
                       Perfect choice for your next SaaS application."</p>
                    </div>
                    <div className="tab-image">
                      <img src="/ma'am-jo.jpg" alt="" />
                    </div>
                  </div>
                </Tabs.Item>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
