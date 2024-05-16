import React from "react";
import BreadCrumb from "../components/Common/BreadCrumb";

export default function Pages() {
  return (
    <>
      <BreadCrumb
        title={"Pages"}
        links={[
          { title: "Home", url: "/" },
          { title: ". Pages", url: "/Pages" },
        ]}
      />
      <div>Pages</div>
    </>
  );
}
