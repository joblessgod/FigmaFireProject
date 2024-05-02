import Banner from "../pages/home/components/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Products from "../pages/Products";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  let banners = [
    {
      background: "bg-banner-1",
      label: "Best Furniture For Your Castle....",
      heading: " New Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      redirectUrl: "/blogs",
    },
    {
      background: "bg-banner-2",
      label: "Second Furniture For Your Castle....",
      heading: " Second Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      redirectUrl: "/offers",
    },
    {
      background: "bg-banner-3",
      label: "Third Furniture For Your Castle....",
      heading: " Third Furniture Collection Trends in 2020",
      description:
        "Third ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      redirectUrl: "/products",
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products/trending")
      .then((res) => {
        console.log(res);
        setProducts(res.data.data);
        isLoading(false);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <Slider {...settings}>
        {banners.map((el) => {
          return (
            <Banner
              background={el.background}
              label={el.label}
              heading={el.heading}
              description={el.description}
              redirectUrl={el.redirectUrl}
              className="z-0"
            />
          );
        })}
      </Slider>

      <div className="container grid   gap-4 py-[116px] sm:py-[130px] md:grid-cols-2 md:py-[148px] lg:grid-cols-4 lg:py-[166px] xl:py-[188px] xxl:py-[210px]">
        {products.map((el) => {
          return <Products name={el.name} price={el.price} image={el.image} />;
        })}
      </div>
    </>
  );
}
