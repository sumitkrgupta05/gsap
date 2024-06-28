import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const C_second = () => {
  const randbtn = gsap.utils.random(-600, 600, 10);
  const randrot = gsap.utils.random(-1440, 1440, 30);

  const [value, setValue] = useState();
  const [roti, setRoti] = useState();
  const dabbaRef = useRef();

  useGSAP(() => {
    gsap.to(dabbaRef.current, {
      x: value,
      duration: 1,
      rotate: roti,
    });
  }, [randbtn, randrot]);

  return (
    <main>
      <button
        onClick={() => {
          setValue(randbtn);
          setRoti(randrot);
        }}
      >
        Animate
      </button>
      <div ref={dabbaRef} className="dabba"></div>
    </main>
  );
};

export default C_second;
