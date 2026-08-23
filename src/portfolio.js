import emoji from 'react-easy-emoji';

import quintoandar from './assets/img/icons/common/quintoandar.svg';
import jera from './assets/img/icons/common/jera.svg';
import zedelivery from './assets/img/icons/common/zedelivery.svg';
import inventa from './assets/img/icons/common/inventa.svg';
import raidiam from './assets/img/icons/common/raidiam.svg';

export const greetings = {
  name: 'Caique Coelho',
  title: "Hi all, I'm Caíque",
  description:
    "Staff-level SDET with 9+ years building test automation and quality platforms. I build the systems that prevent bugs, not just the tests that find them: automation frameworks in Playwright, Cypress and TypeScript, CI/CD quality gates, and AI-native tooling using LLM agents on Claude and AWS Bedrock that generate test cases, decide which tests a change actually needs, and run agentic exploratory testing. Cypress core contributor and Cy.Pronauts ambassador.",
  resumeLink:
    'https://drive.google.com/file/d/1sJcAnby6m8qCLBCWGjGAsxIYzVszhgHC/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'CaiqueCoelho',
};

export const contact = {};

export const socialLinks = {
  linkedin: 'https://linkedin.com/in/caiquecoelho',
  github: 'https://github.com/CaiqueCoelho',
  twitter: 'https://twitter.com/caiqueocoelho',
  medium: 'https://caiquecoelho.medium.com/',
  instagram: 'https://www.instagram.com/caiqueocoelho/',
  facebook: 'https://www.facebook.com/Caique.Coelho.GGA/',
};

export const skillsSection = {
  title: 'What I do?',
  subTitle:
    'I own web test automation end to end — framework architecture, coverage across the full testing pyramid, and the CI/CD pipelines that run it — and I use AI to make quality engineering faster across an entire codebase.',
  skills: [
    emoji(
      '⚡ Own web automation frameworks in Playwright, Cypress and TypeScript, covering the full testing pyramid: unit, component, service, integration and end-to-end'
    ),
    emoji(
      '⚡ Build AI-native quality tooling — LLM agents on Claude and AWS Bedrock for test case generation, AI-driven test selection, agentic exploratory testing and automated failure triage'
    ),
    emoji(
      '⚡ Integrate automated testing into CI/CD on Jenkins, GitHub Actions and GitLab CI, using parallelisation and selective execution to keep feedback fast as coverage grows'
    ),
    emoji(
      '⚡ Certify Open Finance and Open Insurance implementations against FAPI, OIDC and mTLS with the OpenID Foundation Conformance Suite'
    ),
    emoji(
      '⚡ Build intelligent systems with Python, scikit-learn, TensorFlow and PyTorch'
    ),
  ],

  softwareSkills: [
    {
      skillName: 'Playwright',
      fontAwesomeClassname: 'logos:playwright',
    },
    {
      skillName: 'Cypress',
      fontAwesomeClassname: 'logos:cypress',
    },
    {
      skillName: 'TypeScript',
      fontAwesomeClassname: 'logos:typescript-icon',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'logos:javascript',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'logos:python',
    },
    {
      skillName: 'jenkins',
      fontAwesomeClassname: 'logos:jenkins',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'logos:aws',
    },
    {
      skillName: 'terraform',
      fontAwesomeClassname: 'logos:terraform-icon',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'logos:docker-icon',
    },
    {
      skillName: 'jest',
      fontAwesomeClassname: 'logos:jest',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
    },
    {
      skillName: 'java',
      fontAwesomeClassname: 'logos:java',
    },
    {
      skillName: 'Kotlin',
      fontAwesomeClassname: 'vscode-icons:file-type-kotlin',
    },
    {
      skillName: 'tensorflow',
      fontAwesomeClassname: 'logos:tensorflow',
    },
    {
      skillName: 'grafana',
      fontAwesomeClassname: 'logos:grafana',
    },
    {
      skillName: 'sentry',
      fontAwesomeClassname: 'vscode-icons:file-type-sentry',
    },
    {
      skillName: 'kibana',
      fontAwesomeClassname: 'logos:kibana',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'vscode-icons:file-type-sql',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'logos:firebase',
    },
    {
      skillName: 'git',
      fontAwesomeClassname: 'logos:git-icon',
    },
  ],
};

