import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../Utils/cartSlice";
import { CDN_URL } from "../Utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const getPrice = (item) => (item.defaultPrice ?? item.price) / 100;

  return (
    <div className="cart">
      <h1>Your Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="menu-items">
          {cartItems.map((item, index) => {
            const {
              id,
              name,
              defaultPrice,
              price,
              description,
              ratings,
              imageId
            } = item;

            const displayPrice = getPrice(item);
            const imageUrl = imageId
              ? `${CDN_URL}${imageId}`
              : "https://via.placeholder.com/150";

            return (
              <div key={index} className="menu-card">
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
                  <div className="btn-group">
                    <button onClick={() => handleAdd(item)}>ADD</button>
                    <button onClick={() => handleRemove(item)}>REMOVE</button>
                  </div>
                </div>
                <div className="menu-img-container">
                  <img className="menu-img" src={imageUrl} alt={name} />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {cartItems.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
