import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import FooterComponent from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function HomeLayout({ children }) {
  const changeWidth = () => {
    const drawerSide = document.getElementsByClassName("drawer-side");
    // drawerSide[0].style.width = auto;
  };

  const hideDrawer = () => {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    // const drawerSide=document.getElementsByClassName('drawer-side')
    // drawerSide[0].style.width='0'
    // changeWidth()
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  const role = useSelector((state) => state?.auth?.role);

  //   console.log(role + "  " + isLoggedIn);

  const handleLogout = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="min-h-[88vh]">
        <div className="drawer absolute left-0 z-50 w-fit">
          <input className="drawer-toggle" id="my-drawer" type="checkbox" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="cursor-pointer relative">
              <FiMenu
                size={"32px"}
                className="font-bold text-white m-4"
                onClick={changeWidth}
              />
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-100 text-base-content relative">
              <li className="w-fit absolute right-2 z-50">
                <button onClick={hideDrawer}>
                  <AiFillCloseCircle size={24} />
                </button>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>

              {isLoggedIn && role === "ADMIN" && (
                <Link to="/admin/dashboard"> Admin DashBoard </Link>
              )}

              <li>
                <Link to="/courses">All Courses</Link>
              </li>
              <li>
                <Link to="/contact">Contact US</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>

              {!isLoggedIn && (
                <li className="absolute bottom-4 w-[90%]">
                  <div className="w-full flex items-center justify-center gap-5">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-1 font-semibold rounded-md w-full">
                      <Link to="/login">Login</Link>
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-1 font-semibold rounded-md w-full">
                      <Link to="/signup">Signup</Link>
                    </button>
                  </div>
                </li>
              )}

              {isLoggedIn && (
                <li className="absolute bottom-4 w-[90%]">
                  <div className="w-full flex items-center justify-center gap-5">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-1 font-semibold rounded-md w-full">
                      <Link to="/user/profile">Profile</Link>
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-1 font-semibold rounded-md w-full">
                      <Link onClick={handleLogout}>Logout</Link>
                    </button>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
        {children}
        <FooterComponent />
      </div>
    </>
  );
}

export default HomeLayout;
