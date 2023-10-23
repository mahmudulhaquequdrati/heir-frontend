/* eslint-disable @next/next/no-img-element */
import React from "react";
import img from "../../../public/w.png";
import img2 from "../../../public/2.png";

export default function Featured() {
  return (
    <div className="p-6 md:px-8 lg:px-12 flex justify-center items-center gap-4">
      <div>
        <img src={"/w.png"} alt="none" />
      </div>
      <div>
        <h1>Trust and safety features for your Protection</h1>
        <div>
          <img src={"/2.png"} alt="2" />
        </div>
      </div>
    </div>
  );
}
