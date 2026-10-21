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

// Close the panel after picking a section on mobile
nav.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => setOpen(false));
});

// Frost the sticky header once the page has scrolled
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Highlight the menu item for the section in view
const sectionLinks = [...document.querySelectorAll('.nav-list a[href^="#"]')];
const sections = sectionLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

// The active section is the last one whose top has passed 40% of the screen,
// so blocks after a section (validation, team, footer) keep its menu item lit
function updateCurrent() {
  let current = sections[0];
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.4) current = section;
  });
  sectionLinks.forEach((link) => {
    if (link.getAttribute("href") === `#${current.id}`) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
}

if (sections.length) {
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateCurrent();
        ticking = false;
      });
    },
    { passive: true }
  );
  // Settle the highlight after smooth scrolls and menu jumps
  window.addEventListener("scrollend", updateCurrent);
  window.addEventListener("hashchange", updateCurrent);
  updateCurrent();
}

// Reveal each section's content once as it scrolls into view
const revealTargets = document.querySelectorAll("main > section:not(.hero):not(.collage) > .container");

if (revealTargets.length && "IntersectionObserver" in window) {
  document.documentElement.classList.add("js");
  const reveal = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        reveal.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px" }
  );
  revealTargets.forEach((el) => {
    el.classList.add("reveal");
    reveal.observe(el);
  });
}

// Close the panel if the viewport grows past the mobile breakpoint
window.matchMedia("(min-width: 901px)").addEventListener("change", (event) => {
  if (event.matches) setOpen(false);
});

// Tabs (About page): click or use the arrow keys to switch panels
document.querySelectorAll('[role="tablist"]').forEach((list) => {
  const tabs = [...list.querySelectorAll('[role="tab"]')];

  function select(tab) {
    tabs.forEach((other) => {
      const selected = other === tab;
      other.setAttribute("aria-selected", String(selected));
      other.tabIndex = selected ? 0 : -1;
      document.getElementById(other.getAttribute("aria-controls")).hidden = !selected;
    });
    tab.focus();
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => select(tab));
    tab.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") select(tabs[(i + 1) % tabs.length]);
      if (event.key === "ArrowLeft") select(tabs[(i - 1 + tabs.length) % tabs.length]);
    });
  });
});

// Plans page: switch the unit price between paying in full and installments
const billingButtons = document.querySelectorAll("[data-billing]");

billingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const mode = button.dataset.billing;
    billingButtons.forEach((other) => other.setAttribute("aria-pressed", String(other === button)));
    document.querySelectorAll(`[data-${mode}]`).forEach((el) => {
      el.textContent = el.dataset[mode];
    });
  });
});
