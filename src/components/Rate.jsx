import React from "react";
import product from "./Product";

export const Rate = () => {
  return (
    <div>
      <div className="product-rating">
        {product.rate}
        <div className="product-detail__rating__count"></div>
      </div>
    </div>
  );
};
export default Rate;
