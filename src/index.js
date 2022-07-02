import "./assets/scss/main.scss";
require("./index.pug");

const toggleIcon = document.getElementById("toggle-icon");
const overlayDiv = document.getElementById("overlay");
const nav = document.getElementById("menu");
const body = document.getElementsByTagName("body")[0];
const faqClickArea = document.querySelectorAll(".faq-container");

faqClickArea.forEach(element => {
  element.addEventListener('click', (e) => {
    element.parentElement.classList.toggle('active');
  });
});

function closeMenu() {
  nav.classList.remove("active");
  overlayDiv.style.visibility = "hidden";
  body.style.overflow = "visible";
  toggleIcon.setAttribute("aria-expanded", "false");
  toggleIcon.setAttribute("aria-label", "Abrir menu");
}

toggleIcon.addEventListener("click", function (e) {
  if (nav.classList.contains("active")) {
    closeMenu();
  } else {
    toggleIcon.setAttribute("aria-expanded", "true");
    toggleIcon.setAttribute("aria-label", "Fechar menu");
    overlayDiv.style.visibility = "visible";
    nav.classList.add("active");
    body.style.overflow = "hidden";
    e.currentTarget.setAttribute("aria-expanded", "true");
    toggleIcon.setAttribute("aria-label", "Fechar menu");
  }
});

overlayDiv.addEventListener("click", function (e) {
  closeMenu();

  dropLink.classList.remove("active");
  dropLink.setAttribute("aria-expanded", "false");
  dropLink.setAttribute("aria-label", "Abrir submenu");
  dropLink.nextElementSibling.style.marginTop = "0rem";

  dropLinkFerramenta.classList.remove("active-ferramentas");
  dropLinkFerramenta.nextElementSibling.style.marginTop = "0rem";
  dropLinkFerramenta.setAttribute("aria-expanded", "false");
  dropLinkFerramenta.setAttribute("aria-label", "Abrir submenu");
});
