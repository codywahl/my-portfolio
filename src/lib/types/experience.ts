export interface Work {
	company: string;
	position: string;
	location: string;
	startYear: string;
	endYear: string;
	description?: string;
	logo: string;
	logoDark?: string;
}

export interface Education {
	institution: string;
	fieldOfStudy: string;
	location: string;
	degree: string;
	award?: string;
	startYear: string;
	endYear: string;
}

export interface Skill {
	name: string;
	rating?: number;
}
