import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export default function Home() {
  const [products, setproducts] = useState([]);
  async function getProducts() {
    let res = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products"
    );
    console.log(res.data.data);
    setproducts(res.data.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <div className="col-md-2" key={product._id}>
                <div className="item">
                  <img src={product.imageCover} className="w-100" alt="" />
                  <p>{product.title}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div class="spinner-container">
                <div class="sk-folding-cube">
                    <div class="sk-cube sk-cube1"></div>
                    <div class="sk-cube sk-cube2"></div>
                    <div class="sk-cube sk-cube4"></div>
                    <div class="sk-cube sk-cube3"></div>
                </div>
            </div>
        )}
      </div>
    </>
  );
}
