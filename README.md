# 🌐 Personal Portfolio Website

## 📖 Project Overview
This is a single-page responsive portfolio website created as part of a lab assignment. The website showcases personal information, projects, skills, and contact details. It is built using HTML, CSS, and JavaScript.

* URL Link to website portfolio: [Click Here](https://github.com/anitamaxwin1/portfolio_max)

## 🎯 Purpose
The goal of this project is to:

* Practice responsive web design techniques
* Learn how to structure and style a webpage
* Add interactivity to a page with plain JavaScript
* Showcase personal or sample projects in a professional format

## 👥 Target Audience
This portfolio is designed for:

* [✅] Potential employers or recruiters

## 🧱 Technologies Used

* HTML5
* CSS3 (Flexbox, Grid, CSS Variables, Media Queries)
* JavaScript (plain JavaScript, no libraries)

## 📐 Layout & Sections
The website includes the following sections:

* Header – Logo, navigation links, and the dark/light mode button
* Title – Heading, typing effect, and the "MG" badge
* About Me – Short bio with location, focus, and status
* Skills – Languages and tools
* Projects – Project cards with a details popup
* Contact – Email, LinkedIn, local time, and a contact form
* Footer – Copyright

## ⚙️ JavaScript Features
All the JavaScript is in `script.js`. It adds these features to the portfolio:

* Dark and light mode: a button in the navigation switches the theme, remembers the visitor's choice using localStorage, and follows their device setting on the first visit.
* Contact form check: when someone clicks Send, the form makes sure the name is filled in, the email looks valid, and the message has at least 10 characters, then shows a message under the button. It does not send a real email yet because that would need a backend.
* Active navigation link: the link of the section you are reading changes color while you scroll.
* Fade-in sections: each section slides up and fades in the first time it appears on the screen. This and the active link both use `IntersectionObserver`, which tells me when an element enters the screen.
* Typing effect: the line under the main heading types out different roles, deletes them, and moves on to the next one.
* Click to copy email: clicking my email address in the Contact section copies it and shows "Copied!" for a moment.
* Back to top button: a small arrow button appears after scrolling down and takes you back to the top of the page.
* Live clock: the Contact section shows the current time in Jakarta (WIB), updated every second.
* Project details popup: the "View details" button on each project card opens a popup with the project's description and the technologies used, using the built-in HTML `<dialog>` tag.
* Animations: the project cards tilt toward the mouse with a light that follows the cursor, the skill chips bounce in one after another, and the "MG" circle floats up and down with a slowly spinning dashed ring (this one is done in CSS).

## 📱 Responsiveness
The site is optimized for:

* Desktop
* Tablet
* Mobile

Responsive design is achieved using media queries (breakpoints at 1000px, 800px, and 480px), flexible layouts, and text sizes that change with the screen.

## 🧪 How to Run Locally

1. Open your code editor (e.g., Visual Studio Code, etc.).
2. In your code editor, open the terminal.
3. Clone the repository:

```
git clone https://github.com/your-username/your-repo-name.git
```

4. Open index.html in your browser, or run the website locally using the Live Server Extension. Live Server is recommended because some features, like copying the email, work best on a local server.

## 📂 Folder Structure

```
portfolio-website/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 📄 Notes

* I used Claude (an AI assistant) to help me write and understand the JavaScript features in `script.js`, and to help with the dark mode and responsive CSS.
* I wrote the project descriptions and contact section manually.

## ✍️ Author
Maximus Gandhi Dharmaatmaja Suyanto - 3002860104 - Computer Science
