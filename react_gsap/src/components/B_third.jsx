import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

const B_third = () => {
  useGSAP(
    () => {
      gsap.from(".dabba", {
        rotate: 3600,
        duration: 1,
        delay: 1,
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: ".kuch" }
  );

  return (
    <main>
      <div className="container">
        <div className="circle"></div>
        <div className="dabba"></div>
      </div>
      <div className="kuch">
        <div className="circle"></div>
        <div className="dabba"></div>
      </div>
    </main>
  );
};

export default B_third;
