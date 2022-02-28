const menu = document.querySelector(".menu");
const darkOverlay = document.querySelector(".dark-overlay");

menu.addEventListener("click", () => {
  if (menu.getAttribute("data-toggle") === "open") {
    darkOverlay.classList.remove("hide");
    menu.setAttribute("src", "../images/icon-close.svg");
    menu.setAttribute("data-toggle", "close");
  } else {
    darkOverlay.classList.add("hide");
    menu.setAttribute("src", "../images/icon-hamburger.svg");
    menu.setAttribute("data-toggle", "open");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    darkOverlay.classList.add("hide");
    menu.setAttribute("src", "../images/icon-hamburger.svg");
    menu.setAttribute("data-toggle", "open");
  }
});
