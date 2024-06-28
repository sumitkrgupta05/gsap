gsap.from("#page2 #box", {
  scale: 0,
  opacity: 0,
  rotate: 720,
  duration: 1,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    // start or end ke bich animation hoga jaise scroll hoga waise
    // 2type: 1) true 2) [1-5]ac to smoothness
    // scrub: true,
    scrub: 2,
  },
});
