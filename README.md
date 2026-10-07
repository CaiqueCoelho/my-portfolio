# Caíque Coelho — Portfolio

### 🌐 **[caique-coelho.web.app](https://caique-coelho.web.app/)**

> **Senior SDET with 9+ years in software engineering.** I build test automation frameworks in
> Playwright and Cypress (TypeScript), the CI/CD that runs them, and LLM agents for QA that cut
> release validation from ~2 hours to ~10 minutes. Relocating to London, Amsterdam or Spain.
> Cypress open-source contributor · [Cy.Pronauts](https://www.cypress.io/) ambassador.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Cypress](https://img.shields.io/badge/tested%20with-Cypress-17202C?logo=cypress&logoColor=white)](https://www.cypress.io/)
[![Firebase](https://img.shields.io/badge/Firebase%20Hosting-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

---

## 👤 Caíque Coelho

| | |
|---|---|
| 🌐 **Website** | [caique-coelho.web.app](https://caique-coelho.web.app/) |
| 📄 **Resume** | [Download PDF](https://caique-coelho.web.app/Caique-Coelho-Senior-SDET-Resume.pdf) |
| 💼 **LinkedIn** | [@caiquecoelho](https://linkedin.com/in/caiquecoelho) |
| 🐙 **GitHub** | [@CaiqueCoelho](https://github.com/CaiqueCoelho) |
| ✍️ **Medium** | [@caiquecoelho](https://caiquecoelho.medium.com/) |
| 🐦 **Twitter** | [@caiqueocoelho](https://twitter.com/caiqueocoelho) |
| 📸 **Instagram** | [@caiqueocoelho](https://www.instagram.com/caiqueocoelho/) |

<img src="./my-portfolio-qr-code.png" width="160px" alt="QR code to the portfolio (caiquecoelho.github.io/my-portfolio, redirects to caique-coelho.web.app)">

---

## About this repo

Source of my personal portfolio: a statically exported **Next.js** site that presents my
experience, projects, open source contributions and certifications.

Two files hold everything you'd normally want to change:

| File | What lives there |
|---|---|
| `src/portfolio.js` | **All site content** — greeting, skills, proficiency bars, experience, projects, education, awards, social links |
| `src/app/layout.js` | **SEO** — title, description, keywords, Open Graph, Twitter card and `Person` JSON-LD structured data |

Everything else is presentation: `src/containers/` renders each section, `src/components/`
holds the cards, and styling comes from the Argon Design System.

## Tech stack

**Framework:** Next.js 16 (App Router, `output: 'export'` static export) · React 18
**UI:** Reactstrap · Bootstrap 5 · Argon Design System · react-awesome-reveal · Iconify
**Data:** Apollo Client + GraphQL (GitHub profile card) · Firebase
**Testing:** Cypress
**Hosting:** Firebase Hosting + GitHub Pages · CI via GitHub Actions

## Running locally

Requires **Node 22** (see `.nvmrc`).

```sh
nvm use          # picks up Node 22 from .nvmrc
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```sh
npm run build    # static export into build/
npm run start    # serve a production build
npm run deploy   # build, publish to GitHub Pages and Firebase Hosting
```

## Testing

The portfolio is covered by Cypress end-to-end tests in `cypress/e2e/`.

```sh
npm run dev            # in one terminal
npx cypress open       # interactive runner
npx cypress run        # headless
```

## Deploy

Pushes are deployed by the GitHub Actions workflows in `.github/workflows/`:

- `firebase-hosting-pull-request.yml` — preview channel for every pull request
- `firebase-hosting-merge.yml` — production deploy on merge

`npm run deploy` publishes manually to both GitHub Pages and Firebase Hosting.

## Troubleshooting

**Wrong Node version / `node-gyp` errors**

```sh
source ~/.nvm/nvm.sh
nvm use
npm install
npm run dev
```

**`ERR_OSSL_EVP_UNSUPPORTED`** (only on older Node/webpack combinations)

```sh
export NODE_OPTIONS=--openssl-legacy-provider
```

## License

MIT © [Caíque Coelho](https://github.com/CaiqueCoelho)
