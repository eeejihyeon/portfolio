gsap.registerPlugin(ScrollTrigger);

let tlWeb = gsap.timeline({
  scrollTrigger: {
    trigger: ".project_wrap",
    start: "top 70%",
    // markers: true,
    toggleActions: "restart none none none",
  },
});

tlWeb.to(".project_container #subTitle1 ", { duration: 1, y: 0, opacity: 1 });

tlWeb.to(".project_container #subTitle1 .title_bg", {
  duration: 0.5,
  y: 0,
  opacity: 1,
});

tlWeb.to(".project_box .preview", { duration: 1, y: 0, opacity: 1 });

tlWeb.to(".project_box .check", { duration: 1, x: 0, rotate: 345, opacity: 1 });

tlWeb.to(".project_box .detail_container", {
  duration: 1,
  x: 0,
  opacity: 1,
});

tlWeb.to(".project_container .slide_btn", { duration: 0.8, opacity: 1 });

let tlScript = gsap.timeline({
  scrollTrigger: {
    trigger: ".project_container",
    start: "top 70%",
    // markers: true,
    toggleActions: "restart none none none",
  },
});

tlScript.to(".project_container_script #subTitle2 ", {
  duration: 1,
  y: 0,
  opacity: 1,
});

tlScript.to(".project_container_script #subTitle2 .title_bg", {
  duration: 0.5,
  y: 0,
  opacity: 1,
});

tlScript.to(".project_container_script .cont1 .preview", {
  duration: 1,
  y: 0,
  opacity: 1,
});

//// 컨텐츠 하나씩
tlScript.to(".project_container_script .cont1", {
  duration: 0.8,
  y: 0,
  opacity: 1,
});

tlScript.to(".project_container_script .cont2", {
  duration: 0.8,
  y: 0,
  opacity: 1,
});

tlScript.to(".project_container_script .slide_btn", {
  duration: 0.8,
  opacity: 1,
});
