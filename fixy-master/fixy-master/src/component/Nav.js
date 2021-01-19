import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className=" absolute  Nav bottom-0 right-0 w-9/12   lg:w-1/4 sm:w-4/5">
      <ul className="navLink flex justify-around w-full text-xs ">
        <Link to="/Sponsorship">
          <li className=" smalfont"> Sponsorship </li>{" "}
        </Link>{" "}
        <Link to="/Terms">
          <li className=" smalfont"> Terms </li>{" "}
        </Link>{" "}
        <Link to="/Privacy">
          <li className=" smalfont"> Privacy </li>{" "}
        </Link>{" "}
        <Link to="/About">
          <li className=" smalfont"> About </li>{" "}
        </Link>{" "}
      </ul>{" "}
    </div>
  );
}

export default Nav;
