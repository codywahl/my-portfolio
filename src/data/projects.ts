import type { Project } from '../lib/types/project';

export const KHI_PROJECT: Project = {
	title: 'Kawasaki Maintenance Advisor — Intelligent Track Maintenance Support',
	description: `Partnering with Kawasaki Heavy Industries, my team and I designed and delivered an AI/ML-powered system to
                    compile repair needs and optimize rail maintenance routes, reducing operational costs and minimizing system 
                    disruptions. My responsibilities included leading the back-end team, architecture and system
                    infrastructure, as well as contributing to product management, planning and development. The system
                    was built using TypeScript, React, and Microsoft Azure services. 
                    Powered by Nvidia’s CuOpt technology, this solution was showcased at Nvidia GTC2024 and highlighted in a
                    case study for its impact on reducing rail maintenance costs and disruptions.`,
	image: '/images/kawasaki-track-maintenance-laptop-ari.jpeg',
	link: 'https://www.nvidia.com/en-us/case-studies/reinventing-maintenance-operations-with-ai/'
};

export const HIGHLIGHTED_PROJECTS: Project[] = [KHI_PROJECT];
export const ALL_PROJECTS: Project[] = [KHI_PROJECT];
