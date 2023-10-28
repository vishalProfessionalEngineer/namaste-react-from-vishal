import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

    const[resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);

    useEffect(()=> {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.449923&lng=80.3318736&restaurantId="+resId
        );
        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
    };

    if (resInfo===null){
        return <Shimmer/>
    };

    const {name, cuisines, areaName, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards);
    return (
        <div className="menu">
            <h3>Restaurant Name - {name}</h3>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <p>{areaName}</p>

            <h2>Menu</h2>
            <ul>
                {itemCards.map(items=> 
                    <li key={items.card.info.id}> 
                    {items.card.info.name} - Rs. {items.card.info.price || items.card.info.defaultPrice}
                    </li>
                    )}
            </ul>
        </div>
    );
}

export default RestaurantMenu;