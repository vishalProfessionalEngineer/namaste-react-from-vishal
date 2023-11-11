import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({data, show, setShowIndex}) => {
    // console.log(data);
    // const[show, setShow] = useState(false);
    const handleClick = () => {
        // show ? setShow(false) : setShow(true);
        setShowIndex();
    }
    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer" onClick={handleClick}>
            <div className="flex justify-between">
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span >⬇️</span>
            </div>
            {show && <ItemList itemCards={data.itemCards}/>}
        </div>
    );
};

export default ResCategory;