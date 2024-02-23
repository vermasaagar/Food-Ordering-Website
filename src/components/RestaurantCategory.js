// import { useState } from "react";
import { useState } from "react";
import ItemLists from "./ItemsList";
const RestaurantCategory = ({ data, setShowIndex }) => {
  const [showItems, setShowItems] = useState(false);

  //   const [showAccordian, setShowAccordian] = useState(false);

  const handleClick = () => {
    // setShowItems(!showItems);
    // setShowIndex();

    setShowItems((prev) => !prev);
  };

  console.log(data);
  return (
    <div>
      {/* Header */}

      <div className=" w-6/12 mx-auto my-4 p-4 cursor-pointer bg-gray-50 shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemLists items={data.itemCards} />}
      </div>

      {/* Accordians */}
    </div>
  );
};

export default RestaurantCategory;
