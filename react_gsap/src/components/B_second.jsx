import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const B_second = () => {
  const dabbaRef = useRef();

  useGSAP(() => {
    gsap.from(dabbaRef.current, {
      rotate: 3600,
      duration: 1,
      delay: 1,
      yoyo: true,
      repeat: -1,
    });
  });

  return (
    <main>
      <div className="container">
        <div className="circle"></div>
        <div ref={dabbaRef} className="dabba"></div>
      </div>
      <div className="kuch">
        <div className="circle"></div>
        <div className="dabba"></div>
      </div>
    </main>
  );
};

export default B_second;
