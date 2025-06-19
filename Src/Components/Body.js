import RestrauntCard ,{withTopRated} from "./RestrauntCard";
import { useState, useEffect ,useContext, use } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import Usercontext from "../Utils/Usercontext";


const Body = () => {
  const [listofRestraunts, setlistofRestraunts] = useState([]);
  const [filteredListOfRestraunt, setFilteredListOfRestraunt] = useState([]);

  const TopRatedRestaurants = withTopRated(RestrauntCard)

  // State for search input
  const [searchText, setSearchText] = useState("");

  // Fetch restaurants on component mount
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.1335219&lng=75.8419579&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  
 


    
    const json = await data.json();
    console.log(json);

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];

    setlistofRestraunts(restaurants);
    setFilteredListOfRestraunt(restaurants);
  };

 const onlineState = useOnlineStatus()

 if(onlineState===false) 
  return (
    
    <h1>It's look like you're offline , please check your internet connection 😒😒</h1>
  )

  const {loggedInUser,setUserName} = useContext(Usercontext)

  // Show shimmer while loading
  if (!listofRestraunts || listofRestraunts.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="functionality">
        <div className="search">
          <input className="search-input"
            type="text"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-button"
            onClick={() => {
              const filteredList = listofRestraunts.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestraunt(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter">
          <button
            className="top-rated-btn"
            onClick={() => {
              const filteredList = listofRestraunts.filter(
                (restraunt) => parseFloat(restraunt.info.avgRating) > 4.5
              );
              setFilteredListOfRestraunt(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="input">
           <label>Username:</label>
           
           <input className="input-username" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
        </div>
      </div>

      <div className="restraunt-container">
        {filteredListOfRestraunt.map((restraunt, index) => (
          <Link to={"/restaurant/"+restraunt.info.id} key={restraunt.info.id}>
          {
            parseFloat(restraunt.info.avgRating)>=4.5 ?(<TopRatedRestaurants resdata={restraunt} />) :(<RestrauntCard
            resdata={restraunt}
          />)
          }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

