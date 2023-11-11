import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  // const[resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const[showIndex, setShowIndex] = useState(null);
//   console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, areaName, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//   console.log(itemCards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories);
  return (
    <div className="text-center">
      <h3 className="text-2xl m-6 font-bold">Restaurant Name - {name}</h3>
      <p className="text-lg font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {
        categories.map(
            (category, index) => (<ResCategory key={category?.card?.card?.title} data={category.card.card}
            show={index === showIndex ? true : false}
            setShowIndex={ ()=> setShowIndex(index)}/>)
        )
      }
    </div>
  );
};

export default RestaurantMenu;
