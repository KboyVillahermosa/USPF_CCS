import React from "react";
import "./Officers.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Officers: React.FC = () => {
  return (
    <>
      <main className="about-ccsst bg-blue-50 dark:bg-gray-900">
        <div className="officer-header">
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/pres.jpg" alt="" />
          </div>
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/vp.jpg" alt="" />
          </div>
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/vp-cs.jpg" alt="" />
          </div>
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/sec.jpg" alt="" />
          </div>
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/asec.jpg" alt="" />
          </div>
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/treasurer.jpg" alt="" />
          </div>
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/atreasurer.jpg" alt="" />
          </div>
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/auditoe.jpg" alt="" />
          </div>
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/manager.jpg" alt="" />
          </div>
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/pro.jpg" alt="" />
          </div>
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/social.jpg" alt="" />
          </div>
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/graphics.jpg" alt="" />
          </div>
        </div>
        <div className="representative">
          <h1 className="text-gray-900 dark:text-white">
            <span className="font-extrabold uppercase text-yellow-400">
              {" "}
              Representatives{" "}
            </span>
          </h1>
        </div>
        <div
          className="officer-header"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="officer-content">
            <img src="/it1.jpg" alt="" />
          </div>
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/cs2.jpg" alt="" />
          </div>
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/it2.jpg" alt="" />
          </div>
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/cs22.jpg" alt="" />
          </div>
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/it3.jpg" alt="" />
          </div>
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/cs3.jpg" alt="" />
          </div>
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/it4.jpg" alt="" />
          </div>
          <div
            className="officer-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/cs4.jpg" alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Officers;
