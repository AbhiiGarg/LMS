import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function FooterComponent() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="relative left-0 bottom-0 h-[12vh] flex flex-col sm:flex-row items-center sm:justify-between justify-evenly text-white bg-gray-800 sm:py-5 sm:px-20 gap-1">
        <section className="sm:text-lg text-md">
          Copyright {year} | All rights reserved
        </section>
        <section className="flex items-center justify-center gap-5 sm:text-2xl text-l text-white">
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsFacebook />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsInstagram />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsLinkedin />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsTwitter />
          </a>
        </section>
      </footer>
    </>
  );
}

export default FooterComponent;
