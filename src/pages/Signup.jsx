import { useState } from "react";
import HomeLayout from "../layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { createAccount } from "../redux/slices/AuthSlice";
import axios from "axios";

 function Signup() {
  const dispatch = useDispatch();
  const navigate =useNavigate();

  const [previewImage, setPreviewImage] = useState("");

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handelUserInput = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const getImage = (e) => {
    e.preventDefault();

    const uploadImage = e.target.files[0];

    if (uploadImage) {
      setSignupData({
        ...signupData,
        avatar: uploadImage,
      });
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadImage);
      fileReader.addEventListener("load", function () {
        setPreviewImage(this.result);
      });
    }
  };

  const createNewAccount = async (event) => {
    event.preventDefault();
    if (!signupData.fullName || !signupData.email || !signupData.password) {
      toast.error("Please fill all the details");
      return;
    }

    if (signupData.fullName.length < 5) {
      toast.error("Name should be atleast of 5 character");
      return;
    }

    if (!signupData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Invalid email id");
      return;
    }

    if (
      !signupData.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      toast.error(
        "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character"
      );
      return;
    }

    const formDate =new FormData()
    formDate.append("fullName",signupData.fullName)
    formDate.append("email",signupData.email)
    formDate.append("password",signupData.password)
    formDate.append("avatar",signupData.avatar)

    //dispatch create account action
    const response = await dispatch(createAccount(formDate))

    console.log(response);
    if(response?.payload?.sucess)
    navigate("/")

    // setSignupData({
    //     fullName: "",
    //     email: "",
    //     password: "",
    //     avatar: "",
    //   })
    //   setPreviewImage("")
    
  };

  return (
    <HomeLayout>
      <div className="flex justify-center sm:items-center items-end relative sm:bottom-0 bottom-10 h-[88vh]">
        <form
          noValidate
          onSubmit={createNewAccount}
          className="flex flex-col justify-center gap-3 rounder-lg text-white sm:w-96 shadow-[0_0_10px_black] p-4"
        >
          <h1 className="text-center sm:text-2xl text-md font-bold">
            Registration Page
          </h1>
          <label htmlFor="image_upload" className="cursor-pointer m-auto w-fit">
            {previewImage ? (
              <img
                className="sm:w-24 sm:h-24 w-20 h-20 rounded-full m-auto"
                src={previewImage}
              />
            ) : (
              <BsPersonCircle className="w-24 h-24 rounder-full m-auto" />
            )}
          </label>
          <input
            className="hidden"
            type="file"
            id="image_upload"
            accept=".jpg, .jpeg, .png, .svg"
            onChange={getImage}
          />
          <div className="flex flex-col gap-3">
            <input
              type="text"
              required
              name="fullName"
              id="fullName"
              placeholder="Enter your fullName.."
              className="bg-transparent px-2 py-1 border"
              onChange={handelUserInput}
              value={signupData.fullName}
            />
            <input
              type="email"
              required
              name="email"
              id="email"
              placeholder="Enter your email.."
              className="bg-transparent px-2 py-1 border"
              onChange={handelUserInput}
              value={signupData.email}
            />
            <input
              type="password"
              required
              name="password"
              id="password"
              placeholder="Enter your password.."
              className="bg-transparent px-2 py-1 border"
              onChange={handelUserInput}
              value={signupData.password}
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-100 rounded-sm mt-2 sm:py-2 font-semibold sm:text-lg text-md cursor-pointer"
          >
            Create account
          </button>
          <p className="text-center">
            Already have an account ?{" "}
            <Link to="/login" className="link text-accent">
              Login
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Signup;
