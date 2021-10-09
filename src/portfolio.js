import emoji from "react-easy-emoji";

import quintoandar from "./assets/img/icons/common/quintoandar.svg";
import jera from "./assets/img/icons/common/jera.svg";

export const greetings = {
	name: "Caíque Coelho",
	title: "Hi all, I'm Caíque",
	description: "Nice to meet you! I'm Caíque, a passionate developer, currently working as Quality Software at QuintoAndar, but also an App Developer on weekends and a Data Scientist on free time",
	resumeLink: "https://drive.google.com/file/d/1IBRSOQzzDqXBAYCDNPf2lDpwcuRaYlOp/view?usp=sharing",
};

export const openSource = {
	githubUserName: "CaiqueCoelho",
};

export const contact = {};

export const socialLinks = {
	linkedin: "https://linkedin.com/in/caiquecoelho",
	github: "https://github.com/CaiqueCoelho",
	twitter: "https://twitter.com/caiqueocoelho",
	medium: "https://caiquecoelho.medium.com/",
	instagram: "https://www.instagram.com/caiqueocoelho/",
	facebook: "https://www.facebook.com/Caique.Coelho.GGA/",
};

export const skillsSection = {
	title: "What I do?",
	subTitle:
		"I do a little bit of everything, but I'm very good at helping to deliver quality software by working on quality assurance and test automation processes and developing intelligent systems using artificial intelligence, statistics and automation.",
	skills: [
		emoji(
			"⚡ Develop highly quality software with test automations and quality process"
		),
		emoji(
			"⚡ Develop special Artificial Intelligence models for your problem, with python, scikit-learn and Tensorflow"
		),
	],

	softwareSkills: [
    {
      skillName: "Cypress",
      fontAwesomeClassname: "logos:cypress",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "numpy",
      fontAwesomeClassname: "logos:numpy",
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "logos:tensorflow",
    },
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "Kotlin",
			fontAwesomeClassname: "vscode-icons:file-type-kotlin",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "flask",
			fontAwesomeClassname: "logos:flask",
		},
		{
			skillName: "spring",
			fontAwesomeClassname: "logos:spring",
		},
		{
			skillName: "kafka",
			fontAwesomeClassname: "logos:kafka",
		},
		{
			skillName: "java",
			fontAwesomeClassname: "logos:java",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "sentry",
			fontAwesomeClassname: "vscode-icons:file-type-sentry",
		},
		{
			skillName: "kibana",
			fontAwesomeClassname: "logos:kibana",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Cypress, Javascript, Python, Scikit-learn, Tensorflow", //Insert stack or technology you have experience in
		proficiency: "I feel comfortable working with", //Insert relative proficiency in percentage
	},
	{
		Stack: "Java, Selenium, Pytorch, Spring, React, Flask, Kotlin",
		proficiency: "I also have experience with",
	},
];

export const educationInfo = [
	{
		schoolName: "Universidade Federal de Mato Grosso do Sul",
		subHeader: "Bachelor's degree, Computer Science",
		duration: "September 2013 - April 2018",
		desc: "Course conclusion article in the field of artificial intelligence, developing a model to estimate the effort in the development of new features in software apps/sites",
		descBullets: [
			"Internship at the Information Technology Center at UFMS",
			"Volunteer work in the world's largest youth organization for leadership development - AIESEC",
		],
    github: "https://github.com/CaiqueCoelho/tcc",
		link: "https://drive.google.com/file/d/1qTlSYjZRYW8h3-lc3S26bQy1TDgYS_TH/view?usp=sharing",
    type: "Article"
	},
	{
		schoolName: "Duke University",
		subHeader: "Introduction to Machine Learning",
		duration: "January 2021 - May 2021",
		desc: "Introduction course to machine learning and pytorch with emphasis on NLP",
    link: "https://www.coursera.org/account/accomplishments/verify/3VY7HV9QGJN8?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    type: "Certified"
  },
	{
		schoolName: "Instituto Federal de Educação, Ciência e Tecnologia de Alagoas",
		subHeader: "Training Course in Artificial Intelligence",
		duration: "June 2021 - July 2021",
		desc: "Practical course for specialization in machine learning and deep learning using sklearn and tensorflow",
    link: "https://drive.google.com/file/d/1fPhkkJWyEdutDrANGm8uT-wG4WjSyGJI/view",
    type: "Certified"
	},
	{
		schoolName: "Huawei",
		subHeader: "Artificial Intelligence Certified",
		duration: "June 2021 - July 2021",
		desc: "Theoretical and practical course for specialization in machine learning and deep learning with Huawei tools",
    link: "https://drive.google.com/file/d/1fPhkkJWyEdutDrANGm8uT-wG4WjSyGJI/view",
    type: "Certified"
	},
];

