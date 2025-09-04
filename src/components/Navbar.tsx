import React from "react";
import icon from "../asessts/images/Icon.svg"
const Navbar: React.FC = () => {
  return (
    <>

      <nav className="flex p-6 justify-between ">
        <div className="flex gap-5 navlinks mt-6">
          <img src={icon} alt="positivuslogo" className="h-9 w-9" />
          <h3 className="font-medium text-4xl tracking-wide">Positivus</h3>
        </div>
        <div>
          <ul className="flex justify-evenly gap-8 ml-20 links mt-8 navlinks">
            <li>About</li>
            <li>Services</li>
            <li>Use Cases
            </li>
            <li>Pricing
            </li>
            <li>Blog</li>
            <button className="w-[197px] h-[68px] outline-black quote ">Request a quote</button>
          </ul>
        </div>

      </nav>

    </>)
}
export default Navbar;