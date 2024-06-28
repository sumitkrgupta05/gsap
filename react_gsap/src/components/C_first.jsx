import { useGSAP } from "@gsap/react";
import React, { useState } from "react";
import gsap from "gsap";

const C_first = () => {
  const [gola, setGola] = useState(0);
  const random = gsap.utils.random(-600, 600, 10);

  useGSAP(() => {
    gsap.to(".circle", {
      x: gola,
      duration: 0.5,
    });
  }, [gola]);

  return (
    <main>
      <button
        onClick={() => {
          setGola(random);
        }}
      >
        Animate
      </button>
      <div className="circle"></div>
    </main>
  );
};

export default C_first;
