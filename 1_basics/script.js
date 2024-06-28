// <!-- PART => 1  -->

// gsap.to("#box1", {
//   x: 1200,
//   duration: 2,
//   delay: 1,
//   rotate: 1480,
//   backgroundColor: "blue",
//   borderRadius: "50%",
//   scale: 0.5,
// });

// gsap.to("#box2", {
//   x: 1200,
//   duration: 0.5,
//   delay: 0.7,
// });

// gsap.from("#box2", {
//   x: 1200,
//   duration: 0.5,
//   delay: 1.3,
// });

// <!-- PART => 2  -->

// gsap.from("h1", {
//   opacity: 0,
//   duration: 1,
//   y: 40,
//   delay: 1,
//   //   stagger: 0.5, // 1-2-3
//   stagger: -0.5, //3-2-1
// });

// <!-- PART => 3  -->
gsap.to("#dabba", {
  x: 1200,
  duration: 1,
  delay: 1,
  rotate: 360,
  repeat: -1,
  yoyo: true,
});

// PART => 4 [ -- TIMELINE -- ]

// gsap.to("#box1", {
//   x: 1300,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });
// gsap.to("#box2", {
//   x: 1300,
//   backgroundColor: "yellow",
//   duration: 1.5,
//   delay: 2.5,
// });
// gsap.to("#box3", {
//   x: 1250,
//   scale: 0.5,
//   borderRadius: "50%",
//   duration: 1.5,
//   delay: 4,
// });

// THE ABOVE CODE IS WORKING INN ASYNCHRONOUS WAY MEANS BHTT CALC KRKE SB KRNA PDRA H EK WO FIR ADD DELAY SO ASEA KM NI CHLEGA. SBKO SYNCHRONOUS ME CHLNA HOGA LIKE TRAIN KA DABBA 1-2-3-4. SO, ISKE LIE HMLOG TIMELINE USE KRTE H!!

// var tl = gsap.timeline();

// tl.to("#box1", {
//   x: 1300,
//   rotate: 360,
//   duration: 1.2,
//   delay: 0.7,
// });
// tl.to("#box2", {
//   x: 1300,
//   duration: 1.2,
// });
// tl.to("#box3", {
//   x: 1300,
//   duration: 1.2,
// });

// TimeLine nav example

var tl = gsap.timeline();
tl.from("h2", {
  y: -30,
  opacity: 0,
  duration: 0.6,
  delay: 0.3,
});
tl.from("h4", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  delay: 0.3,
  stagger: 0.3,
});
tl.from("h1", {
  y: 20,
  opacity: 0,
  duration: 0.8,
  scale: 0.2,
});
