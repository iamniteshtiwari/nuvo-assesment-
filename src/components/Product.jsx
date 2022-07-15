import React from "react";
import Rate from "./Rate";

export const Product = ({ product }) => {
  return (
    <div>
      <div className="product-detail">
        <div className="product-price">${product.price}</div>
        <div className="product-description">{product.description}</div>
        <Rate />
        <button className="product-addCard">Add to Card</button>
      </div>
    </div>
  );
};
export default Product;
