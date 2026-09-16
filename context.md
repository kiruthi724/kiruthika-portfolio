# Kiruthika D — Personal Portfolio Project Context

## 1. Project Overview

Build a single-page personal portfolio website for **Kiruthika D**, a final-year B.Tech Computer Science and Engineering student.

The portfolio should communicate:

> **“She knows HTML, CSS and JavaScript and has good UI sense.”**

The website must look **modern and premium**, while the implementation remains **beginner/intermediate, understandable, and explainable**.

This is a student portfolio, not an advanced production application.

---

## 2. Primary Goal

Create a visually impressive but technically simple portfolio that demonstrates practical knowledge of:

- HTML
- CSS
- JavaScript
- Responsive web design
- DOM manipulation
- JavaScript events
- Basic form validation
- UI design
- Simple interactive effects

The code should be easy for Kiruthika to understand and explain during an internship discussion or presentation.

---

## 3. Confirmed Design Direction

### Overall Style

- Modern
- Premium
- Dark
- Professional
- Slightly futuristic
- Not cyberpunk
- Not overly flashy
- Not overly minimal
- Not a complicated dashboard

### Background

Use a **dark navy** base rather than pure black.

### Accent Colour

Choose a suitable accent colour that works well with the dark navy background.

The accent should feel premium and modern, not excessively neon.

### Glassmorphism

Do **not** use glassmorphism.

Avoid excessive transparency, blur-heavy cards, or frosted-glass UI.

---

## 4. Anti-Gravity Concept

The anti-gravity concept should be subtle and limited.

### Main implementation

Apply the effect primarily to the **project card**.

The project card should:

- move slightly when the cursor interacts with it
- feel lightweight/floating
- have a subtle hover response
- return smoothly to its normal position
- remain usable and readable

### Important limitation

Do NOT build a physics engine.

Do NOT use:

- Canvas
- WebGL
- complex particle physics
- advanced animation libraries
- complicated mathematical simulations

Use simple CSS transitions/transforms and beginner-friendly JavaScript mouse events.

The interaction should be explainable as:

> “I used JavaScript mouse events to create a small movement effect on the project card when the cursor interacts with it.”

---

## 5. Technology Requirements

### Required

- HTML5
- CSS3
- Vanilla JavaScript

### Libraries

No external libraries unless there is a genuinely necessary reason.

Prefer zero dependencies.

Do NOT use:

- React
- Vue
- Angular
- Bootstrap
- Tailwind CSS
- GSAP
- Three.js
- Canvas libraries
- WebGL libraries

---

## 6. Project Structure

Use a simple three-file structure:

```text
portfolio/
│
├── index.html
├── style.css
└── script.js
```

Do not create unnecessary folders or configuration files.

---

## 7. Navigation

Use a normal horizontal navigation bar.

Navigation should contain:

- Home
- About
- Skills
- Projects
- Experience/Certification
- Contact

Use smooth scrolling between sections.

The navigation should be visually clean and should not dominate the page.

On smaller screens, use a simple mobile-friendly navigation solution.

Do not create an overly complicated navigation system.

---

## 8. Hero Section

### Layout

Use:

- Large typography on the left
- Visual/design element on the right
- Strong visual hierarchy

### Main typography

Make **KIRUTHIKA** visually prominent.

The name should be one of the strongest visual elements on the page.

### Content

Display:

- Kiruthika D.
- B.Tech CSE Student
- Short professional introduction
- View Projects button
- Contact Me button

Do not use a profile photograph.

### Hero visual

Do not use a profile photo.

Use a designed visual element that complements the large typography.

Possible visual direction:

- abstract shapes
- letter-based design
- subtle floating elements
- simple geometric composition

Keep it simple enough to implement with HTML/CSS.

### Scroll indicator

Include a small visual scroll-down indicator.

---

## 9. About Section

The About section should feel **personal but professional**.

Do not make it a long biography.

Content should communicate:

- final-year B.Tech CSE student
- interest in frontend web development
- interest in creating clean and user-friendly interfaces
- continuous learning
- practical project experience

Use good visual hierarchy instead of a large wall of text.

---

## 10. Skills Section

Use simple skill cards.

Primary skills:

1. HTML
2. CSS
3. JavaScript

Cards should be visually polished but simple.

Avoid:

- progress bars showing fake percentages
- complicated skill graphs
- radar charts
- advanced visualizations

Each card can contain:

- skill name
- short description
- simple visual number/icon

---

## 11. Current Learning

Include a small area showing current learning interests:

- Cloud Computing
- Cybersecurity

Do not present these as advanced professional expertise.

Use wording such as:

> “Currently exploring”

or

> “Currently learning”

This accurately represents the student's learning direction.

---

## 12. Projects Section

Show only the confirmed project:

### Smart Queue Based Monitoring System

The project should be presented as a featured project.

Do not invent additional projects.

Do not invent GitHub repository links for this project.

### Project information

Describe it as a web-based system related to monitoring and managing patient queues.

Use the confirmed frontend technologies where appropriate:

- HTML
- CSS
- JavaScript

Do not claim backend responsibilities unless explicitly provided.

### Visual treatment

Use a polished project card.

The card may include:

- Project number
- Project title
- Short description
- Technology tags
- Small project preview/design area
- Simple arrow/action indicator

The project card is the primary target for the anti-gravity cursor interaction.

---

## 13. Internship

Do NOT include the Ray-i Systems internship as a portfolio section.

