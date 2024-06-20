import { useState } from "react";
import HomeLayout from "../layouts/HomeLayout";
import toast from "react-hot-toast";
import { isEmail } from "../helpers/regexMatcher";
import axiosInstance from "../helpers/axiosInstance";

function Contact() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  async function onFormSubmit(e) {
    e.preventDefault();
    if (!userInput.name || !userInput.email || !userInput.message) {
      toast.error("Please fill all the fields");
      return;
    }
    if (!isEmail(userInput.email)) {
      toast.error("Invalid Email");
      return;
    }

    try {
      const response = axiosInstance.post("/contact", userInput);
      toast.promise(response, {
        loading: "Submitting your message...",
        sucess: "Form submitted successfully",
        error: "Failed to submit the form",
      });
      const contactResponse = await response;
      if (contactResponse?.data?.sucess) {
        setUserInput({ name: "", email: "", message: "" });
      }
    } catch (error) {
        toast.error("operation failed....",error)
    }
  }

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh] ">
        <form
          noValidate
          onSubmit={onFormSubmit}
          className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[17rem] sm:w-[22rem] mt-10"
        >
          <h1 className="text-3xl font-semibold">Contact form</h1>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="name" className="text-xl font-semibold">
              Name
            </label>
            <input
              type="text"
              className="bg-transparent border px-2 py-1 rounded-sm"
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={handleUserInput}
              value={userInput.name}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="Email" className="text-xl font-semibold">
              Email
            </label>
            <input
              type="text"
              className="bg-transparent border px-2 py-1 rounded-sm"
              id="Email"
              name="email"
              placeholder="Enter your Email"
              onChange={handleUserInput}
              value={userInput.email}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="message" className="text-xl font-semibold">
              Message
            </label>
            <textarea
              className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"
              id="message"
              name="message"
              placeholder="Enter your message"
              onChange={handleUserInput}
              value={userInput.message  }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold "
          >
            Submit
          </button>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Contact;
