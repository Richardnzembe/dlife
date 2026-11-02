# dlife

Website for **Dalswin Life & Business Institute (DL&BI)** — a faith-based online school offering practical courses in life skills, personal development, and leadership.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — mission, values, featured courses, learning format |
| `about.html` | About the institute, approach, and legacy |
| `courses.html` | All eight courses with outcomes and course details |
| `enroll.html` | Admissions process, student portal, and FAQ |
| `contact.html` | Contact details and enquiry form |
| `privacy.html` | Privacy Policy |
| `terms.html` | Terms and Conditions |

## Project structure

```
.
├── index.html
├── about.html
├── courses.html
├── enroll.html
├── contact.html
├── privacy.html
├── terms.html
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── img/            # logo, emblem, favicon and touch icon
```

No build step or framework is required — the site is plain HTML, CSS, and JavaScript.

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python -m http.server 8008
```

Then visit <http://127.0.0.1:8008/>.

## Key details

- Student portal: <https://onb.richardn.online/login>
- Email: [info@dlife.online](mailto:info@dlife.online)
- The contact form is static and opens the visitor's email client via `mailto:`.

## Deploying

The site is compatible with GitHub Pages: publish the `main` branch from the repository root.
