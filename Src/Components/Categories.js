// RestaurantMenu.js


// const Categories = ({ categories }) => {
//   // Helper function which will render accordion and heder of categories on the basis of condition
//   const renderCategories = (categories) => {
//     return categories.map((category, index) => {
//       if (category.itemCards) {
//         return (
//           <Accordion
//             key={index}
//             title={category.title}
//             itemCards={category.itemCards}
//           />
//         );
//       } else if (category.categories) {
//         // Nested category
//         return (
//           <div key={index} className="nested-category">
//             <h2 className="nested-header">{category.title}</h2>
//             {renderCategories(category.categories)}
//           </div>
//         );
//       } else {
//         return null;
//       }
//     });
//   };

//   return <div className="restaurant-menu">{renderCategories(categories)}</div>;
// };

import Accordion from "./Accordion";
import { useState } from "react";

const Categories = ({ categories }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <div className="restaurant-menu">
      {categories.map((category, index) => (
        <Accordion
          key={index}
          title={category.title}
          itemCards={category.itemCards || []}
          categories={category.categories || []}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Categories;

