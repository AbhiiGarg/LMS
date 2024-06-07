import { useState } from "react";
import HomeLayout from "../layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { createAccount, loginAccount } from "../redux/slices/AuthSlice";
import axios from "axios";

 function Login() {
  const dispatch = useDispatch();
  const navigate =useNavigate();

  
  const [loginData, setLoginData] = useState({
      email: "",
      password: "",
    });
    
  const handelUserInput = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  
  const loginInAccount = async (event) => {
    event.preventDefault();
    if ( !loginData.email || !loginData.password) {
      toast.error("Please fill all the details");
      return;
    }

    if (!loginData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Invalid email id");
      return;
    }

    if (
      !loginData.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      toast.error(
        "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character"
      );
      return;
    }

    console.log(loginData);

    const formDate =new FormData()
    formDate.append("email",loginData.email)
    formDate.append("password",loginData.password)
    console.log(formDate);

    //dispatch create account action
    const response = await dispatch(loginAccount(formDate))

    console.log(response);
    if(response?.payload?.sucess){
      console.log(response.payload);
      navigate("/")
    }

  };

  return (
    <HomeLayout>
      <div className="flex justify-center items-center items-end h-[88vh]">
        <form
          noValidate
          onSubmit={loginInAccount}
          className="flex flex-col justify-center gap-3 rounder-lg text-white sm:w-96 shadow-[0_0_10px_black] p-4"
        >
          <h1 className="text-center sm:text-2xl text-md font-bold">
            Login Page
          </h1>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              required
              name="email"
              id="email"
              placeholder="Enter your email.."
              className="bg-transparent px-2 py-1 border"
              onChange={handelUserInput}
              value={loginData.email}
            />
            <input
              type="password"
              required
              name="password"
              id="password"
              placeholder="Enter your password.."
              className="bg-transparent px-2 py-1 border"
              onChange={handelUserInput}
              value={loginData.password}
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-100 rounded-sm mt-2 sm:py-2 font-semibold sm:text-lg text-md cursor-pointer"
          >
            Login
          </button>
          <p className="text-center">
           Do not have an account ?{" "}
            <Link to="/signup" className="link text-accent">
            Signup
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Login;
