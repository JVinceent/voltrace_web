// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");

function setOpen(open) {
  toggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
}

toggle.addEventListener("click", () => {
  setOpen(toggle.getAttribute("aria-expanded") !== "true");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    setOpen(false);
    toggle.focus();
  }
});

document.addEventListener("click", (event) => {
  if (nav.classList.contains("is-open") && !nav.contains(event.target) && !toggle.contains(event.target)) {
    setOpen(false);
  }
});

// Close the panel if the viewport grows past the mobile breakpoint
window.matchMedia("(min-width: 901px)").addEventListener("change", (event) => {
  if (event.matches) setOpen(false);
});
