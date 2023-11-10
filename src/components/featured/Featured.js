/* eslint-disable @next/next/no-img-element */
import React from "react";
import img from "../../../public/w.png";
import img2 from "../../../public/2.png";
import Image from "next/image";

export default function Featured() {
  return (
    <div className="p-6 md:px-8 lg:px-12 flex justify-center items-center gap-4">
      <div>
        <Image
          loading="lazy"
          width={100}
          height={100}
          src={"/w.png"} alt="none" />
      </div>
      <div>
        <h1>Trust and safety features for your Protection</h1>
        <div>
          <Image
            loading="lazy"
            width={100}
            height={100}
            src={"/2.png"} alt="2" />
        </div>
      </div>
    </div>
  );
}
