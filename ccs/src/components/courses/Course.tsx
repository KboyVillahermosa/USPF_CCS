import React  from 'react'
import './Course.css'
import { Link } from 'react-router-dom'

const Course:React.FC = () => {
  return (
    <>
     <main className="dark:bg-gray-900 bg-blue-50">
    <div className="cources-title">
        <div className="title-content">
    <h1 className="mb-4 text-2xl font-extrabold leading-none  text-gray-900  dark:text-white uppercase">
    The USPF College of Computer Studies Offers
    </h1>
    </div>
    </div>
    <div className="cources">
        <div className="cources-content dark:bg-gray-800 bg-blue-100 p-4 dark:hover:bg-gray-700 hover:bg-blue-200">
         <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900  dark:text-white uppercase">
         Bachelor of Science in Information Technology</h1>
         <h2 className='font-bold text-gray-900 dark:text-white uppercase mt-1 mb-2'>  (PACUCOA Accredited Level III)</h2>
         <img src="/uspf.jpg" alt="" />
         <div className="justify-end mt-5 flex text-blue-600 hover:underline">
         <Link to="/about" className=''>Permalink</Link>
         </div>
        </div>
        <div className="cources-content dark:bg-gray-800 bg-blue-100 p-5 dark:hover:bg-gray-700 hover:bg-blue-200">
         <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900  dark:text-white uppercase">Bachelor of Science in Computer Science
         </h1>
         <h2 className='font-bold text-gray-900 dark:text-white uppercase  mt-1 mb-2 '> (PACUCOA Accredited Level III)</h2>
         <img src="/uspf.jpg" alt="" />
         <div className="justify-end mt-5 flex text-blue-600 hover:underline">
         <Link to="/about" className=''>Permalink</Link>
         </div>
        </div>
    </div>
    </main>
    </>
  )
}

export default Course