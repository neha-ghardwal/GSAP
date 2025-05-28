gsap.registerPlugin(ScrollTrigger);

// Set overflow: visible on #page to see translated content
// gsap.set("#page", { overflow: "visible" });

gsap.to("#page h1", {
  transform:  "translate(-150%)",
  scrollTrigger: {
    trigger: "#page",
    start: "top 0%",    // Changed to trigger earlier
    scrub: 2,
    markers: true,
    pin: true,

  }
});