
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu.js";
import Categories from "./Categories.js";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const {resId}= useParams()

  // Now create the customhook to make the code more maintaninable and scalable
  const resInfo = useRestaurantMenu(resId)

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   try {
  //     const data = await fetch(
  //       MENU_API+resId
  //     );
  //     const json = await data.json();
  //     setResInfo(json.data);
  //   } catch (error) {
  //     console.error("Failed to fetch menu:", error);
  //   }
  // };

  // Show shimmer while loading
  if (!resInfo) return <Shimmer />;

  // Extract restaurant details safely
  const restaurantInfo = resInfo?.cards?.find(
    (card) => card?.card?.card?.info
  )?.card?.card?.info;

  const {
    name: restaurantName,
    costForTwoMessage,
    cuisines,
    areaName,
    totalRatingsString,
    sla,
  } = restaurantInfo || {};

  // Extract item cards
  // const groupedCard = resInfo?.cards?.find((card) => card?.groupedCard)
    // ?.groupedCard;
  // const regularCards = groupedCard?.cardGroupMap?.REGULAR?.cards;
  // const recommendedSection = regularCards?.find(
  //   (card) => card?.card?.card?.itemCards
  // );
  // console.log(regularCards)
  // const itemCards = recommendedSection?.card?.card?.itemCards;

  // const categories = regularCards.filter((c)=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  // console.log(categories)


  const menuCards = resInfo?.cards?.find(
    (card) => card?.groupedCard
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = menuCards
    ?.filter((card) => card?.card?.card?.["@type"]?.includes("ItemCategory"))
    ?.map((card) => card?.card?.card);
    


  return (
    <div className="restaurant-page">
      {/* Top Section: Restaurant Info */}
      <div className="restaurant-card">
        <h1>{restaurantName}</h1>

        <div className="info-top">
          <div className="rating">
            <span className="star">★</span> {totalRatingsString}
          </div>
          <div className="price">{costForTwoMessage}</div>
        </div>

        <div className="cuisine">{cuisines?.join(", ")}</div>

        <div className="outlet-info">
          <div className="dot-line">
            <span className="dot" />
            <span className="line" />
          </div>
          <div className="outlet-details">
            <span className="outlet-title">Outlet</span>
            <span>{"  "}</span>
            <span className="outlet-area">{areaName} ▼</span>
            <div className="delivery-time">{sla?.slaString}</div>
          </div>
        </div>
      </div>

{/*       
      <div className="menu-items">
        <h2>Menu Items</h2>
        <ul>
          {itemCards?.map((item) => {
            const info = item?.card?.info;
            if (!info) return null;

            const {
              id,
              name,
              defaultPrice,
              price,
              description,
              ratings,
            } = info;

            const displayPrice = (defaultPrice ?? price) ? (defaultPrice ?? price) / 100 : "N/A";

            return (
              <li key={id}>
                <h3>{name}</h3>
                <p>₹{displayPrice}</p>
                <p>{description}</p>
                <p>
                <span className="green-star">⭐</span>{" "}
                   {ratings?.aggregatedRating?.rating
                   ? `${ratings.aggregatedRating.rating} (${ratings.aggregatedRating.ratingCount})`
                   : "No rating"}
                   </p>

              </li>
            );
          })}  */}
 

        {/* </ul> */}
      {/* </div> */}
           
           {/*Injecting the Menu-items */}
           <Categories categories={categories} />


    </div>
  );
};

export default RestaurantMenu;





// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer.js";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     try {
//       const data = await fetch(
//         "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.1335219&lng=75.8419579&restaurantId=74739&catalog_qa=undefined&submitAction=ENTER"
//       );
//       const json = await data.json();
//       setResInfo(json.data);
//     } catch (error) {
//       console.error("Failed to fetch menu:", error);
//     }
//   };

//   // ❗ Show shimmer while loading
//   if (!resInfo) return <Shimmer />;

//   // ✅ Extract restaurant details safely
//   const restaurantInfo = resInfo?.cards?.find(
//     (card) => card?.card?.card?.info
//   )?.card?.card?.info;

//   let { name, costForTwoMessage, cuisines, areaName ,totalRatingsString ,sla } = restaurantInfo || {};

//  // Step 1: Get groupedCard from top-level cards
// const groupedCard = resInfo?.cards?.find(card => card?.groupedCard)?.groupedCard;

// // Step 2: Get REGULAR menu section
// const regularCards = groupedCard?.cardGroupMap?.REGULAR?.cards;

// // Step 3: Find the 'Recommended' section (or first section with itemCards)
// const recommendedSection = regularCards?.find(
//   (card) => card?.card?.card?.itemCards
// );

// // Step 4: Get the array of items
// const itemCards = recommendedSection?.card?.card?.itemCards;

// console.log(itemCards);

// const {name,defaultPrice,description,ratings} = itemCards?.[0]?.card?.info




  

//   return (
//     <div className="restaurant-page">
//       <div className="restaurant-card">
//         <h1>{name}</h1>

//         <div className="info-top">
//           <div className="rating">
//             <span className="star">★</span> {totalRatingsString}
//           </div>
//           <div className="price">{costForTwoMessage}</div>
//         </div>

//         <div className="cuisine">{cuisines?.join(", ")}</div>

//         <div className="outlet-info">
//           <div className="dot-line">
//             <span className="dot" />
//             <span className="line" />
//           </div>
//           <div className="outlet-details">
//             <span className="outlet-title">Outlet</span>
//             <span className="outlet-area">{areaName} ▼</span>
//             <div className="delivery-time">{sla?.slaString}</div>
//           </div>
//         </div>
//       </div>

//       <div className="menu-items">
//         <h2>Menu -Items</h2>
//         <ul>
//           <li>{name}</li>
//           <li> {defaultPrice/100}</li>
//           <li><p>{description}</p>
//           </li>
//           <li>{ratings.aggregateRating}</li>
//         </ul>
//         {/* TODO: map itemCards here */}
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;













































// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const RestaurantMenu = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const { resId } = useParams(); // get resId from URL

//   useEffect(() => {
//     fetchMenu();
//   }, [resId]);

//   const fetchMenu = async () => {
//     const data = await fetch(
//       `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.1335219&lng=75.8419579&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
//     );
//     const json = await data.json();

//     const regularCards = json?.data?.cards
//       ?.find((card) => card.groupedCard)
//       ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

//     const items = regularCards
//       ?.flatMap((card) => card.card?.card?.itemCards || [])
//       ?.map((item) => item.card?.info);

//     setMenuItems(items || []);
//   };

//   return (
//     <div className="menu">
//       <h1>Restaurant Menu</h1>
//       <div className="menu-items-info">
//         {menuItems.map((item, index) => (
//           <div key={`${item.id}-${index}`} className="menu-item">
//             <h3>{item.name}</h3>
//             <p>₹{(item.price || item.defaultPrice) / 100}</p>
//             <p>{item.description}</p>
//             <p>⭐ {item.ratings?.aggregatedRating?.rating || "N/A"}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;

