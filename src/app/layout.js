import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/css/argon-design-system-react.css";
import "./custom.css";

// Canonical URL of the site. The portfolio is currently published to both
// GitHub Pages and Firebase Hosting — pick ONE here so search engines stop
// splitting ranking between the two copies.
const SITE_URL = "https://caiquecoelho.github.io/my-portfolio";
const AVATAR = "https://avatars.githubusercontent.com/u/29831309?v=4";

// Kept short on purpose: Google truncates titles around 60 chars and
// descriptions around 160. Longer copy lives in the hero, not here.
const TITLE = "Caíque Coelho — SDET | Playwright, Cypress & AI-Native Quality";
const DESCRIPTION =
  "SDET with 9+ years building AI-native quality platforms: LLM agents for test generation, selection and exploratory testing. Playwright, Cypress, TypeScript.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Caíque Coelho",
  },
  description: DESCRIPTION,
  applicationName: "Caíque Coelho — Portfolio",
  authors: [{ name: "Caíque Coelho", url: SITE_URL }],
  creator: "Caíque Coelho",
  keywords: [
    "Caíque Coelho",
    "Caique Coelho",
    "caiqueocoelho",
    "SDET",
    "Software Development Engineer in Test",
    "Staff SDET",
    "Senior SDET",
    "Quality Platform Engineer",
    "Quality Engineering",
    "QA Automation Engineer",
    "Test Automation Engineer",
    "Developer Productivity Engineer",
    "test automation",
    "web automation",
    "Playwright",
    "Cypress",
    "Cypress ambassador",
    "Cy.Pronauts",
    "TypeScript",
    "JavaScript",
    "Python",
    "test automation framework",
    "testing pyramid",
    "end-to-end testing",
    "component testing",
    "contract testing",
    "PACT",
    "API testing",
    "performance testing",
    "k6",
    "visual regression testing",
    "Percy",
    "AI testing",
    "AI-native quality engineering",
    "LLM agents",
    "agentic testing",
    "AI test generation",
    "AI test selection",
    "AI exploratory testing",
    "Claude",
    "Claude Code",
    "AWS Bedrock",
    "prompt engineering",
    "RAG",
    "MCP",
    "Model Context Protocol",
    "CI/CD",
    "Jenkins",
    "GitHub Actions",
    "GitLab CI",
    "Terraform",
    "AWS",
    "Open Finance",
    "Open Banking",
    "FAPI",
    "OIDC",
    "OAuth 2.0",
    "mTLS",
    "OpenID Foundation Conformance Suite",
    "Brazil",
    "remote",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Caíque Coelho — Portfolio",
    locale: "en_US",
    images: [
      {
        url: AVATAR,
        width: 800,
        height: 600,
        alt: "Caíque Coelho",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@caiqueocoelho",
    images: [AVATAR],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "120x120", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

// Structured data: this is what lets Google (and the sourcing tools recruiters
// use) index Caíque as a person with a job title, an employer and a skill set,
// instead of as an anonymous web page.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Caíque Coelho",
  alternateName: ["Caique Coelho", "caiqueocoelho"],
  url: SITE_URL,
  image: AVATAR,
  jobTitle: "Senior Software Development Engineer in Test (SDET)",
  description: DESCRIPTION,
  email: "mailto:caiquedpfc@gmail.com",
  worksFor: {
    "@type": "Organization",
    name: "Raidiam",
    url: "https://www.raidiam.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidade Federal de Mato Grosso do Sul",
    url: "https://www.ufms.br",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressCountry: "BR",
  },
  knowsLanguage: ["Portuguese", "English", "Spanish"],
  knowsAbout: [
    "Test Automation",
    "Playwright",
    "Cypress",
    "TypeScript",
    "Quality Engineering",
    "Software Development Engineer in Test",
    "AI-Native Quality Engineering",
    "Large Language Models",
    "LLM Agents",
    "AI Test Generation",
    "AI Test Selection",
    "Agentic Exploratory Testing",
    "Claude",
    "AWS Bedrock",
    "Prompt Engineering",
    "Retrieval-Augmented Generation",
    "Model Context Protocol",
    "CI/CD",
    "Jenkins",
    "GitHub Actions",
    "Terraform",
    "Amazon Web Services",
    "Contract Testing",
    "Performance Testing",
    "Visual Regression Testing",
    "Open Finance",
    "FAPI",
    "OpenID Connect",
    "OAuth 2.0",
    "mTLS",
  ],
  sameAs: [
    "https://www.linkedin.com/in/caiquecoelho",
    "https://github.com/CaiqueCoelho",
    "https://twitter.com/caiqueocoelho",
    "https://caiquecoelho.medium.com/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <script src="https://code.iconify.design/1/1.0.4/iconify.min.js" async></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
