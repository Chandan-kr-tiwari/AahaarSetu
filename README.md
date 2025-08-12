# 🍽️ AhaarSetu

![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Styles-blue?style=for-the-badge&logo=css3)
![React Router](https://img.shields.io/badge/React_Router-v6.4%2B-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Redux](https://img.shields.io/badge/React_Redux-v8.1%2B-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)



> **AhaarSetu-Swiggy based app** that fetches live restaurant data from the Swiggy API. Search, filter, and explore delicious restaurants with an intuitive UI.

---


## 🚀 Features

✅ **Paste Swiggy API URL** in the Body component to fetch live restaurants.  
✅ **Live Data Fetching** directly from Swiggy’s API.  
✅ **Shimmer UI** for smooth loading experience.  
✅ **Search Restaurants** by name instantly.  
✅ **Filter by Ratings** (4+ stars filter).  
✅ **Dynamic Routing** using React Router v6+.   
✅ **Clean Component Architecture** with reusable UI parts.
✅ **Username** persists for all the pages by using react redux.
✅ **Online and Offline** ui has also integrated.



---

## 📦 Tech Stack

- **Frontend:** React 18, JavaScript (ES6+), CSS3  
- **Routing:** React Router v6+  
- **Data Fetching:** Fetch API  
- **UI Patterns:** Shimmer UI, reusable components  
- **State Management:** React Hooks (`useState`, `useEffect`)  

---

## 🧩 How It Works

1. **Paste the Swiggy API URL** into the `Body` component.  
2. **Fetch live restaurant data** using `fetch()`.  
3. **Render restaurant cards** dynamically.  
4. **Apply search & filter logic** on the client side.  

---

## 📜 Example Body Component Code

```bash
const fetchApi = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.1335219&lng=75.8419579&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const json = await data.json();
  console.log(json);
};
```

💡 Tip: You can replace the URL with your own Swiggy location API URL to get restaurants for your area.

## How to Get Your Swiggy API URL

1.Open Swiggy.com in your browser.

2.Select your location manually or allow GPS access.

3.Open Developer Tools (F12 or right-click → Inspect).

4.Go to the Network tab.

5.Search for a request that looks like:
```bash
/dapi/restaurants/list/v5?lat=XXXX&lng=YYYY
```
6.Copy the full URL (with latitude & longitude) and paste it in the fetch() function inside Body.js.


## ⚙️ Installation & Setup

```bash
#  Clone the repo
git clone https://github.com/Chandan-kr-tiwari/AahaarSetu.git

#  Navigate into the folder
cd AahaarSetu

#  Install dependencies
npm install

#  Start the development server
npm run start
```

##  Usage
1. Start the app using npm run start.

2. Paste your Swiggy API URL in the Body.js component.

3. The app will fetch and display restaurants for your selected location.

4. Use the Search bar to find specific restaurants.

5. Click Top Rated filter to view the best restaurants.


##  License
This project is licensed under the MIT License — you’re free to use, modify, and distribute it.


## Author

[Chandan Kr Tiwari](https://github.com/Chandan-kr-tiwari)