The current portfolio should not explicitly mention the internship.

---

## 14. Certification

Include the NPTEL Cloud Computing certification inside the Experience/Certification area.

Confirmed certification:

**NPTEL Cloud Computing — Elite + Silver**

Keep the presentation concise.

Do not invent:

- certificate ID
- score
- date
- verification URL

unless supplied later.

---

## 15. JavaScript Demonstration

Keep the **Interactive Task Counter**.

This demonstrates practical JavaScript knowledge.

Features:

1. User enters a task.
2. User clicks Add Task.
3. Empty input is rejected.
4. A new task is added dynamically.
5. Task count updates.
6. Clicking a task toggles its completed state.

Use:

- `getElementById`
- event listeners
- `createElement`
- DOM manipulation
- `classList.toggle`
- simple variables
- basic validation

Do not use localStorage, databases, APIs, frameworks, or complex state management.

The task counter should look integrated into the portfolio rather than like an unrelated classroom demo.

---

## 16. Contact Section

Contact information should include:

- Email
- GitHub

LinkedIn should NOT be included until the actual LinkedIn URL is provided.

### Email

Confirmed email:

`dayalankiruthika88@gmail.com`

### GitHub

Confirmed GitHub profile:

`https://github.com/kiruthi724`

Do not invent repository links.

### Contact interaction

Use a simple contact form with client-side validation.

Fields:

- Name
- Email
- Message

Validation should check that required fields are not empty.

The form does not need a backend.

Also provide a **Copy Email** interaction if appropriate.

When the email is copied, display a simple success message.

Do not pretend that the contact form actually sends an email without a backend.

---

## 17. Resume

Do NOT add a Resume/Download Resume button.

---

## 18. Responsive Design

The website must have a polished mobile version.

Required behavior:

- navigation adapts to small screens
- hero layout stacks appropriately
- cards resize/reflow
- typography scales
- buttons remain usable
- contact form remains readable
- no horizontal overflow

Use CSS media queries.

Do not create complicated responsive JavaScript.

### Animation behavior

Keep the same subtle animation style on mobile unless performance or usability requires otherwise.

Do not create excessive mobile-only effects.

---

## 19. Background Decoration

Use subtle decorative elements.

Allowed:

- small dots
- subtle grid
- abstract lines
- simple geometric shapes

These should remain in the background.

They must not distract from:

- name
- navigation
- project
- content

Avoid excessive particles.

---

## 20. Typography

Use a clean, modern typography system.

Headings should be stronger and more visually distinctive than body text.

Body text should remain highly readable.

Do not use too many different fonts.

If an external font is used, keep it to one simple font family or a very small combination.

---

## 21. Footer

Create a clean footer.

Possible content:

- Kiruthika D.
- Email
- GitHub
- copyright

Keep it visually consistent with the rest of the website.

---

## 22. Accessibility

Use basic accessibility practices:

- semantic HTML elements
- meaningful headings
- proper button elements
- accessible form labels/placeholders
- readable contrast
- keyboard-accessible controls
- descriptive link text
- appropriate `alt` text if images are later added

Do not sacrifice accessibility for visual effects.

---

## 23. Code Quality

The code must be:

- readable
- logically organized
- commented where useful
- beginner/intermediate level
- easy to modify
- easy to explain

Use clear names such as:

```javascript
taskInput
addTaskButton
taskList
taskCount
```

Avoid unnecessarily short or confusing variable names.

Keep HTML, CSS and JavaScript separated.

---

## 24. JavaScript Complexity

JavaScript should focus on simple concepts:

- DOM selection
- event listeners
- click events
- mouse events
- form submission
- validation
- DOM creation
- class toggling
- text updates

Avoid:

- classes unless genuinely needed
- modules
- async/await
- fetch/API calls
- complex arrays of objects
- advanced state management
- external libraries

---

## 25. Visual Interaction Rules

Use subtle transitions for:

- navigation links
- buttons
- skill cards
- project card
- certification card

Hover effects should feel intentional.

Avoid:

- excessive bouncing
- flashing
- spinning everything
- large scaling effects
- distracting animations
- continuous heavy animations

The website should feel premium rather than gimmicky.

---

## 26. Content Accuracy Rules

Only use confirmed information.

Do not invent:

- additional projects
- work experience
- job titles
- achievements
- GitHub repositories
- LinkedIn profile
- certificate details
- project metrics
- client names
- technologies not confirmed by the user

If content needs to be added later, use an obvious placeholder or ask the user.

---

## 27. Final Section Order

Use this order:

```text
1. Home
2. About
3. Skills
4. Projects
5. Experience / Certification
6. Interactive Task Counter
7. Contact
8. Footer
```

The internship should not appear.

---

## 28. Final Quality Target

The final website should satisfy all of these:

### Visual

- Modern
- Premium
- Dark navy
- Clean
- Attractive
- Good spacing
- Strong typography
- Subtle decorative background
- Polished cards
- Smooth interactions

### Technical

- HTML
- CSS
- Vanilla JavaScript
- Responsive
- Beginner/intermediate complexity
- No unnecessary frameworks
- No unnecessary dependencies

### Presentation

The student should be able to explain the project confidently:

> HTML provides the structure of the portfolio.

> CSS controls the visual design, layout, responsiveness and transitions.

> JavaScript provides the interactive task counter, form validation, DOM manipulation and cursor interaction.

The final result should demonstrate **good fundamentals and UI sense**, not pretend to be an advanced frontend engineering system.
