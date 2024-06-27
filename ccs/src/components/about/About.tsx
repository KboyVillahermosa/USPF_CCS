import React from "react";
import { Tabs, Blockquote  } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import "./About.css";

const About: React.FC = () => {
  return (
    <>
      <main className="dark:bg-gray-900">
        <div className="about-header">
          <div className="about-content">
            <div className="overflow-x-auto">
              <Tabs aria-label="Full width tabs" style="fullWidth" className="Tabs">
                <Tabs.Item title="Dean" icon={HiUserCircle} className="tabs">
                  <div className="tab-header">
                    <div className="tab-content">
                    <Blockquote>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
                    </Blockquote>
                    </div>
                    <div className="tab-image">
                      <img src="/sir-gian.jpg" alt="" />
                    </div>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Adviser" icon={MdDashboard}>
                <div className="tab-header">
                    <div className="tab-content">
                    <Blockquote>" It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
                    </Blockquote>
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
