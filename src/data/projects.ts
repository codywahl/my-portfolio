import type { Project } from '../lib/types/project';

const EUMERIA_PROJECT: Project = {
	title: 'EFP Order - E-commerce Platform',
	shortDescription: 'Online ordering platform for large, Japanese metal manufacturer.',
	longDescription: `The Eumeria Online Ordering Platform is a comprehensive solution designed to streamline the process of online custom metal plate ordering. The platform allows customers to easily configure and order custom metal plates, with real-time pricing and delivery estimates. I led the project, playing multiple roles from Solution Architect to Project Manager, while leading a multi-national team of developers. The project was built over 4, 2 week sprints, using React, TypeScript, and AWS with a microservices architecture. The application goes live in 2025 and is expected to generate a significant increase in sales in its first year.`,
	techStack: ['React', 'TypeScript', 'AWS', 'GitHub', 'GitHub Actions'],
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
	techStack: ['TypeScript', 'React', 'Microsoft Azure', 'Nvidia CuOpt'],
	image: '/images/kawasaki-track-maintenance-laptop-ari.jpeg',
	link: 'https://www.nvidia.com/en-us/case-studies/reinventing-maintenance-operations-with-ai/',
	linkText: 'Read Nvidia Case Study'
};

const TAKENAKA_PROJECT: Project = {
	title: 'Construction Management System',
	shortDescription:
		'Modern web app for planning large-scale construction projects, featuring advanced Gantt and Japanese-specific charts.',
	longDescription: `Takenaka Corporation, one of Japan’s largest and oldest construction companies, needed a modern web application to improve the planning of their large-scale construction projects. After three years of working with another vendor, their existing .NET solution was slow and unusable. Our team was brought in to turn the project around.
                    I conducted a thorough technical assessment, recommending a complete rebuild with a modern tech stack. Acting as the technical lead during a month-long discovery phase, I collaborated closely with Takenaka to define their needs and ensure the solution would meet their goals. Over the next six months, I architected and led the delivery of a React and TypeScript-based web application, featuring advanced Gantt charts and Japanese-specific charting tools tailored to their workflows.
                    The serverless backend, powered by AWS Lambda, API Gateway, Cognito, and S3, provided scalability, reliability, and modern authentication. AWS CloudFormation streamlined infrastructure management. The final solution replaced the legacy system, drastically improving performance and usability, and helped Takenaka enhance collaboration and efficiency across their teams.`,
	techStack: ['React', 'TypeScript', 'AWS'],
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
	techStack: ['Azure Devops', 'HTML', 'CSS', 'JavaScript', '.NET'],
	image: '/images/rc-visitor-access-management.png',
	link: 'https://www.rightcrowd.com/visitor-management/',
	linkText: 'Learn more'
};

const RIGHTCROWD_OUTLOOK_PLUGIN: Project = {
	title: 'RightCrowd Outlook Extension',
	shortDescription: `Extension to RightCrowd's Visitor Management system, integrating with Active Directory and Microsoft Outlook.`,
	longDescription: `At RightCrowd, I led the development of a custom extension for RightCrowd’s access management platform, seamlessly integrating it with Active Directory and Microsoft Outlook. This innovative solution was designed to enhance workplace security and streamline visitor management processes by leveraging familiar tools already used by organizations.
			The extension connected directly to a user’s email and calendar. When users created events, such as meetings or recurring appointments, and added external participants who lacked access to the relevant location, the system automatically registered those individuals as visitors in the RightCrowd access management platform. This automation eliminated manual workflows and ensured that visitor access was pre-authorized for the correct location and timeframe.
			The application was highly configurable, enabling organizations to define building-specific rules, handle complex scheduling for recurring events, and maintain robust security policies while minimizing administrative overhead. My contributions spanned the full lifecycle of the project, from requirements gathering and technical design to implementation and deployment. I worked closely with clients, ensuring the extension integrated seamlessly into their existing infrastructure.
			This project not only improved operational efficiency for customers but also reinforced RightCrowd’s position as a leader in workplace access management by demonstrating the potential of tailored, enterprise-grade solutions.`,
	techStack: ['C#', '.NET', 'Azure DevOps', 'Outlook API'],
	image: '/images/rc-outlook.png',
	link: 'https://www.rightcrowd.com/visitor-management/',
	linkText: 'Learn more'
};

export const HIGHLIGHTED_PROJECTS: Project[] = [KHI_PROJECT];
export const PROFESSIONAL_PROJECTS: Project[] = [
	EUMERIA_PROJECT,
	KHI_PROJECT,
	BEEM_PROJECT,
	TAKENAKA_PROJECT,
	RIGHTCROWD_MS_PLUGIN,
	RIGHTCROWD_OUTLOOK_PLUGIN
];
export const PERSONAL_PROJECTS: Project[] = [];
