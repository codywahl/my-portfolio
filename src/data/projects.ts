import type { Project } from '../lib/types/project';

const EUMERIA_PROJECT: Project = {
	title: 'EFP Order - E-commerce Platform',
	shortDescription: 'Online ordering platform for large, Japanese metal manufacturer.',
	longDescription: `The Eumeria Online Ordering Platform is a comprehensive solution designed to streamline the process of online custom metal plate ordering. The platform allows customers to easily configure and order custom metal plates, with real-time pricing and delivery estimates. I led the project, playing multiple roles from Solution Architect to Project Manager, while leading a multi-national team of developers. The project was built over 4, 2 week sprints, using React, TypeScript, and AWS with a microservices architecture. The application goes live in 2025 and is expected to generate a significant increase in sales in its first year.`,
	techStack: ['React', 'TypeScript', 'AWS', 'GitHub', 'GitHub Actions', 'PostgreSQL'],
	image: '/images/eumeria.png',
	link: 'https://eumeria-group.net/eumeria/',
	linkText: 'Visit Eumeria homepage'
};

const KHI_PROJECT: Project = {
	title: 'Kawasaki Maintenance Advisor — Intelligent Track Maintenance Support',
	shortDescription:
		'AI/ML-powered system to optimize rail maintenance routes. Featured at Nvidia GTC2024.',
	longDescription: `Partnering with Kawasaki Heavy Industries, my team and I designed and delivered an AI/ML-powered system to
                    compile repair needs and optimize rail maintenance routes, reducing operational costs and minimizing system 
                    disruptions. My responsibilities included leading the back-end team, architecture and system
                    infrastructure, as well as contributing to product management, planning and development. The system
                    was built using TypeScript, React, and Microsoft Azure services. 
                    Powered by Nvidia’s CuOpt technology, this solution was showcased at Nvidia GTC2024 and highlighted in a
                    case study for its impact on reducing rail maintenance costs and disruptions.`,
	techStack: ['TypeScript', 'React', 'Microsoft Azure', 'Nvidia CuOpt', 'SQL Server'],
	image: '/images/kawasaki-track-maintenance-laptop-ari.jpeg',
	link: 'https://www.nvidia.com/en-us/case-studies/reinventing-maintenance-operations-with-ai/',
	linkText: 'Read Nvidia Case Study'
};

const TAKENAKA_PROJECT: Project = {
	title: 'Construction Management System',
	shortDescription:
		'Modern web app for planning large-scale construction projects, featuring advanced Gantt and Japanese-specific charts.',
	longDescription: `Takenaka Corporation, one of Japan’s largest and oldest construction companies, needed a modern web application to improve the planning of their large-scale construction projects. After three years of working with another vendor, their existing .NET solution was slow and unusable. Our team was brought in to turn the project around.
                    I conducted a thorough technical assessment, recommending a complete rebuild with a modern tech stack. Acting as the technical lead during a month-long discovery phase, I collaborated closely with Takenaka to define their needs and ensure the solution would meet their goals. Over the next six months, we built out the solution I architected using AWS, React and TypeScript.
                    The serverless backend, powered by AWS Lambda, API Gateway, Cognito, and S3, provided scalability, reliability, and modern authentication. AWS CloudFormation streamlined infrastructure management. The final solution replaced the legacy system, drastically improving performance and usability, and helped Takenaka enhance collaboration and efficiency across their teams.`,
	techStack: ['React', 'TypeScript', 'AWS', 'DynamoDB'],
	image: '/images/takenaka.jpg',
	link: 'https://go.slalom.com/SlalomOnAir-Takenaka',
	linkText: 'Read Slalom interview'
};

const BEEM_PROJECT: Project = {
	title: 'Beem It — Mobile Payment App',
	shortDescription: 'Australian QR Code payment app with 1M+ users.',
	longDescription:
		'I was a part of a team that helped create a new cloud-native payment platform using Amazon Web Services (AWS). Called eftpos QR (eQR), it enables customers to scan a merchant’s unique QR code at the point of sale and pay with their choice of digital wallet, redeem gift cards, apply loyalty rewards, and save digital receipts. I specifically contributed to backend performance, reducing endpoint response time from 8 seconds to sub 1 second.',
	techStack: ['AWS', 'TypeScript'],
	image: '/images/beem.jpeg',
	link: 'https://www.slalombuild.com/case-studies/beem-it',
	linkText: 'Read Slalom Case Study',
	link2: 'https://www.youtube.com/watch?v=4ZkaSNl3_gQ&ab_channel=Slalom',
	linkText2: 'Watch AWS Summit presentation'
};

