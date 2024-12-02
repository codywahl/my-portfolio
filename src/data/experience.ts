import type { Education, Recommendation, Skill, Work } from '../lib/types/experience';

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

const DAVID_RECOMMENDATION: Recommendation = {
	name: 'David Lawton',
	position: 'Senior Director - AI Platform Lead',
	company: 'Slalom, Seattle',
	relationship: 'David was senior to Cody but didn’t manage directly',
	photo: '/images/david-lawton.jpeg',
	linkedinUrl: 'https://www.linkedin.com/in/david-lawton-0711b92/',
	message:
		"I had the pleasure of working with Cody for the past two years in Japan, where he consistently demonstrated exceptional skill and dedication as an architect and development lead on our team. Cody played a pivotal role in multiple strategic projects for our company, each involving a different set of technologies. His ability to navigate difficult technical environments and architect solutions into cohesive, innovative design was truly impressive. Cody's technical expertise is matched by his outstanding interpersonal skills. He excels in fostering a collaborative environment, effectively communicating with team members, and building strong relationships with clients. His approachable nature and ability to understand and address client needs have been invaluable to our success. Cody also spent a lot of time building our team’s culture and fostering a positive and fun working environment. Cody's contributions have not only advanced our technical capabilities but also strengthened our client partnerships. I am confident that he will continue to achieve great success in his career, and I wholeheartedly recommend him to any organization seeking a talented and versatile architect."
};

const THU_RECOMMENDATION: Recommendation = {
	// @cspell:ignore Dinh, EPAM
	name: 'Thu Dinh',
	position: 'Manager',
	company: 'EPAM System Vietnam',
	relationship: 'Thu worked with Cody but they were at different companies',
	photo: '/images/thu-dinh.jpeg',
	linkedinUrl: 'https://www.linkedin.com/in/thu-dinh-b51a4813a/',
	message: `I had the privilege of working with Cody on our first project, and he truly stood out as a leader any developer would be fortunate to have. 
			In addition to his role as an engineering manager, Cody took on multiple responsibilities including solution architect, technical leader, senior backend developer, scrum master, project manager. 
			His ability to inspire and guide the teams, while contributing hands-on to various aspects of the project, was instrumental in our success. Cody created a collaborative, supportive environment that empowered developers to excel. 
			I highly recommend him for any challenging project or leadership role.`
};

const GEORGE_RECOMMENDATION: Recommendation = {
	name: 'George Olson',
	position: 'Director of Software Engineering',
	company: 'Slalom Build, Portland',
	relationship: 'George managed Cody directly',
	photo: '/images/george-olson.jpeg',
	linkedinUrl: 'https://www.linkedin.com/in/george-olson/',
	message: `Cody Wahl stands out as an exceptional leader with a remarkable executive presence that inspires and motivates those around him. His influence extends beyond immediate objectives, leaving a lasting impact on both the organization and its people. It's been a privilege to witness Cody's professional growth and see the positive impact he brings.`
};

const BEN_RECOMMENDATION: Recommendation = {
	// @cspell:ignore amptalk
	name: 'Ben Price',
	position: 'VP of Engineering',
	company: 'amptalk',
	relationship: 'Ben managed Cody directly',
	photo: '/images/ben-price.jpeg',
	linkedinUrl: 'https://www.linkedin.com/in/benpricedev/',
	message: `I've had the pleasure of managing, working with, and getting to know Cody for the past two years. During that time Cody has shown time and time again how valuable of a member of the team he is. I can always rely on Cody to successfully deliver on any project he's aligned to. Cody is also the driving force behind our internal culture committee. He has taken ownership of the culture committee and both organizes and leads regular events. I think it's safe to say that Slalom Build wouldn't be the same without everything that Cody has done. I'm really glad for the opportunity to be working with Cody and hope to continue to do so for the foreseeable future.`
};

