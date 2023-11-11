import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resTd) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=> {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch(MENU_API+resTd);
        const json = await data.json();
        setResInfo(json.data)
;    }

    return resInfo;

}

export default useRestaurantMenu;