const RIGHTCROWD_MS_PLUGIN: Project = {
	title: 'Microsoft Visitor Management Portal',
	shortDescription:
		'Custom UI plugin for RightCrowd’s Visitor Management for Microsoft headquarters Lobby Experience program.',
	longDescription: `The Microsoft Visitor Management Plugin for the RightCrowd access management system was developed to streamline visitor registration and management for organizations heavily invested in the Microsoft ecosystem. This plugin allowed lobby staff at the Microsoft headquarters to check-in visitors,  schedule appointments, and automate access requests directly from familiar interfaces.
					Designed with enterprise needs in mind, the solution provided an efficient way to enhance visitor experiences while maintaining high levels of security and compliance. The plugin allowed real-time synchronization of visitor data, meeting schedules, and notifications, ensuring a frictionless process for both employees and guests.
					For the duration of my time at RightCrowd, I worked directly as one of two managing the relationship with Microsoft and the Lobby experience team, as well as owning change request management, custom development, and deployments. 
					The project had a meaningful impact, enabling Microsoft to reduce manual administrative tasks, improve security oversight, and provide a professional and seamless experience for their visitors. `,
	techStack: ['Azure Devops', 'C#', 'HTML', 'CSS', 'JavaScript', '.NET'],
	image: '/images/rc-visitor-access-management.png',
	link: 'https://www.rightcrowd.com/visitor-management/',
	linkText: 'Learn more'
};

const RIGHTCROWD_OUTLOOK_PLUGIN: Project = {
	title: 'RightCrowd Outlook Extension',
	shortDescription: `Extension to RightCrowd's Visitor Management system, integrating with Active Directory and Microsoft Outlook.`,
	longDescription: `At RightCrowd, I led the development of a custom extension for RightCrowd’s access management platform, seamlessly integrating it with Active Directory and Microsoft Outlook. This innovative solution was designed to enhance workplace security and streamline visitor management processes by leveraging familiar tools already used by organizations.
					The extension connected directly to a user’s email and calendar. When users created events, such as meetings or recurring appointments, and added external participants who lacked access to the relevant location, the system automatically registered those individuals as visitors in the RightCrowd access management platform. This automation eliminated manual workflows and ensured that visitor access was pre-authorized for the correct location and time frame.
					The application was highly configurable, enabling organizations to define building-specific rules, handle complex scheduling for recurring events, and maintain robust security policies while minimizing administrative overhead. My contributions spanned the full lifecycle of the project, from requirements gathering and technical design to implementation and deployment. I worked closely with clients, ensuring the extension integrated seamlessly into their existing infrastructure.
					This project not only improved operational efficiency for customers but also reinforced RightCrowd’s position as a leader in workplace access management by demonstrating the potential of tailored, enterprise-grade solutions.`,
	techStack: ['C#', '.NET', 'Azure DevOps', 'Outlook API'],
	image: '/images/rc-outlook.png',
	link: 'https://www.rightcrowd.com/visitor-management/',
	linkText: 'Learn more'
};

const GAP_PROJECT: Project = {
	title: 'GAP Global Distribution Planning',
	shortDescription:
		'Global distribution planning system for GAP Inc. to manage inventory and orders.',
	longDescription: `I was a development lead on the enhancement and re-architecture of GAP Inc.’s global inventory management system, a vital tool for planning product distribution and managing store shipments worldwide. The project focused on improving performance and scalability while integrating new features to meet evolving business needs.
				The existing tool, built in C# and integrated with Microsoft Excel, was re-engineered to handle higher volumes of data and provide faster, more accurate results. This required a major overhaul of the system’s architecture to optimize data processing and improve user experience. The enhancements introduced features such as real-time inventory tracking, advanced reporting capabilities, and streamlined workflows, empowering teams to make more informed decisions and execute tasks more efficiently.
				By guiding the development team through complex technical challenges, I ensured the delivery of a solution that met GAP’s operational demands while maintaining a familiar interface for end users. The project not only extended the lifespan of the tool but also significantly improved its performance and functionality, aligning it with GAP’s global retail operations.`,
	techStack: ['C#', '.NET', 'Excel'],
	image: '/images/gap.jpg',
	link: 'https://www.gapinc.com/en-us/careers/gap-inc-talent-areas/global-supply-chain',
	linkText: 'Visit GAP Inc.'
};

