<script lang="ts">
	import type { Project } from '$lib/types/project';

	export let title: string;
	export let projects: Project[];
	export let onProjectClick: (project: Project) => void;
</script>

<section class="mb-16">
	<h2 class="mb-8 text-3xl font-bold">{title}</h2>
	<div class="grid grid-cols-2 gap-4 md:grid-cols-3">
		{#each projects as project}
			<div class="group relative overflow-hidden rounded-lg">
				<button class="w-full" on:click={() => onProjectClick(project)}>
					<img
						class="h-52 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
						src={project.image}
						alt={project.title}
					/>
					<div
						class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					>
						<p class="px-4 text-center text-white">{project.shortDescription}</p>
					</div>
				</button>
			</div>
		{/each}
	</div>
</section>
