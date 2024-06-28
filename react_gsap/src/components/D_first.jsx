import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const D_first = () => {
  const boxRef = useRef();

  const { contextSafe } = useGSAP();

  const rotateBox = contextSafe(() => {
    gsap.to(boxRef.current, {
      rotate: 360,
      duration: 1,
    });
  });

  return (
    <main>
      <button id="btm" onClick={rotateBox}>
        {" "}
        Animate
      </button>
      <div ref={boxRef} className="box">
        Box
      </div>
    </main>
  );
};

export default D_first;
