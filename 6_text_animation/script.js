function breakText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;
  var splittedText = h1Text.split("");
  var clutter = "";

  var halfValue = Math.floor(splittedText.length / 2);

  splittedText.forEach(function (e, i) {
    if (i < halfValue) clutter += `<span class="a">${e}</span>`;
    else clutter += `<span class="b">${e}</span>`;
  });
  h1.innerHTML = clutter;
}

breakText();

gsap.from("h1 .a", {
  y: 80,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
});

gsap.from("h1 .b", {
  y: 80,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
});
