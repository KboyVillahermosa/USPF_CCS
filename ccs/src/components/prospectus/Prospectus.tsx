import React from "react";
import "./Prospectus.css";

const Prospectus: React.FC = () => {
  return (
    <>
      <main className="bg-blue-50 dark:bg-gray-900">
        <div className="prospectus-title-header">
          <div className="prospectus-title-content">
            <h1 className="text-gray-900 dark:text-white">BSIT/BSCS PROSPECTUS</h1>
          </div>
        </div>
        <div className="prospectus">
          <div className="prospectus-content bg-blue-100">
          <h1 className="text-gray-900 dark:text-gray-600">BSIT/BSCS PROSPECTUS</h1>
          <img src="/uspf.jpg" alt="" className="bg-blue-200" />
          </div>
          <div className="prospectus-content">
             <h1 className="text-gray-900 dark:text-gray-600">BSIT/BSCS PROSPECTUS</h1>
             <img src="/uspf.jpg" alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Prospectus;
