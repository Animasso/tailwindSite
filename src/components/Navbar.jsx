import React from "react";
import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";
const Navbar = () => {
  return (
    <header className=" padding-x py-8 absolute z-10 w-full">
      <nav className=" flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className=" flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className=" font-montserrat leading-normal text-lg text-slate-gray"
            >
              <a href={link.href}> {link.label}</a>
            </li>
          ))}
        </ul>
        <div className=" lg:hidden">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
