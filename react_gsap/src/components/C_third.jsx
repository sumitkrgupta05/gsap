import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const C_third = () => {
  const randbtn = gsap.utils.random(-600, 600, 10);
  const randrot = gsap.utils.random(-90, 90, 10);
  const randfly = gsap.utils.random(-200, 200, 30);

  const [value, setValue] = useState();
  const [roti, setRoti] = useState();
  const [fly, setFly] = useState();
  const imageRef = useRef();

  useGSAP(() => {
    gsap.to(imageRef.current, {
      x: value,
      y: randfly,
    duration: 0.5,
      rotate: roti,
    });
  }, [randbtn, randrot, randfly]);

  return (
    <main>
      <img
        onClick={() => {
          setValue(randbtn);
          setRoti(randrot);
          setFly(randfly);
        }}
        ref={imageRef}
        src="https://images.vexels.com/media/users/3/242241/isolated/preview/409d95bf597e130c6c1b1d2ac3f5dbf5-side-fly-geometric-color-stroke.png"
        alt=""
      />
    </main>
  );
};

export default C_third;
