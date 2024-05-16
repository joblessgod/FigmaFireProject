import React from "react";
import BreadCrumb from "../components/Common/BreadCrumb";

export default function Contact() {
  return (
    <>
      <BreadCrumb
        title={"Contact"}
        links={[
          { title: "Home", url: "/" },
          { title: ". Pages", url: "/pages" },
          { title: ". Contact", url: "/contact" },
        ]}
      />

      <div>Contact</div>
    </>
  );
}
