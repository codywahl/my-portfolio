import type { Education, Skill, Work } from '../lib/types/experience';

const START_YEAR = 2012;
export const YEARS_OF_EXPERIENCE = new Date().getFullYear() - START_YEAR;

const GRAN_MANIBUS: Work = {
	company: 'Gran Manibus',
	position: 'Senior Manager, Solution Architect',
	location: 'Tokyo, Japan',
	startYear: '2024',
	endYear: 'Current',
	logo: '/images/full-gc-logo.png',
	logoDark: '/images/full-gc-logo.png'
};

const SLALOM_TOKYO: Work = {
	company: 'Slalom',
	position: 'Software Engineering Solution Architect',
	location: 'Tokyo, Japan',
	startYear: '2021',
	endYear: '2024',
	logo: '/images/slalom-logo-blue-rgb.svg',
	logoDark: '/images/slalom-logo-white-rgb.svg'
};

const RIGHTCROWD: Work = {
	company: 'RightCrowd',
	position: 'Solution Architect',
	location: 'Seattle, WA',
	startYear: '2017',
	endYear: '2020',
	logo: '/images/rc-logo-dark.png',
	logoDark: '/images/rc-logo.svg'
};

const SLALOM_SEATTLE: Work = {
	company: 'Slalom',
	position: 'Senior Software Engineer',
	location: 'Seattle, WA',
	startYear: '2015',
	endYear: '2017',
	logo: '/images/slalom-logo-blue-rgb.svg',
	logoDark: '/images/slalom-logo-white-rgb.svg'
};

const GREENWAY: Work = {
	company: 'Greenway Health',
	position: 'Software Engineer',
	location: 'Carrollton, GA',
	startYear: '2012',
	endYear: '2015',
	logo: '/images/greenway-logo.svg',
	logoDark: '/images/greenway-logo.svg'
};

export const ALL_WORK_EXPERIENCE: Work[] = [
	GRAN_MANIBUS,
	SLALOM_TOKYO,
	RIGHTCROWD,
	SLALOM_SEATTLE,
	GREENWAY
];

function getMostRecentWork(): Work {
	let mostRecentWork: Work = ALL_WORK_EXPERIENCE[0];

	ALL_WORK_EXPERIENCE.forEach((work) => {
		if (!mostRecentWork || parseInt(work.startYear) > parseInt(mostRecentWork.startYear)) {
			mostRecentWork = work;
		}
	});

	return mostRecentWork;
}

export const MOST_RECENT_WORK = getMostRecentWork();

const UNIVERSITY_OF_WEST_GEORGIA: Education = {
	institution: 'University of West Georgia',
	location: 'Carrollton, GA',
	fieldOfStudy: 'Computer Science',
	degree: 'Bachelor of Science in Computer Science',
	startYear: '2011',
	endYear: '2014'
};

const YMCA_JAPAN: Education = {
	institution: 'YMCA Japanese Language School',
	location: 'Osaka, Japan',
	fieldOfStudy: 'Japanese Language',
	degree: 'Course Certificate of Completion (修了証書)',
	award: 'Outstanding Performance Award (優秀賞)',
	startYear: '2018',
	endYear: '2020'
};

export const ALL_EDUCATION: Education[] = [UNIVERSITY_OF_WEST_GEORGIA, YMCA_JAPAN];

export const TECHNICAL_SKILLS: Skill[] = [
	{ name: 'Agile Team Management', rating: 4.5 },
	{ name: 'Cross-Functional Collaboration', rating: 4.5 },
	{ name: 'Multinational Team Leadership', rating: 4.5 },
	{ name: 'Sprint Planning', rating: 4.5 },
	{ name: 'Technical Story Writing', rating: 4.5 },
	{ name: 'Conflict Resolution', rating: 4.5 },
	{ name: 'Mentoring and Coaching', rating: 4 },
	{ name: 'Technical Interviews', rating: 3.5 }
];

export const PROGRAMMING_LANGUAGES: Skill[] = [
	{ name: 'TypeScript', rating: 4.5 },
	{ name: 'JavaScript', rating: 4.5 },
	{ name: 'C#', rating: 4.5 },
	{ name: 'Java', rating: 4 },
	{ name: 'SQL', rating: 4 },
	{ name: 'Python', rating: 3.5 },
	{ name: 'PowerShell', rating: 3 },
	{ name: 'Bash', rating: 3 }
];

