import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (listOfRestaurants.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info?.avgRating > 4.5
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="m-4 p-4 flex items-center">
          <label>
            UserName :{" "}
            <input
              className="border border-black p-2"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
