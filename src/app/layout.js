import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/css/argon-design-system-react.css";
import "./custom.css";

// Firebase serves the site at a domain root, which robots.txt, sitemap.xml and llms.txt need; GitHub Pages only redirects here.
const SITE_URL = "https://caique-coelho.web.app";
const AVATAR = "https://avatars.githubusercontent.com/u/29831309?v=4";

// Kept short on purpose: Google truncates titles around 60 chars and
// descriptions around 160. Longer copy lives in the hero, not here.
const TITLE = "Caíque Coelho — Senior SDET | Playwright, Cypress & AI QA";
const DESCRIPTION =
  "Senior SDET, 9+ years. Playwright, Cypress, TypeScript and LLM agents for QA. Relocating to London, Amsterdam or Spain (visa sponsorship).";

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
    "Lead SDET",
    "Quality Platform Engineer",
    "Quality Platform Lead",
    "SDET UK",
    "SDET London",
    "SDET United Kingdom",
    "SDET Netherlands",
    "SDET Amsterdam",
    "SDET Spain",
    "SDET Madrid",
    "SDET Barcelona",
    "Staff SDET relocation",
    "Senior SDET relocation",
    "Visa sponsorship SDET",
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
    siteName: "Caíque Coelho — Staff / Senior SDET Portfolio",
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

// Structured data: Graph schema combining Person and ProfilePage with recruitment contacts,
// relocation availability (UK, Amsterdam, Spain), and technical competencies for search engines & AI agents.
const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
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
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Recruitment & Hiring",
          email: "caiquedpfc@gmail.com",
          url: "https://www.linkedin.com/in/caiquecoelho",
          availableLanguage: ["English", "Portuguese", "Spanish"],
        },
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Senior Software Development Engineer in Test (SDET)",
        occupationalCategory: "15-1253.00",
        skills: "Playwright, Cypress, TypeScript, LLM agents for QA, CI/CD, test automation frameworks",
        qualifications: "9+ years in software engineering, 8+ in test automation and quality architecture",
      },
      seeks: {
        "@type": "Demand",
        name: "Senior / Staff SDET, QA Automation Engineer or Quality Engineer roles",
        description:
          "Relocating to the United Kingdom (London), Netherlands (Amsterdam) or Spain (Madrid/Barcelona) with visa sponsorship, or remote in UK/EU time zones.",
      },
      knowsAbout: [
        "Software Development Engineer in Test (SDET)",
        "Staff SDET",
        "Quality Platform Engineering",
        "Test Automation Architecture",
        "Playwright",
        "Cypress",
        "TypeScript",
        "JavaScript",
        "Python",
        "AI-Native Quality Engineering",
        "LLM Agents for Test Generation",
        "AI Test Selection",
        "Agentic Exploratory Testing",
        "Claude & Claude Code",
        "AWS Bedrock",
        "Model Context Protocol (MCP)",
        "Continuous Integration & Continuous Delivery (CI/CD)",
        "Jenkins",
        "GitHub Actions",
        "GitLab CI",
        "Terraform",
        "AWS",
        "Contract Testing (PACT)",
        "Performance Testing (k6, Locust)",
        "Visual Regression Testing (Percy)",
        "Open Finance & Open Banking",
        "FAPI (Financial-grade API)",
        "OpenID Connect (OIDC)",
        "OAuth 2.0",
        "mTLS",
      ],
      sameAs: [
        "https://www.linkedin.com/in/caiquecoelho",
        "https://github.com/CaiqueCoelho",
        "https://twitter.com/caiqueocoelho",
        "https://caiquecoelho.medium.com/",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: TITLE,
      description: DESCRIPTION,
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
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
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Agent Summary" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="Full LLM Profile Dossier" />
        <link rel="author" href="https://www.linkedin.com/in/caiquecoelho" />
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
