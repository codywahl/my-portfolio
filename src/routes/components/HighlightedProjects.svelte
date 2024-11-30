<script lang="ts">
	import type { Project } from '../../types/project';
	import ProjectCard from './ProjectCard.svelte';

	export let projects: Project[];
</script>

<section class="mx-auto w-full max-w-4xl">
	<div class="mb-8 flex items-center justify-between">
		<h2 class="text-3xl font-bold">Highlighted Projects</h2>
		<a href="/projects" class="text-sm text-gray-600 hover:underline dark:text-gray-400"
			>See All Projects →</a
		>
	</div>

	<div class="flex flex-col items-center gap-8">
		{#each projects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</section>
