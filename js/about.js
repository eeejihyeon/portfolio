gsap.registerPlugin(ScrollTrigger);

// gsap.to("#subTitle1", {
//   x: 700,
//   opacity: 1,
//   duration: 5,
//   scrollTrigger: {
//     trigger: ".about_intro_main",
//     start: "top center",
// markers: true,
//   },
// });

let tlInfo = gsap.timeline({
  scrollTrigger: {
    trigger: ".about_intro",
    start: "top 70%",
    // markers: true,
    toggleActions: "restart none none none",
  },
});

tlInfo.to(".info #subTitle1 ", { duration: 1, y: 0, opacity: 1 });

tlInfo.to(".info #subTitle1 .title_bg", { duration: 0.5, y: 0, opacity: 1 });

tlInfo.to(".info .personal", { duration: 1, y: 0, opacity: 1 });

tlInfo.to(".info .txt1", { duration: 0.8, y: 0, opacity: 1 });

tlInfo.to(".info .txt2", { duration: 0.8, y: 0, opacity: 1 });

tlInfo.to(".info .txt3", { duration: 0.8, y: 0, opacity: 1 });

tlInfo.to(".info .info_circle1", { duration: 0.5, x: 0, opacity: 1 });

tlInfo.to(".info .info_circle2", { duration: 0.5, x: 0, opacity: 1 });

tlInfo.to(".info .info_circle3 ", { duration: 0.5, x: 0, opacity: 1 });
tlInfo.to(".info .info_circle4 ", {
  duration: 0.5,
  x: 0,
  opacity: 1,
  delay: -0.5,
});

let tlAdv = gsap.timeline({
  scrollTrigger: {
    trigger: ".info",
    start: "top 70%",
    // markers: true,
    toggleActions: "restart none none none",
  },
});

tlAdv.to(".advantage #subTitle2 ", { duration: 1, y: 0, opacity: 1 });

tlAdv.to(".advantage #subTitle2 .title_bg", {
  duration: 0.5,
  y: 0,
  opacity: 1,
});

tlAdv.to(".advantage .graph", { duration: 1, opacity: 1 });

tlAdv.to(".advantage .key1", { duration: 0.5, x: 0, opacity: 1 });

tlAdv.to(".advantage .key2", { duration: 0.5, x: 0, opacity: 1 });
tlAdv.to(".advantage .key3", { duration: 0.5, x: 0, opacity: 1 });
tlAdv.to(".advantage .key4", { duration: 0.5, x: 0, opacity: 1 });
tlAdv.to(".advantage .key5", { duration: 0.5, x: 0, opacity: 1 });

let tlSkill = gsap.timeline({
  scrollTrigger: {
    trigger: ".advantage",
    start: "top 70%",
    // markers: true,
    toggleActions: "restart none none none",
  },
});

tlSkill.to(".skill #subTitle3 ", { duration: 1, y: 0, opacity: 1 });

tlSkill.to(".skill #subTitle3 .title_bg", { duration: 0.5, y: 0, opacity: 1 });

tlSkill.to(".skill .html", {
  duration: 0.5,
  y: 0,
  opacity: 1,
});

tlSkill.to(".skill .css", {
  duration: 0.5,
  y: 0,
  opacity: 1,
});

tlSkill.to(".skill .js", {
  duration: 0.5,
  y: 0,
  opacity: 1,
});

tlSkill.to(".skill .react", {
  duration: 0.5,
  y: 0,
  opacity: 1,
});

tlSkill.to(".skill .ts", {
  duration: 0.5,
  y: 0,
  opacity: 1,
});

tlSkill.to(".skill .php", {
  duration: 0.5,
  y: 0,
  opacity: 1,
});

tlSkill.to(".skill .skill_desc_container", { duration: 1, opacity: 1 });
