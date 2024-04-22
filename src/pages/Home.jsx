import React from "react";
import Banner from "../pages/home/components/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product from "../pages/Product";

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

  return (
    <>
      {/* <div className="absolute box bg-orange-200 left-6 top-3 z-10"></div>
    <div className="absolute box bg-black z-0  "></div>
  <hr /> */}

      <Slider {...settings}>
        {banners.map((el) => {
          return (
            <Banner
            background={el.background}
            label={el.label}
            heading={el.heading}
            description={el.description}
            redirectUrl={el.redirectUrl}
            />
          );
        })}
        {/* <Banner background={"bg-banner-1"} />
        <Banner background={"bg-banner-2"} />
      <Banner background={"bg-banner-3"} /> */}
      </Slider>

      <Product />
    </>
  );
}
