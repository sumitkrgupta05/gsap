import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const A_second = () => {
  const gsapRef = useRef();

  useGSAP(() => {
    gsap.to(gsapRef.current, {
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
      <div ref={gsapRef} className="box">
        Hello
      </div>
    </main>
  );
};

export default A_second;