const MARK_RECOMMENDATION: Recommendation = {
	// @cspell:ignore Shipps
	name: 'Mark Shipps',
	position: 'Director of Platform Engineering and Cloud Enablement',
	company: 'Slalom Tokyo',
	relationship: 'Mark was senior to Cody but didn’t manage directly',
	photo: '/images/mark-shipps.jpeg',
	linkedinUrl: 'https://www.linkedin.com/in/mashipps8/',
	message: `I had the pleasure of working with Cody these past couple years at Slalom Build. During that time, I came to know how valuable Cody is as a friend, teammate, and technical leader. He is a person who approaches everything he does with a sense of accountability and genuine interest in helping others. His technical abilities as a software engineer are incredible, quickly being able to architect, implement, and optimize on anything he sets out to build. Not only did he excel in delivering quality work and bringing value to our clients of various industries, but he was a critical driver of building team culture. Cody took pride in leading our internal culture committee, whose mission was to invest in and intentionally drive an inclusive team culture of connectivity where all loved their work. This was no small amount of work, and it was critical in the success that we've had in fulfilling that mission. Cody will no doubt continue to excel in all he sets out to do, and he receives my highest recommendation.`
};

const JESS_RECOMMENDATION: Recommendation = {
	name: 'Jess Stull',
	position: 'Senior Architect, Solution Ownership',
	company: 'Slalom, Seattle',
	relationship: 'Jess worked with Cody on the same team',
	photo: '/images/jess-stull.jpeg',
	linkedinUrl: 'https://www.linkedin.com/in/jessstull/',
	message: `Over the last 5+ months, I have had the honor of working with Cody on the KHI project. During this time Cody has demonstrated superior leadership and ownership on the project. 

Cody was tasked with leading the back-end development and delivery on the project. The task was made even more challenging with the product owner and some development team members located 16-hours behind the Tokyo time zone. Despite the extra challenges this brought, Cody successfully led the back-end team to deliver MVP on time. It was great to witness Cody truly own the back end. He coached and guided more junior team members, provided his subject matter expertise among the other project leads, and always considered the quality and sustainability of the application. I had no doubt about Cody’s commitment or determination to develop a great product, and I believe his attitude inspired others on the team to do the same. I am also very grateful to Cody for taking on a leadership role amongst all our Tokyo team members after our Tokyo SO transitioned off the team. Cody made sure the team’s concerns were heard and morale was good. I hope I have the privilege of working with Cody on another project soon!`
};

const OMAR_RECOMMENDATION: Recommendation = {
	// @cspell:ignore Galeano
	name: 'Omar Galeano',
	position: 'Director Quality Engineering',
	company: 'Slalom, Tokyo',
	relationship: 'Omar was senior to Cody but didn’t manage directly',
	photo: '/images/omar-galeano.jpeg',
	linkedinUrl: 'https://www.linkedin.com/in/omargaleano/',
	message: `Cody and I worked together at Slalom many years ago and were reunited again in Tokyo when Slalom expanded into Japan.

He and I collaborated early on, on a chartered team to build a healthy, vibrant work culture for our people, through a mix of internal/external, educational and fun activities. 

It became clear that creating this kind of work atmosphere was a passion of Cody's and after the first year, he took over for me as group leader and with his team, added much-needed and structure which made their efforts even more effective.

Every year, Slalom sends out a high-visibility Engagement Survey, and some of the questions are centered around company culture. It has been clear based on the relative scores and responses from our team that his and his team's efforts have made a significant positive impact on the quality of our people's daily working experience in Japan.`
};

export const RECOMMENDATIONS: Recommendation[] = [
	DAVID_RECOMMENDATION,
	THU_RECOMMENDATION,
	GEORGE_RECOMMENDATION,
	BEN_RECOMMENDATION,
	MARK_RECOMMENDATION,
	JESS_RECOMMENDATION,
	OMAR_RECOMMENDATION
];
export const CERTIFICATIONS = [];