const DENTAL_MARKETPLACE_PROJECT: Project = {
	// @cspell:ignore Wellfit
	title: 'Wellfit Dental Marketplace',
	shortDescription:
		'Cloud-native FinTech platform simplifying dental care finances, supporting 400,000+ users and $1.5 billion in secure annual transactions.',
	longDescription: `I was part of the team that developed what is now known as Wellfit, a FinTech and HealthTech platform revolutionizing dental care finances. The solution enabled users to find and compare dental providers, estimate costs, and schedule services, providing an intuitive and secure experience for 400,000+ users.
					Built with C#, Razor, and ASP.NET Core, the platform adhered to HIPAA and PCI-DSS compliance standards, ensuring the secure handling of sensitive data. Designed as a cloud-native application, it was engineered to handle over $1.5 billion in annual transactions, meeting high performance and scalability demands.
					The project focused on empowering users with streamlined access to essential tools for managing dental care costs, supporting both high transaction volumes and substantial revenue goals. This foundational work set the stage for the platform’s lasting success in simplifying dental care access through technology.`,
	techStack: ['C#', 'Razor', 'ASP.NET Core', 'SQL Server'],
	image: '/images/wellfit.jpg',
	link: 'https://wellfit.com/',
	linkText: 'Visit Wellfit'
};

const FIRST_AMERICAN_PROJECT: Project = {
	title: 'First American Natural Hazard Disclosures',
	shortDescription:
		'Natural hazard discloser report ordering platform for First American Financial Corporation, enabling efficient and compliant property disclosures.',
	longDescription:
		'The Natural Hazard Disclosures (NHD) report ordering platform was designed to streamline the process of requesting essential property-related reports. The platform allowed users to quickly and efficiently order NHD reports, ensuring compliance and transparency in real estate transactions. As a Senior Engineer, I played a pivotal role in designing and implementing the system`s backend, enabling reliable and performant functionality. This foundational project fostered a strong ongoing relationship between First American Financial Corporation and Slalom, paving the way for future collaborations.',
	techStack: ['C#', '.NET', 'SQL Server'],
	image: '/images/first-american-nhd.png',
	link: 'https://orderform.fanhd.com/',
	linkText: 'Visit First American NHD'
};

export const HIGHLIGHTED_PROJECTS: Project[] = [KHI_PROJECT];
export const PROFESSIONAL_PROJECTS: Project[] = [
	EUMERIA_PROJECT,
	KHI_PROJECT,
	BEEM_PROJECT,
	TAKENAKA_PROJECT,
	RIGHTCROWD_MS_PLUGIN,
	RIGHTCROWD_OUTLOOK_PLUGIN,
	GAP_PROJECT,
	DENTAL_MARKETPLACE_PROJECT,
	FIRST_AMERICAN_PROJECT
];

const NEETCODE_JAVA: Project = {
	title: 'Neetcode 150 in Java',
	shortDescription: 'A Java project containing solutions to the Neetcode 150 programming problems.',
	longDescription:
		'In late 2024, I embarked on a personal project to sharpen my problem-solving skills, focusing on Leetcode-style challenges that have become increasingly vital in tech interviews. I decided to approach this with a fresh perspective by revisiting a language I hadn’t used recently—Java. Though I first started with Java in the early 2010s, my professional experience has been primarily with C# and TypeScript. To structure my efforts, I chose the highly recommended Neetcode 150—a curated list of algorithm and data structure problems—as my roadmap, aiming to tackle one problem a day until I complete the entire set.',
	techStack: ['Java', 'Gradle', 'JUnit'],
	image: '/images/neetcode.jpg',
	link: 'https://github.com/codywahl/neetcode150Java',
	linkText: 'View on GitHub'
};

