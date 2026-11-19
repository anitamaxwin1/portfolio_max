## Project Overview, Goals, and Target Audience
This portfolio allows people to increase their chances of applying for jobs worldwide. It includes detailed information about the users’ profiles, projects, skills, etc. Of course, office recruiters are always trying to find a person who meets their criteria or interests. For instance, a famous company in the United States is trying to find a computer-based developer for their work and could be reliable anytime. You feel that you are fit to work in this kind of job, so you shoot your chance to apply for it with your current portfolio in this web application.

## Apps and AI
I used Claude AI for this website

## Author
Maximus Gandhi Dharmaatmaja Suyanto - 3002860104 - Computer Science

## JavaScript Features
All the JavaScript is written in plain JavaScript (no libraries) and lives in `script.js`. It adds these features to the portfolio:

- Dark and light mode: a button in the navigation switches the theme, remembers the visitor's choice using localStorage, and follows their device setting on the first visit.
- Contact form check: when someone clicks Send, the form makes sure the name is filled in, the email looks valid, and the message has at least 10 characters, then shows a message under the button. It does not send a real email yet because that would need a backend.
- Active navigation link: the link of the section you are reading changes color while you scroll.
- Fade-in sections: each section slides up and fades in the first time it appears on the screen. This and the active link both use `IntersectionObserver`, which tells me when an element enters the screen.
- Typing effect: the line under the main heading types out different roles, deletes them, and moves on to the next one.
- Click to copy email: clicking my email address in the Contact section copies it and shows "Copied!" for a moment.
- Back to top button: a small arrow button appears after scrolling down and takes you back to the top of the page.
- Live clock: the Contact section shows the current time in Jakarta (WIB), updated every second.
- Project details popup: the "View details" button on each project card opens a popup with the project's description and the technologies used, using the built-in HTML `<dialog>` tag.
- Animations: the project cards tilt toward the mouse with a light that follows the cursor, the skill chips bounce in one after another, and the "MG" circle floats up and down with a slowly spinning dashed ring (this one is done in CSS).

## Files
- `index.html`: the page content
- `style.css`: the design, including dark mode and the responsive layout
- `script.js`: all the JavaScript features above
