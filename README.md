# dlife

Website for **Dalswin Life & Business Institute (DL&BI)** — a faith-based online school offering practical courses in life skills, personal development, leadership, and workplace digital skills.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — mission, values, featured courses, learning format |
| `about.html` | About the institute, approach, and legacy |
| `courses.html` | All nine courses, including the four-week Computer Literacy & Workplace Digital Skills programme |
| `enroll.html` | Admissions process, student portal, and FAQ |
| `contact.html` | Contact details and enquiry form |
| `privacy.html` | Privacy Policy |
| `terms.html` | Terms and Conditions |

## Project structure

```
.
├── .well-known/
│   └── did.json          # did:web DID document
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
    └── img/              # logo, emblem, favicon and touch icon
```

No build step or framework is required — the site is plain HTML, CSS, and JavaScript.

## Digital identity

This domain publishes a decentralized identifier using the `did:web` method:

- **DID:** `did:web:www.dlife.online`
- **DID document:** <https://www.dlife.online/.well-known/did.json>
- **Verification method:** Ed25519 key `#key-1`

The private signing key is kept offline and is never part of this repository.

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

## Copyright

© 2026 Dalswin Life & Business Institute (DL&BI). **All rights reserved.**

All content on this website — including text, course descriptions, branding, logos, graphics, and design — is the property of Dalswin Life & Business Institute and is protected by copyright. No part of this website may be copied, reproduced, modified, distributed, or republished in any form without prior written permission.

For permission requests, contact [info@dlife.online](mailto:info@dlife.online).

## Deploying

The site is compatible with GitHub Pages: publish the `main` branch from the repository root.
