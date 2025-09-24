import React, { useState } from "react";
import icon from "../asessts/images/Icon.svg"
import HamburgerBtn from "./Buttons/HamburgerBtn";
const Navbar: React.FC = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>

      <nav className="flex flex-col md:flex-row justify-between items-center   ">
        {/* Logo Section */}
        <div className="flex gap-4 items-center">
          <img src={icon} alt="positivuslogo" className="h-9 w-9" />
          <h3 className="font-medium text-4xl tracking-wide">Positivus</h3>
        </div>

        <div className="md:hidden  mt-4">
          <button onClick={() => setisOpen(!isOpen)}>
            <HamburgerBtn />
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`w-full md:w-auto ${isOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row gap-6 md:gap-10 items-center text-lg mt-4 md:mt-0">
            <li>About</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Blog</li>
            <button className="w-56 h-[68px] border-[#191A23] border-2 text-[#191A23] rounded-2xl">
              Request a quote
            </button>
          </ul>
        </div>
      </nav>

    </>)
}
export default Navbar;