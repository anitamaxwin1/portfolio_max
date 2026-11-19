// ---------- Dark / light mode ----------

const html = document.documentElement;
const toggle = document.querySelector("#theme-toggle");

// use the saved choice, or the device setting if nothing is saved yet
const saved = localStorage.getItem("theme");
const deviceIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(saved || (deviceIsDark ? "dark" : "light"));

toggle.addEventListener("click", function () {
  const next = html.dataset.theme === "dark" ? "light" : "dark";
  setTheme(next);
  localStorage.setItem("theme", next);
});

function setTheme(theme) {
  // the CSS reads this attribute: [data-theme="dark"]
  html.dataset.theme = theme;
  // the button shows the mode you would switch to
  toggle.textContent = theme === "dark" ? "Light" : "Dark";
}

// ---------- Contact form ----------
// Check the inputs, then show a message to the visitor.

const form = document.querySelector("form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", function (event) {
  // stop the page from reloading
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const text = form.message.value.trim();

  if (name === "") {
    showMessage("Please enter your name.", "error");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    showMessage("Please enter a valid email.", "error");
    return;
  }

  if (text.length < 10) {
    showMessage("Your message should be at least 10 characters.", "error");
    return;
  }

  showMessage("Thanks, " + name + "! Your message has been sent.", "success");
  form.reset();
});

function showMessage(text, type) {
  message.textContent = text;
  message.className = type;
}

// ---------- Scroll features ----------
// IntersectionObserver tells us when an element enters the screen,
// so we don't need to listen to every scroll event.

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// 1. Highlight the nav link of the section you are reading.
// rootMargin makes a thin line near the middle of the screen,
// and the section touching that line is the current one.
const navObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (link) {
          const isCurrent = link.getAttribute("href") === "#" + entry.target.id;
          link.classList.toggle("active", isCurrent);
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

// 2. Fade each section in the first time it appears.
const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target); // only animate once
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(function (section) {
  // the class is added here, so without JavaScript nothing stays hidden
  section.classList.add("reveal");
  navObserver.observe(section);
  revealObserver.observe(section);
});

// ---------- Typing effect in the hero ----------

const typing = document.querySelector("#typing");
const words = ["web developer", "front-end learner", "Computer Science student"];
let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function type() {
  const word = words[wordIndex];

  // add one letter, or remove one letter
  letterIndex = deleting ? letterIndex - 1 : letterIndex + 1;
  typing.textContent = word.slice(0, letterIndex);

  let delay = deleting ? 50 : 100;

  if (!deleting && letterIndex === word.length) {
    deleting = true; // word is complete, wait a bit, then delete it
    delay = 1500;
  } else if (deleting && letterIndex === 0) {
    deleting = false; // word is gone, move to the next one
    wordIndex = (wordIndex + 1) % words.length;
    delay = 400;
  }

  setTimeout(type, delay);
}

type();

// ---------- Click to copy email ----------

const copyButton = document.querySelector("#copy-email");
const emailText = copyButton.textContent;

copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText(emailText);
  copyButton.textContent = "Copied!";

  // put the email back after 1.5 seconds
  setTimeout(function () {
    copyButton.textContent = emailText;
  }, 1500);
});

// ---------- Back to top button ----------

const toTop = document.querySelector("#to-top");

// show the button only after scrolling down a bit
window.addEventListener("scroll", function () {
  toTop.classList.toggle("visible", window.scrollY > 500);
});

toTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------- Live clock ----------

const clock = document.querySelector("#clock");

function updateClock() {
  clock.textContent = new Date().toLocaleTimeString("en-GB", {
    timeZone: "Asia/Jakarta",
  });
}

updateClock();
setInterval(updateClock, 1000);

// ---------- Project details popup ----------
// <dialog> is built into HTML: showModal() opens it,
// close() closes it, and the Esc key works by itself.

const dialog = document.querySelector("#project-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogText = document.querySelector("#dialog-text");
const dialogTech = document.querySelector("#dialog-tech");

document.querySelectorAll(".details-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    const card = button.parentElement;

    // copy the card's text into the popup
    dialogTitle.textContent = card.querySelector("h3").textContent;
    dialogText.textContent = card.querySelector("p").textContent;
    dialogTech.textContent = "Built with: " + card.dataset.tech;

    dialog.showModal();
  });
});

document.querySelector("#close-dialog").addEventListener("click", function () {
  dialog.close();
});

// clicking the dark area outside the box also closes it
dialog.addEventListener("click", function (event) {
  if (event.target === dialog) {
    dialog.close();
  }
});

// ---------- Animation 1: project cards tilt toward the mouse ----------

document.querySelectorAll(".project-list div").forEach(function (card) {
  card.addEventListener("mousemove", function (event) {
    const box = card.getBoundingClientRect();

    // mouse position inside the card: -0.5 is left/top, 0.5 is right/bottom
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;

    // turn that position into a rotation (change 25 to tilt more or less)
    card.style.transform =
      "perspective(700px) rotateX(" + -y * 25 + "deg) rotateY(" + x * 25 + "deg) scale(1.08)";

    // move the light to where the mouse is (as a percentage of the card)
    card.style.setProperty("--x", (x + 0.5) * 100 + "%");
    card.style.setProperty("--y", (y + 0.5) * 100 + "%");
  });

  // mouse left the card: go back to normal
  card.addEventListener("mouseleave", function () {
    card.style.transform = "";
  });
});

document.querySelectorAll(".skills-list li").forEach(function (chip, number) {
  chip.style.transitionDelay = 0.3 + number * 0.15 + "s";
});
