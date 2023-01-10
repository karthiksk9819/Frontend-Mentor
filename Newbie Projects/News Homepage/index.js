let openBtn = document.querySelector(".open");
let closeBtn = document.querySelector(".close");
let hero = document.querySelector(".navbar__menu");
let filter = document.querySelector(".filter");
let body = document.querySelector("body");
let main = document.querySelector("main");
let clicked = false;
let navbar = document.querySelector(".navbar__menu");

let header = document.querySelector(".header");
body.style.overflow = "auto";
console.log(header);
body.addEventListener("click", (e) => {
  if (e.target == openBtn) {
   
    toggler();
    body.style.overflow = "hidden";
    header.style.overflow = "auto";

    clicked = true;
  }
  if (e.target == closeBtn) {
    toggler();
    body.style.overflow = "auto";
    header.style.overflow = "hidden";

    clicked = false;
  }
  if (clicked) {
    if (e.target != navbar && e.target != openBtn) {
      toggler();

      header.style.overflow = "hidden";
      body.style.overflow = "auto";
    }
  }
});

toggler = () => {
  hero.classList.toggle("hidden");
  filter.classList.toggle("active");
  closeBtn.classList.toggle("closed");
  closeBtn.classList.toggle("opened");
  openBtn.classList.toggle("opened");
  openBtn.classList.toggle("closed");
  clicked = false;
};

togglerTwo = () => {
  hero.classList.contains("hidden")
    ? hero.classList.remove("hidden")
    : hero.classList.add("hidden");

  closeBtn.classList.contains("opened")
    ? closeBtn.classList.remove("opened")
    : closeBtn.classList.add("opened");

  closeBtn.classList.contains("closed")
    ? closeBtn.classList.remove("closed")
    : closeBtn.classList.add("closed");

  openBtn.classList.contains("opened")
    ? openBtn.classList.remove("opened")
    : openBtn.classList.add("opened");

  openBtn.classList.contains("closed")
    ? openBtn.classList.remove("closed")
    : openBtn.classList.add("closed");
};
