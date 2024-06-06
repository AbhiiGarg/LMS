import HomeLayout from "../layouts/HomeLayout";

import { Link } from "react-router-dom";

import homePageImage from '../assets/images/homePageMainImage.png'

function HomePage() {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex flex-col-reverse sm:flex-row items-center justify-center gap-10 mx-16 h-[88vh]">
        <div className="sm:w-1/2 w-fit space-y-6">
          <h1 className="sm:text-5xl text-xl w-fit font-semibold">
            Find out best
            <span className="text-yellow-500 font-bold">Online Course</span>
          </h1>
          <p className="sm:text-xl text-sm text-gray-200">
            We have large library of courses taught by highly skilled and
            qualified faculties at a vary affordable cost
          </p>
          <div className="sm:space-x-6 flex sm:flex-row flex-col sm:justify-start items-center">
            <Link to="/courses">
              <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold sm:text-lg text-sm cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Explore Courses
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold sm:text-lg text-sm cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300 sm:mt-0 sm:mb-0 mt-3 mb-5 ">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="sm:w-1/2 flex items-center justify-center">
            <img alt="homepage image" src={homePageImage} className="w-fit"/>
        </div>
      </div>
    </HomeLayout>
  );
}

export default HomePage;
