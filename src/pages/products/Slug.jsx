import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Products from "../../components/home/Product";
import LoadingScreen from "../../components/Common/LoadingScreen";

export default function Slug() {
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProduct, setRelatedProduct] = useState([]);

  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://ecommerce-sagartmg2.vercel.app/api/products/${params.slug}`)
      .then((res) => {
        setProduct(res.data.data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://ecommerce-sagartmg2.vercel.app/api/products/trending`)
      .then((res) => {
        console.log(res.data.data);
        setRelatedProduct(res.data.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div>
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <div>
              <div>Name: {product.name}</div>
              <div>Price: ${product.price}</div>
              <div>
                Image: <img src={product.image} />
              </div>
            </div>
          )}
        </div>

        <div className="text-center font-Lato text-[30px] underline">
          Related Products
          <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {relatedProduct.map((el) => {
              return (
                <>
                  <Products
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    price={el.price}
                    image={el.image}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
