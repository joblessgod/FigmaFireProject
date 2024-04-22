import React from "react";

export default function Products() {
  return (
    <>
      <div className="container py-[116px] sm:py-[130px] md:py-[148px] lg:py-[166px] xl:py-[188px] xxl:py-[210px]">
        {[1, 2, 3, 4].map((el) => {
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
