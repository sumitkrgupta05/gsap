import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const A_first = () => {
  useGSAP(() => {
    gsap.to(".box", {
      y: 50,
      opacity: 0,
      yoyo: true,
      delay: 0.4,
      duration: 0.6,
      repeat: -1,
    });
  });
  return (
    <main>
      <div className="box">Hello</div>
    </main>
  );
};

export default A_first;
