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
    <div className="flex justify-between bg-blue-400 shadow-lg">
      <div className="logo">
        <img className="w-40 m-4" src={LOGO_URL} alt="" />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4 font-bold">
          <li className="px-4 ">
            <Link to="/">Home </Link>
          </li>
          <li className="px-4 ">
            <Link to="/about">About Us </Link>
          </li>
          <li className="px-4 ">
            <Link to="/contact">Contact Us </Link>
          </li>
          <li className="px-4 ">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="px-4 ">
            <Link to="/cart">
            Cart - ({cartItems.length} items)
            </Link> 
          </li>

          <button
            
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
