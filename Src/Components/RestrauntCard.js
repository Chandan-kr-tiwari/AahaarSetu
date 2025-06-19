import { CDN_URL } from "../Utils/constants"

const RestrauntCard = ({ resdata }) => {
  const {
    cloudinaryImageId,
    name,
    locality,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resdata?.info;

  return (
    <div className="res-card">
      <div className="res-img-container">
        <img src={CDN_URL + cloudinaryImageId} alt={name} className="res-img" />
        <div className="overlay"></div>
      </div>

      <div className="res-details">
        <h3 className="res-name">{name}</h3>
        <div className="res-meta">
          <span className="res-rating">
            <span className="star">★</span> {avgRating}
          </span>
          <span>• {sla?.slaString || "20–25 mins"}</span>
        </div>
        <p className="res-cuisine">{cuisines?.join(", ")}</p>
        <p className="res-area">{locality}</p>
      </div>
    </div>
  );
};

// Higher order component

 export const withTopRated = (RestrauntCard)=>{
  return (props)=>{
     return( <div className="top-rated-restraunt">
      <label className="top-rated-badge">⭐ Top Rated</label>
       <RestrauntCard {...props}/>
    </div>

    )
  }
}























// const RestrauntCard = (props) => {
//   const { resdata } = props;
//   const { cloudinaryImageId, name, locality, avgRating, cuisines, costForTwo } =
//     resdata?.info;

//   return (
//     <div className="res-card">
//       <img src={CDN_URL+cloudinaryImageId} alt={name} />
//       <div className="res-card-middle">
//         <h4>{name}</h4>
//         <h4>{locality}</h4>
//         <button>{avgRating}</button>
//       </div>
//       <div className="res-card-bottom">
//         <p>{cuisines?.join(', ')}</p>
//         <p>{costForTwo}</p>
//       </div>
//     </div>
//   );
// };




export default RestrauntCard