export const SkillBars = [
  {
    Stack:
      'Playwright, Cypress, TypeScript, JavaScript, Python, Vitest, Jest, React Testing Library, Cypress Component Testing, PACT, Supertest, Postman, Appium, Robot Framework, k6, Locust, Percy, Xray, qase.io, Jenkins, GitHub Actions, GitLab CI, Terraform, AWS, Docker, Grafana, Sentry, Kibana, Metabase, PostgreSQL, MySQL, Firebase, SQL, Git, Linux',
    proficiency: 'I feel comfortable working with',
  },
  {
    Stack:
      'Claude and Claude Code, AWS Bedrock, LLM agents for test generation and test selection, agentic exploratory testing, prompt engineering, RAG, MCP servers (Jira, GitHub, Jenkins, Playwright)',
    proficiency: 'AI I use to accelerate quality engineering',
  },
  {
    Stack:
      'FAPI, OIDC, OAuth 2.0, mTLS, PKI, JWKS, OpenID Foundation Conformance Suite, Open Finance Brasil, Open Insurance, OpenAPI and Swagger conformance validation',
    proficiency: 'Standards and domain I work in',
  },
  {
    Stack:
      'Java, Kotlin, Selenium, PyTorch, TensorFlow, scikit-learn, Spring, React, Flask, Kafka, Android (MVP and MVVM, Dagger, Rx)',
    proficiency: 'I also have experience with',
  },
];

export const educationInfo = [
  {
    schoolName: 'Universidade Federal de Mato Grosso do Sul',
    subHeader: "Bachelor's degree, Computer Science",
    duration: 'September 2013 - April 2018',
    desc: 'Course conclusion article in the field of artificial intelligence, developing a model to estimate the effort in the development of new features in software apps/sites',
    descBullets: [
      'Internship at the Information Technology Center at UFMS',
      "Volunteer work in the world's largest youth organization for leadership development - AIESEC",
    ],
    github: 'https://github.com/CaiqueCoelho/tcc',
    link: 'https://drive.google.com/file/d/1qTlSYjZRYW8h3-lc3S26bQy1TDgYS_TH/view?usp=sharing',
    type: 'Article',
  },
  {
    schoolName: 'Test Automation University (Applitools)',
    subHeader: '7,975 credits - Phoenix Rank',
    duration: 'Ongoing',
    desc: 'Continuous training across web, mobile and API test automation, frameworks and quality engineering practices',
    link: 'https://testautomationu.applitools.com/me.html#Caique-Coelho',
    type: 'Certified',
  },
  {
    schoolName: 'Duke University',
    subHeader: 'Introduction to Machine Learning',
    duration: 'January 2021 - May 2021',
    desc: 'Introduction course to machine learning and pytorch with emphasis on NLP',
    link: 'https://www.coursera.org/account/accomplishments/verify/3VY7HV9QGJN8?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
    type: 'Certified',
  },
  {
    schoolName:
      'Instituto Federal de Educação, Ciência e Tecnologia de Alagoas',
    subHeader: 'Training Course in Artificial Intelligence',
    duration: 'June 2021 - July 2021',
    desc: 'Practical course for specialization in machine learning and deep learning using sklearn and tensorflow',
    link: 'https://drive.google.com/file/d/1fPhkkJWyEdutDrANGm8uT-wG4WjSyGJI/view',
    type: 'Certified',
  },
  {
    schoolName: 'Huawei',
    subHeader: 'Artificial Intelligence Certified',
    duration: 'June 2021 - July 2021',
    desc: 'Theoretical and practical course for specialization in machine learning and deep learning with Huawei tools',
    link: 'https://drive.google.com/file/d/1fPhkkJWyEdutDrANGm8uT-wG4WjSyGJI/view',
    type: 'Certified',
  },
];

