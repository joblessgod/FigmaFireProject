import React from "react";
import BreadCrumb from "../components/Common/BreadCrumb";

export default function Blogs() {
  return (
    <>
      <BreadCrumb
        title={"Blogs"}
        links={[
          { title: "Home", url: "/" },
          { title: ". Pages", url: "/pages" },
          { title: ". Blogs", url: "/blogs" },
        ]}
      />
      <div>Blogs</div>
    </>
  );    
}
