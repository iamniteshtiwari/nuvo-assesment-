import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Product from "../components/Product";
import Api from "../Api";
import Cardarrow from "../components/Cardarrow";

const api = new Api();

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const limit = 5;
  useEffect(() => {
    api
      .getProducts({ limit })
      .then((response) => {
        setProducts(response.data);
        setSelectedProductId(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="home">
      <Heading />
      <section className="main">
        <div className="card-list">
          {products.length > 0 && (
            <>
              {products.map((product) => (
                <Cardarrow
                  key={product.id}
                  product={product}
                  selectedProductId={selectedProductId}
                  setSelectedProductId={setSelectedProductId}
                />
              ))}
            </>
          )}
        </div>
        <div className="details">
          {selectedProductId ? <Product product={selectedProductId} /> : null}
        </div>
      </section>
    </div>
  );
};

export default Home;
