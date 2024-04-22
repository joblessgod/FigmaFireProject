import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  const fetchProfuct = () => {
    let url = `https://ecommerce-sagartmg2.vercel.app/api/products/trending`;
    axios.get(url).then((res) => {
      // setProducts(res.data.data)
      console.log(res.data.data);
    });
  };

  useEffect(() => {
    fetchProfuct();
  }, []);

  return (
    <>
    {JSON.stringify(products)}
        {/* <ul>
          {products.map((el, idx) => {
            return <li key={idx}>{el.name}</li>;
          })}
        </ul> */}


      <div className="container py-[116px] sm:py-[130px] md:py-[148px] lg:py-[166px] xl:py-[188px] xxl:py-[210px]">
        {products.map((el) => {
          return (
            <div className="bg-[#695f712e] pb-[10px] pt-[32px] shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)]">
              <img src="/chair-3.png" alt="" className=" " />
              <p className="p-[15px] text-center">Cantilever chair</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