export const experience = [
	{
		role: "Quality Software",
		company: "QuintoAndar",
		companylogo: quintoandar,
		date: "November 2018 – Present",
		desc: "Playing the role of QA Tribe Manager empowering and educating all people in the tribe to raise quality in code and process, ensuring a distributed culture of responsibility for quality from the beginning of development through the study of requirements and risks to the production environment with monitoring, continuous deployment and delivery",
		descBullets: [
			"Create test plans and test cases in various levels of criticality",
			"Carefully perform humanized tests to guarantee our apps meets high UI and usability standards",
      "Perform exploratory testing to find issues before product development and before product release.",
      "Take care of our bug tracking: support team in reproducing failures, debugging, prioritizing bugs and technical debts",
      "Engage in automation: either by directly implementing tests or helping defining which flows should be automated",
      "Developing and enabling other QAs and developers to write end to end and integration tests using cypress",
      "Defining metrics and monitoring the health and quality of services in production, ensuring performance, safety, and scalability"
		],
	},
	{
		role: "Android Developer",
		company: "Jera",
		companylogo: jera,
		date: "Jan 2018 – Oct 2018",
		descBullets: [
      "Build native Android apps",
      "Refactor and maintain Android apps in production",
      "Building and Maintaining Applications in Java and Kotlin",
      "Building Applications on MVP and MVVM Architectures",
      "Build Modular Applications with Dagger and Rx"
    ],
	},
	{
		role: "Quality Software",
		company: "Jera",
		companylogo: jera,
		date: "Jun 2017 – Dec 2017",
		descBullets: [
      "Identify the target test items to be evaluated by the test effort",
      "Assist in brainstorming for new features",
      "Assists in the creation and development of user stories",
      "Assist in prioritizing backlog tasks",
      "Define the appropriate tests required and any associated test data",
      "Collect and manage test data",
      "Evaluate the result of each test cycle",
      "Assist in customer relationship",
      "Conduct manual interface tests",
      "Conduct automated interface tests"
    ],
	},
];

export const projects = [
	{
		name: "App Teste Eneagrama",
		desc: "Android app for personality test with over 100,000 downloads",
		link: "https://play.google.com/store/apps/details?id=caiquecoelho.com.testeeneagrama&hl=pt_BR&gl=US",
	},
	{
		name: "Retrospectiva Twitter",
		desc: "PWA for a retrospective of tweets in 2020 and soon in 2021 with more than 200 thousand users",
		link: "https://retrospective-twitter.firebaseapp.com/",
	},
	{
		name: "My Song",
		desc: "Music recommendation based on your style using AI and the Spotify API",
		link: "https://my-song-discovery.firebaseapp.com/home",
	},
	{
		name: "Meu Time BBB",
		desc: "Fantasy game, in which people choose their teams with BBB participants, with more than 2,000 players last season",
		link: "https://meu-time-bbb.firebaseapp.com/",
	},
	{
		name: "Predicting Oscar Results",
		desc: "Project using AI to predict each year's Oscar winners",
		github: "https://github.com/CaiqueCoelho/Predict-Oscar",
		link: "https://caiquecoelho.medium.com/prevendo-os-resultados-do-oscar-2021-com-ia-6375344cefd5",
	},
	{
		name: "Predicting the evolution of the number of COVID cases",
		desc: "Project using AI to predict the evolution of the number of COVID-19 cases in Brazil",
		github: "https://github.com/CaiqueCoelho/predict-covid19-brazil",
		link: "https://caiquecoelho.medium.com/prevendo-o-crescimento-de-casos-de-covid-19-coronavirus-no-brasil-com-an%C3%A1lise-de-dados-gr%C3%A1ficos-33ee525b62f8",
	},
	{
		name: "Horóscopo Diário",
		desc: "Alexa skill to know information about your horoscope every day with more than 1,000 unique users",
		link: "https://www.amazon.com.br/Caique-Coelho-Hor%C3%B3scopo-Di%C3%A1rio/dp/B07ZZN43V3",
	},
	{
		name: "Notícias de Hoje",
		desc: "Alexa Skill with recent news about everything that happens in Brazil with more than 15 thousand unique users",
		link: "https://www.amazon.com.br/Caique-Coelho-Not%C3%ADcias-de-Hoje/dp/B085GJV4M7/",
	},
];

export const awards = [
	{
		name: "Facebook Testathon 2019 - São Paulo, Brazil",
		award:
			"Best product insight!",
	},
  {
		name: "Amazon Certified Alexa Skill Builder",
		award:
			"2x Alexa Skill Builder Incentive Certificate Winner!",
	},
];