export const PLATFORM_ENGINEERING: Skill[] = [
	{ name: 'AWS', rating: 4 },
	{ name: 'Azure', rating: 4 },
	{ name: 'Serverless', rating: 4 },
	{ name: 'CI/CD Pipelines', rating: 4.5 },
	{ name: 'IaC', rating: 4 }
];

export const TOOLS_AND_TECHNOLOGIES: Skill[] = [
	{ name: 'AWS API Gateway' },
	{ name: 'AWS CDK' },
	{ name: 'AWS CLI' },
	{ name: 'AWS CloudFormation' },
	{ name: 'AWS CloudFront' },
	{ name: 'AWS CloudTrail' },
	{ name: 'AWS CloudWatch' },
	{ name: 'AWS CodePipeline' },
	{ name: 'AWS Cognito' },
	{ name: 'AWS Control Tower' },
	{ name: 'AWS DynamoDB' },
	{ name: 'AWS IAM' },
	{ name: 'AWS Lambda' },
	{ name: 'AWS Organizations' },
	{ name: 'AWS RDS' },
	{ name: 'AWS S3' },
	{ name: 'AWS SAM' },
	{ name: 'AWS SDK' },
	{ name: 'AWS Secrets Manager' },
	{ name: 'AWS SNS' },
	{ name: 'AWS SQS' },
	{ name: 'AWS Step Functions' },
	{ name: 'Azure API Management' },
	{ name: 'Azure Blob Storage' },
	{ name: 'Azure CosmosDB' },
	{ name: 'Azure DevOps' },
	{ name: 'Azure DevOps Pipelines' },
	{ name: 'Azure Functions' },
	{ name: 'Azure Functions Core Tools' },
	{ name: 'Azure Key Vault' },
	{ name: 'Azure SDK' },
	{ name: 'Azure SQL' },
	{ name: 'Bitbucket' },
	{ name: 'ChatGPT' },
	{ name: 'Chocolatey' },
	{ name: 'CI/CD Pipelines' },
	{ name: 'Confluence' },
	{ name: 'CoPilot' },
	{ name: 'cspell' },
	{ name: 'Docker' },
	{ name: 'ESBuild' },
	{ name: 'EsLint' },
	{ name: 'Figma' },
	{ name: 'Git' },
	{ name: 'GitHub' },
	{ name: 'GitHub Actions' },
	{ name: 'GitLab' },
	{ name: 'GitLab CI/CD' },
	{ name: 'Gradle' },
	{ name: 'Homebrew' },
	{ name: 'Husky' },
	{ name: 'IaC' },
	{ name: 'Jenkins' },
	{ name: 'Jest' },
	{ name: 'Jira' },
	{ name: 'JUnit' },
	{ name: 'Lint-staged' },
	{ name: 'MacOS' },
	{ name: 'Maven' },
	{ name: 'Miro' },
	{ name: 'Moq' },
	{ name: 'MSTest' },
	{ name: 'MySQL' },
	{ name: 'Node.js' },
	{ name: 'NPM' },
	{ name: 'NuGet' },
	{ name: 'NUnit' },
	{ name: 'pg' },
	{ name: 'pgAdmin' },
	{ name: 'Pip' },
	{ name: 'PNPM' },
	{ name: 'PostgreSQL' },
	{ name: 'Postman' },
	{ name: 'Prettier' },
	{ name: 'React' },
	{ name: 'Skeleton' },
	{ name: 'SQL Database Projects' },
	{ name: 'SQL Server' },
	{ name: 'SQLite' },
	{ name: 'Svelte' },
	{ name: 'Tailwind CSS' },
	{ name: 'Turborepo' },
	{ name: 'Umzug' },
	{ name: 'Visual Studio' },
	{ name: 'Visual Studio Code' },
	{ name: 'Vitest' },
	{ name: 'Windows' },
	{ name: 'Yarn' },
	{ name: 'Zod' }
];

export const LANGUAGES: Skill[] = [
	{ name: 'English', rating: 5 }, // Native
	{ name: 'Japanese', rating: 3.5 } // Limited working proficiency
];

export const CERTIFICATIONS = [];
