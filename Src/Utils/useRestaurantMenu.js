import { useEffect,useState } from "react";
import { MENU_API } from "./constants.js";

const useRestaurantMenu = (resId)=>{

    const [resInfo,setResInfo] = useState(null)
   
    // fetching the data
    useEffect(()=>{
      fetchData() 
    },[])

    const fetchData = async ()=>{
        const data = await  fetch(MENU_API+resId)
        const json = await data.json()
        setResInfo(json.data)
        console.log(json.data)
    }

    return resInfo
}

export default useRestaurantMenu

/*
import { useEffect, useState } from "react";
import { MENU_API } from "./constants.js";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    // Define fetchData inside useEffect
    const fetchData = async () => {
      try {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data); // Now resInfo will contain the full restaurant data
        console.log(json.data); // Useful to inspect the menu structure
      } catch (error) {
        console.error("Failed to fetch restaurant menu:", error);
      }
    };

    fetchData(); // Now this runs correctly
  }, [resId]); // Also include resId as dependency in case it changes

  return resInfo;
};

export default useRestaurantMenu;

*/
