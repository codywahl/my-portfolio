<script lang="ts">
	import '../app.css';
	import QuickIntro from './components/QuickIntro.svelte';
	import HighlightedProjects from './components/HighlightedProjects.svelte';
	import type { Project } from '../types/project';

	const projects: Project[] = [
		{
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
		}
		// {
		// 	title: 'Project Name 2',
		// 	description: 'An engaging summary...',
		// 	image: '/images/project2.jpg',
		// 	link: '/projects/project-2'
		// },
		// {
		// 	title: 'Project Name 3',
		// 	description: 'A short impactful description...',
		// 	image: '/images/project3.jpg',
		// 	link: '/projects/project-3'
		// }
	];
</script>

<main class="flex flex-col gap-24 px-8 py-12 md:px-16">
	<QuickIntro
		introText="I’m a software engineer with 15 years of experience. I thrive on creating systems that truly matter to businesses and their users. I believe in the power of good craftsmanship, collaboration, and integrity when building healthy teams and writing good code."
		bioText="I’ve lived and worked in tech hubs such as Atlanta, Seattle, and Tokyo. Outside of work, I enjoy hiking, weight lifting, judo, and spending time with my growing family."
		companyLogo="/images/full-gc-logo.png"
		jobTitle="Senior Manager, Solution Architect"
	/>

	<HighlightedProjects {projects} />
</main>

<footer class="pt-24"></footer>
