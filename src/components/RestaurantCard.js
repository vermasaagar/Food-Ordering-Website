import { CDN_URL } from "./utils/constants";


const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData.info;

    console.log("Resdata",resData);

  return (

    <div className="m-4 p-4  w-[250px] rounded-lg bg-gray-300 hover:bg-green-100">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Ratings</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};


export const withPromotedLabel = (RestaurantCard) =>{
  return(props) =>{
    return(
      <div>
        <label className="bg-gray-500 text-white absolute m-2 p-2 rounded-lg"
        >Open</label>
        <RestaurantCard {...props}/>

      </div>
    )
  }
}

export default RestaurantCard;
