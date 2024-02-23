
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import useRestaurantMenu from "./utils/useRestaurantMenu";
import { Menu_API } from "./utils/constants";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () =>{

    const [resInfo, setresInfo] = useState(null);

    const {resId} = useParams();

    // const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);
    

    useEffect(()=>{
        fetchMenu();
        
    }, []);


    const fetchMenu = async()=> {

        const data = await fetch(Menu_API+resId);

        const json = await data.json();
        console.log(json);

        setresInfo(json); 

    };

    if(resInfo===null) return (<Shimmer />)

    console.log(resInfo)

     const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;

     const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;




     const categories = 
     resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.["card"]?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     );

    


    return (
        <div className="text-center">
            <h1 className="font-bold my-10 text-size-2xl text-lg">{name}</h1>
            <p className="font-bold">{cuisines.join(", ")} -  {costForTwoMessage}</p>

            {/* categories accordians */}
            {categories && categories.map((category, index)=>(
                //controlled component
                <RestaurantCategory key = {
                    category?.card?.card.title}
                    data = {category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex ={()=>setShowIndex(index)}
                    />
                    

            ))}




        </div>
    )
}

export default RestaurantMenu;