import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

const B_first = () => {
  //container wla ka code h
  //here container or kuch dono ka dabba ek sth chlra h.
  //Toh agr koi ek chlna h ya kch krna h toh uske lie ye tarika glt h.
  useGSAP(() => {
    gsap.to(".dabba", {
      rotate: 3600,
      duration: 1,
      delay: 1,
      yoyo: true,
      repeat: -1,
    });
  });
  //So, isliye hmlog useRef use krnge yhaa

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

export default B_first;
