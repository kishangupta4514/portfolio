// NavLink.js
import React from "react";
import { Link as ScrollLink } from 'react-scroll';
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    // <ScrollLink
    //   activeClass="active"
    //   to={href}
    //   spy={true}
    //   smooth={true}
    //   duration={500}
    // className="block py-2 pl-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    // >
    //   {title}
    // </ScrollLink>
    <Link
      href={href}
      className="block py-2 pl-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white transition-all duration-[400ms]"
    // scroll
>
      {title}
    </Link>
  );
};

export default NavLink;
