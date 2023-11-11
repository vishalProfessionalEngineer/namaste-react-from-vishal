import { useState } from "react";
import { CDN_URL } from "../utils/Constants";

const ItemList = ({ itemCards }) => {
//   console.log(itemCards);
    // const[bool, setBool] = useState(true);
  return (
    <div>
      {itemCards.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>- ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
                <button className="p-2 mx-10 bg-black text-white shadow-md">Add +</button>
            </div>
            {/* if(item.card.info.hasOwnProperty('imageId')){setBool(false)}
            {bool && <img src={CDN_URL + item.card.info.imageId} />} */}
            <img src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
