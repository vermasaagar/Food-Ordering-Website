import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import React from "react";

import { useState, useEffect, useContext } from "react";
// import UserContext from "./utils/UserContext";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
  //array destructuring

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  console.log(listOfRestaurant);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // const { loggedInUser, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks Like You're offline!! Please Check your internet connection</h1>
    );

  console.log(listOfRestaurant);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-black px-5 py-[6px] rounded-l-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-[6px] bg-blue-300 rounded-r-lg hover:bg-blue-400 border border-black"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="search p-4 m-4 flex items-center ">
          <button
            className="px-4 py-[6px] bg-blue-300 rounded-lg hover:bg-blue-400"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) => {
                return res.info.avgRating > 4.0;
              });

              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        {/* <div className="search p-4 m-4 flex items-center">
          <label>User Name : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div> */}
      </div>
      <div className="flex flex-wrap border-2 border-black justify-around">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
