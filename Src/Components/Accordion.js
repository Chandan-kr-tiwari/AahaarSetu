import { useState } from "react";
import { CDN_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const Accordion = ({ title, isOpen, onToggle, itemCards = [], categories = [] }) => {
  const [localOpenIndex, setLocalOpenIndex] = useState(null);

  const dispatch = useDispatch()

  const handleAddItems = (item)=>{
   // dispatch an action
   dispatch(addItem(item))
  }

  return (
    <div className="accordion-section">
      <div className="accordion-header" onClick={onToggle}>
        <h3>
          {title} {itemCards.length > 0 && <span>({itemCards.length})</span>}
        </h3>
        <span>{isOpen ? "🔼" : "🔽"}</span>
      </div>

      {isOpen && (
        <div className="menu-items">
          {/* Render item cards */}
          {itemCards.map((item) => {
            const info = item?.card?.info;
            if (!info) return null;

            const {
              id,
              name,
              defaultPrice,
              price,
              description,
              ratings,
              imageId,
            } = info;

            const displayPrice = (defaultPrice ?? price) / 100 || "N/A";
            const imageUrl = imageId
              ? `${CDN_URL}${imageId}`
              : "https://via.placeholder.com/150";

            return (
              <div key={id} className="menu-card">
                <div className="menu-details">
                  <h3 className="dish-name">{name}</h3>
                  <p className="dish-price">₹{displayPrice}</p>
                  {ratings?.aggregatedRating?.rating && (
                    <p className="dish-rating">
                      ⭐ {ratings.aggregatedRating.rating} (
                      {ratings.aggregatedRating.ratingCount})
                    </p>
                  )}
                  <p className="dish-description">{description}</p>
                </div>
                <div className="menu-img-container">
                  <img className="menu-img" src={imageUrl} alt={name} />
                  <button className="add-btn" onClick={()=>handleAddItems(info)}>ADD</button>
                </div>
              </div>
            );
          })}

          {/* Render nested subcategories */}
          {categories.map((subCat, idx) => (
            <Accordion
              key={idx}
              title={subCat.title}
              itemCards={subCat.itemCards || []}
              categories={subCat.categories || []}
              isOpen={localOpenIndex === idx}
              onToggle={() =>
                setLocalOpenIndex((prev) => (prev === idx ? null : idx))
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;






