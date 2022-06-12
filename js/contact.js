gsap.registerPlugin(ScrollTrigger);

let tlContact = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact_wrap",
    start: "top 70%",
    // markers: true,
    toggleActions: "restart none none none",
  },
});

tlContact.to(".circle", {
  duration: 1,
  y: 0,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});

tlContact.to(".info1", {
  duration: 0.8,
  x: 0,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});

tlContact.to(".info2", {
  duration: 0.5,
  x: 0,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});

tlContact.to(".info3", {
  duration: 0.5,
  x: 0,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});

tlContact.to(".info4", {
  duration: 0.5,
  x: 0,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});

tlContact.to(".copy", {
  duration: 0.5,
  opacity: 1,
});

tlContact.to("#subTitle1 ", {
  duration: 1,
  y: 0,
  opacity: 1,
  delay: -4,
});

tlContact.to(".move_btn", {
  duration: 0.5,
  x: 0,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
  delay: -3,
});

tlContact.to("#subTitle2", {
  duration: 1,
  y: 0,
  opacity: 1,
  delay: -2,
});

tlContact.to(".email", {
  duration: 0.5,
  x: 0,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
  delay: -1,
});
