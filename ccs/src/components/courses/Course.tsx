import React from "react";
import "./Course.css";
import { Link } from "react-router-dom";

const Course: React.FC = () => {
  return (
    <>
      <main className="bg-blue-50 dark:bg-gray-900">
        <div className="cources-title">
          <div className="title-content">
            <h1 className="mb-4 text-2xl font-extrabold uppercase  leading-none  text-gray-900 dark:text-white">
              The USPF College of Computer Studies Offers
            </h1>
          </div>
        </div>
        <div className="cources">
          <div className="cources-content bg-blue-100 p-4 hover:bg-blue-200 dark:bg-gray-800 dark:hover:bg-gray-700">
            <h1 className="text-2xl font-extrabold uppercase leading-none tracking-tight  text-gray-900 dark:text-white">
              Bachelor of Science in Information Technology
            </h1>
            <h2 className="mt-1 font-bold uppercase text-gray-900 dark:text-white">
              {" "}
              (PACUCOA Accredited Level III)
            </h2>
            <p className="text-gray-900 dark:text-white">
              Email.ccsst@uspf.edu.ph
            </p>
            <p className="text-gray-900 dark:text-white">
              Tel. 265 8773 loc. 109
            </p>
            <p className="text-gray-900 dark:text-white">
              Mobile No. (0998) 966 4329
            </p>
            <p className="mb-3 text-gray-900 dark:text-white">
              USPF Salinas Drive, Lahug, Cebu City
            </p>
            <img src="/uspf.jpg" alt="" />
            <div className="mt-5 flex justify-end text-blue-600 hover:underline">
              <Link to="/about" className="">
                Permalink
              </Link>
            </div>
          </div>
          <div className="cources-content bg-blue-100 p-5 hover:bg-blue-200 dark:bg-gray-800 dark:hover:bg-gray-700">
            <h1 className="text-2xl font-extrabold uppercase leading-none tracking-tight  text-gray-900 dark:text-white">
              Bachelor of Science in Computer Science
            </h1>
            <h2 className="mb-2 mt-1 font-bold uppercase  text-gray-900 dark:text-white ">
              {" "}
              (PACUCOA Accredited Level III)
            </h2>
            <p className="text-gray-900 dark:text-white">
              Email.ccsst@uspf.edu.ph
            </p>
            <p className="text-gray-900 dark:text-white">
              Tel. 265 8773 loc. 109
            </p>
            <p className="text-gray-900 dark:text-white">
              Mobile No. (0998) 966 4329
            </p>
            <p className="mb-3 text-gray-900 dark:text-white">
              USPF Salinas Drive, Lahug, Cebu City
            </p>
            <img src="/uspf.jpg" alt="" />
            <div className="mt-5 flex justify-end text-blue-600 hover:underline">
              <Link to="/about" className="">
                Permalink
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Course;
