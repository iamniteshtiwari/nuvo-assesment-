import React, { useState } from "react";
import ArrowOffImage from "../images/arrowDeactive.svg";
import ArrowOnImage from "../images/arrowActive.svg";
import { useEffect } from "react";

export const Cardarrow = ({
  product,
  selectedProductId,
  setSelectedProductId,
}) => {
  const [active, setActive] = useState(true);
  useEffect(() => {
    setActive(product === selectedProductId);
    // eslint-disable-next-line
  }, [selectedProductId]);
  return (
    <div>
      <div className="card" onClick={() => setSelectedProductId(product)}>
        <img className="image" src={product.image} alt="" />
        <div className="title">{product.title}</div>
        {active ? (
          <img className="arrow" src={ArrowOnImage} alt="" />
        ) : (
          <img className="arrow" src={ArrowOffImage} alt="" />
        )}
      </div>
    </div>
  );
};
export default Cardarrow;
