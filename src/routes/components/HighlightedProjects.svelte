<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { HIGHLIGHTED_PROJECTS } from '../../data/projects';

	const headingText = `Highlighted Project${HIGHLIGHTED_PROJECTS.length > 1 ? 's' : ''}`;
</script>

<section class="mx-auto w-full max-w-4xl">
	<div class="mb-8 flex items-center justify-between">
		<h2 class="text-3xl font-bold">{headingText}</h2>
		<a href="/projects" class="text-sm text-gray-600 hover:underline dark:text-gray-400"
			>See All Projects →</a
		>
	</div>

	<div class="flex flex-col items-center gap-8">
		{#each HIGHLIGHTED_PROJECTS as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</section>
