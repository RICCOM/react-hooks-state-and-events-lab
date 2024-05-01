
import React, { useState } from "react";

const Item = ({ name, category }) => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span> - <span>{category}</span>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
};

export default Item;