const MONOREPO_ACCELERATOR: Project = {
	title: 'TS MonoRepo Accelerator',
	shortDescription: 'A TypeScript monorepo accelerator built using pnpm workspaces.',
	longDescription:
		'I created this monorepo accelerator to streamline project setup and save time typically spent configuring tools and practices from scratch. Built with pnpm workspaces, it comes pre-configured with essentials like ESLint, Prettier, Jest, and Husky, making it easier to get projects off the ground quickly and focus on building meaningful solutions.',
	techStack: [
		'TypeScript',
		'pnpm',
		'ESLint',
		'Prettier',
		'Jest',
		'Husky',
		'GitHub Actions',
		'Lint-staged',
		'cspell',
		'Jest',
		'Turbo'
	],
	image: '/images/monorepo.png',
	link: 'https://github.com/codywahl/monorepo-accelerator',
	linkText: 'View on GitHub'
};

const DEV_SETUP: Project = {
	title: 'Dev machine setup script',
	shortDescription:
		'A script to setup a new development machine with all the tools my team needed.',
	longDescription:
		'Setting up a new development machine can be a tedious and time-intensive process, especially for teams. To streamline this, I developed a CLI tool using PowerShell. By providing a .config file listing the required applications for a specific development environment, the tool can set up, install, update, and list all the specified applications. It also leverages the Chocolatey package manager for seamless application installation. This solution significantly reduced the time needed to configure new machines while ensuring team-wide consistency in tools and versions.',
	techStack: ['PowerShell', 'Chocolatey'],
	image: '/images/powershell.png',
	link: 'https://github.com/codywahl/dev-machine-setup',
	linkText: 'View on GitHub'
};

const APPOINTMENT_RETRIEVER: Project = {
	title: 'Appointment Retriever',
	shortDescription:
		'A command-line tool for retrieving appointments from a Microsoft 365 calendar and exporting them as a CSV for easy analysis and integration.',
	longDescription:
		'AppointmentRetriever is a robust command-line tool designed to simplify calendar data management. Built to interact with Microsoft 365 calendars, it enables users to effortlessly retrieve appointments and export them as CSV files. This capability supports streamlined analysis, integration into workflows, and enhanced organizational productivity. The tool uses Microsoft Graph API for secure data retrieval and includes customization options such as date range filtering and time zone adjustments. With straightforward setup and execution, AppointmentRetriever is an essential tool for users seeking efficient calendar data extraction without the overhead of manual processes.',
	techStack: ['C#', 'Microsoft Exchange Web Services'],
	image: '/images/exchange.jpg',
	link: 'https://github.com/codywahl/AppointmentRetriever/tree/master',
	linkText: 'View on GitHub'
};

const FILE_TO_RESX: Project = {
	title: 'File to Resx - Text and CSV to .resx Converter',
	shortDescription:
		'A C# utility that converts text or CSV files into .resx resource files, streamlining localization for web applications.',
	longDescription:
		'FileToResx is a C# utility designed to facilitate the localization process in web applications by converting text or CSV files into .resx (XML-based resource) files. This tool is particularly useful when dealing with multiple culture-specific translation files, as it automates the conversion into .resx format, ensuring consistency and efficiency in managing localized resources.',
	techStack: ['C#'],
	image: '/images/resx.png',
	link: 'https://github.com/codywahl/FileToResx',
	linkText: 'View on GitHub'
};

const REMOTE_SERVICE_RESTART: Project = {
	title: 'Remote Service Restart',
	shortDescription:
		'A C# Windows Forms application for remotely restarting Windows services on multiple machines with ease and efficiency.',
	longDescription:
		'RemoteServiceRestart is a Windows Forms application developed in C# to provide an intuitive interface for managing Windows services across a network. The application enables IT administrators to remotely restart services on multiple machines, simplifying the process of maintaining and troubleshooting distributed systems.',
	techStack: ['C#', 'Windows Forms', 'Windows Services', 'System.Management'],
	image: '/images/win-services.png',
	link: 'https://github.com/codywahl/RemoteServiceRestart/tree/master',
	linkText: 'View on GitHub'
};

export const PERSONAL_PROJECTS: Project[] = [
	NEETCODE_JAVA,
	MONOREPO_ACCELERATOR,
	DEV_SETUP,
	APPOINTMENT_RETRIEVER,
	FILE_TO_RESX,
	REMOTE_SERVICE_RESTART
];
