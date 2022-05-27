function counter() {
  let skillCount = document.querySelector(".skill_value"),
    count = 0;

  let counting = setInterval(function () {
    if (count == 95) {
      clearInterval(counting);
      return false;
    }
    count += 1;
    skillCount.innerHTML = new Intl.NumberFormat().format(count);
  }, 30);
}

window.addEventListener("scroll", counter);

function count() {
  let scrollTop =
    document.documentElement.scrollTop || window.pageYOffset || window.scrollY;

  const sec2 = document.getElementById("section2");
  const skill = document.querySelector(".skill");
  const skillTop = sec2.offsetTop + skill.offsetTop - 150;
  const skillHeight = sec2.offsetTop + skill.offsetTop + skill.offsetHeight;

  if (scrollTop >= skillTop && scrollTop <= skillHeight) {
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      counter.innerText = "0";

      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target / 300;

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 50);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
      //
    });
    window.removeEventListener("scroll", count);
  }
}
