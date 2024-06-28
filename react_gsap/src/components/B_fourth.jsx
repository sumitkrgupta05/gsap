import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const B_fourth = () => {
  const containerRef = useRef();
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
    { scope: containerRef }
  );

  return (
    <main>
      <div ref={containerRef} className="container">
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

export default B_fourth;
