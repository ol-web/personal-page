import "normalize.css";

const topicEl = document.getElementById("topic");
const messageEl = document.getElementById("message");
const menuListEl = document.querySelector(".menu__list");
const menuBtnEl = document.querySelector(".menu__btn");
const mParts = ["ol_web", "outlook", "com"];
const m = mParts[0] + "@" + mParts[1] + "." + mParts[2];
const closeMenu = () => {
  menuBtnEl.textContent = "☰";
  menuListEl.classList.add("menu__list_closed");
};
const openMenu = () => {
  menuBtnEl.textContent = "×";
  menuListEl.classList.remove("menu__list_closed");
};

document.querySelector(".antibot-cotact").textContent = m;

document.querySelector(".contact__form").addEventListener("submit", e => {
  e.preventDefault();
  location.href = `mailto:${m}?subject=${topicEl.value}&body=${messageEl.value}`;
});

menuBtnEl.addEventListener("click", () => {
  if (menuListEl.classList.contains("menu__list_closed")) openMenu();
  else closeMenu();
});

[].slice.call(document.querySelectorAll("[data-scroll-to-selector]")).forEach(el => {
  const selector = el.getAttribute("data-scroll-to-selector");

  el.addEventListener("click", () => {
    closeMenu();
    document.querySelector(selector).scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw" + ".js")
    .then(registration => console.log("Service worker registration successful:", registration))
    .catch(err => console.log("Service worker registration error:", err));
}