export const experience = [
  {
    role: 'Senior QA Automation Engineer',
    company: 'Raidiam',
    companylogo: raidiam,
    date: 'Nov 2023 – Present',
    desc: "I own the web test automation strategy, frameworks and tooling for Raidiam's Open Finance certification products, across multiple client-facing codebases and environments.",
    descBullets: [
      'Lead web automation in Playwright and Cypress with TypeScript: framework architecture, patterns, custom commands and the conventions other engineers build on',
      'Rebalanced an E2E-heavy suite across the full testing pyramid — unit and component coverage with Vitest, Jest, React Testing Library and Cypress Component Testing; service, integration and contract coverage at the API layer',
      'Migrated the E2E suite to TypeScript and re-architected it around cypress-grep for selective execution and Xray for traceability from requirement to run',
      'Added Percy visual regression across the shared design system, catching UI defects functional assertions miss',
      'Integrated automated testing into CI/CD on GitHub Actions and Jenkins, using parallelisation and selective execution to keep feedback fast as test coverage grew',
      'Built a library of LLM agents on Claude, Claude Code and AWS Bedrock that generate test plans and cases from tickets, PRs and OpenAPI specs; select which tests a change actually needs; run agentic exploratory testing; and triage failures into product bugs vs. test gaps',
      'Wired AI into engineering workflows via MCP servers (Jira, GitHub, Jenkins, Playwright), removing manual context-gathering from release validation',
      'Built the multi-environment onboarding process for new client environments with Terraform, AWS SSM and parameterised Jenkins jobs',
      'Debug pre-release and production failures, drive testability in design reviews, and mentor junior and senior QAs across squads',
    ],
  },
  {
    role: 'SDET Lead',
    company: 'Inventa',
    companylogo: inventa,
    date: 'April 2022 – October 2023',
    desc: 'Led a team of 6 SDETs and provided mentorship for their professional development. Designed and implemented the automated testing strategy and Cypress framework for web applications.',
    descBullets: [
      'Designed and implemented automated testing strategies, frameworks and tools',
      'Managed test case design and execution with qase.io integrated with Cypress, tying automated runs to release quality gates',
      'Performed defect triage and prioritization with developers, product managers and business analysts',
      'Monitored application performance with Grafana and Sentry, and ran load testing with k6 and Locust to find and mitigate bottlenecks ahead of peak traffic',
    ],
  },
  {
    role: 'Senior Software QA Engineer',
    company: 'Zé Delivery',
    companylogo: zedelivery,
    date: 'November 2021 – April 2022',
    desc: "Quality engineering for Brazil's largest beverage delivery platform (AB InBev), maturing the quality pipeline from requirements gathering to regression testing.",
    descBullets: [
      'Reduced flaky tests by ~60% and cut total CI pipeline time by ~50% by stabilising end-to-end tests and redistributing coverage across the test pyramid',
      'Coached engineers on when to apply each test type, preventing over-investment in slow end-to-end coverage',
      'Implemented contract tests with PACT, API tests with Postman, Joi and Supertest, and performance tests with k6',
      'Led cross-company quality initiatives and mentored junior QAs',
    ],
  },
  {
    role: 'Senior Software QA Engineer',
    company: 'QuintoAndar',
    companylogo: quintoandar,
    date: 'November 2018 – November 2021',
    desc: "Three years of hypergrowth at Latin America's largest real-estate rental platform, acting as QA Tribe Manager and raising quality in code and process across the tribe.",
    descBullets: [
      'Built and scaled end-to-end and component test automation with Cypress across web products, and enabled other QAs and developers to write their own tests',
      'Defined and monitored quality metrics for production services — performance, safety and scalability — with Grafana, Sentry, Kibana and Metabase',
      'Ran exploratory testing and guaranteed apps met high UI, usability and accessibility standards',
      'Led cross-company projects and mentored junior QAs',
    ],
  },
  {
    role: 'Android Developer',
    company: 'Jera',
    companylogo: jera,
    date: 'Jan 2018 – Oct 2018',
    descBullets: [
      'Built, refactored and maintained native Android apps in production',
      'Building and maintaining applications in Java and Kotlin',
      'Building applications on MVP and MVVM architectures',
      'Building modular applications with Dagger and Rx',
    ],
  },
  {
    role: 'QA Analyst',
    company: 'Jera',
    companylogo: jera,
    date: 'Jun 2017 – Dec 2017',
    descBullets: [
      'Conducted automated interface tests with Selenium and Ruby',
      'Identified the target test items to be evaluated by the test effort',
      'Defined the appropriate tests required and any associated test data',
      'Assisted in the creation of user stories and in prioritizing backlog tasks',
      'Evaluated the result of each test cycle',
    ],
  },
];

