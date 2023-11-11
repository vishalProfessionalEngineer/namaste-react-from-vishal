import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, locality, cuisines, avgRating, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-52 rounded-lg shadow-lg hover:bg-gray-500 box-border block">
      <img
        className="rounded-md box-border h-32 w-52"
        src={CDN_URL + cloudinaryImageId}
        alt="Res Img"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{locality}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>AvgRating: {avgRating}</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
