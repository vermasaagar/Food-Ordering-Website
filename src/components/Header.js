import React from "react";
import { useState, useContext } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
const [btnName, setbtnName] = useState("login");
const { loggedInUser } = useContext(UserContext);
const cartItems = useSelector((store) => store.cart.items) 
console.log(cartItems);




  // useEffect(() => {
  //   console.log("Use Effect Render");
  // });


  




  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="w-1/12">
        <img className="" src={LOGO_URL} alt="" />
      </div>

      <div className="flex items-center text-lg">
        <ul className="flex p-4 m-4 font-bold text-gray-600 ">
          <li className="px-4 hover:text-black ">
            <Link to="/">Home </Link>
          </li>
          <li className="px-4 hover:text-black ">
            <Link to="/about">About Us </Link>
          </li>
          <li className="px-4 hover:text-black ">
            <Link to="/contact">Contact Us </Link>
          </li>
          <li className="px-4 hover:text-black ">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="px-4  hover:text-black">
            <Link to="/cart">
            Cart - ({cartItems.length} items)
            </Link> 
          </li>

          {/* <button
            className="hover:text-black"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button> */}

          {/* <li className="px-4 font-bold hover:text-black">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