export const projects = [
  {
    name: 'Cypress — core contributor',
    desc: 'Merged contribution to the Cypress core repository (cypress-io/cypress #28256): fix for inverted tag handling and grep untagged. Cy.Pronauts — Cypress.io ambassador.',
    github: 'https://github.com/cypress-io/cypress/pull/28256',
  },
  {
    name: 'DISC Board',
    desc: 'Leading platform for DISC Behavioral Profile mapping for companies, using AI for team management, recruitment, and leadership development. Founder — designed and built the full stack (UI, backend, data model) and took it to production.',
    link: 'https://discboard.com.br/',
  },
  {
    name: 'LinguaLearn',
    desc: 'Language learning platform utilizing LLMs to generate dynamic text and audio podcasts entirely through AI.',
    link: 'https://lingualearn.web.app/dashboard',
  },
  {
    name: 'App Teste Eneagrama',
    desc: 'Android app and PWA for personality testing, with over 400,000 downloads on Google Play',
    link: 'https://play.google.com/store/apps/details?id=caiquecoelho.com.testeeneagrama&hl=pt_BR',
  },
  {
    name: 'Retrospectiva Twitter',
    desc: 'PWA generating a yearly retrospective of tweets, used by more than 500,000 people',
    link: 'https://retrospective-twitter.firebaseapp.com/',
  },
  {
    name: 'My Song',
    desc: 'Music recommendation based on your style using AI and the Spotify API',
    link: 'https://my-song-discovery.firebaseapp.com/home',
  },
  {
    name: 'Predicting Oscar Results',
    desc: "Project using AI to predict each year's Oscar winners",
    github: 'https://github.com/CaiqueCoelho/Predict-Oscar',
    link: 'https://caiquecoelho.medium.com/prevendo-os-resultados-do-oscar-2021-com-ia-6375344cefd5',
  },
  {
    name: 'Predicting the evolution of the number of COVID cases',
    desc: 'Project using AI to predict the evolution of the number of COVID-19 cases in Brazil',
    github: 'https://github.com/CaiqueCoelho/predict-covid19-brazil',
    link: 'https://caiquecoelho.medium.com/prevendo-o-crescimento-de-casos-de-covid-19-coronavirus-no-brasil-com-an%C3%A1lise-de-dados-gr%C3%A1ficos-33ee525b62f8',
  },
  {
    name: 'huskyCI — open source contributor',
    desc: 'Contribution to Globo.com huskyCI (globocom/huskyCI #578): tools version check.',
    github: 'https://github.com/globocom/huskyCI/pull/578',
  },
  {
    name: 'Notícias de Hoje',
    desc: 'Alexa Skill with recent news about everything that happens in Brazil, with more than 15,000 unique users',
    link: 'https://www.amazon.com.br/Caique-Coelho-Not%C3%ADcias-de-Hoje/dp/B085GJV4M7/',
  },
  {
    name: 'Horóscopo Diário',
    desc: 'Alexa skill to know information about your horoscope every day',
    link: 'https://www.amazon.com.br/dp/B07ZZN43V3',
  },
  {
    name: 'Meu Time BBB',
    desc: 'Fantasy game, in which people choose their teams with BBB participants, with more than 2,000 players last season',
    link: 'https://meu-time-bbb.firebaseapp.com/',
  },
  {
    name: 'Murmo',
    desc: 'Anonymous messaging platform designed for engaging and private communication experiences.',
    link: 'https://murmochat.web.app/auth',
  },
];

export const awards = [
  {
    name: 'Cy.Pronauts — Cypress.io Ambassador',
    award:
      'Selected for the Cypress.io ambassador program, and contributor to the Cypress core repository',
  },
  {
    name: 'Test Automation University (Applitools)',
    award: '7,975 credits — Phoenix Rank',
  },
  {
    name: 'Facebook Testathon 2019 - São Paulo, Brazil',
    award: 'Best product insight!',
  },
  {
    name: 'Amazon Certified Alexa Skill Builder',
    award: '2x Alexa Skill Builder Incentive Certificate Winner!',
  },
];
