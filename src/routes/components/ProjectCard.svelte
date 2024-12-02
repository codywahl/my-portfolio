<script lang="ts">
	import type { Project } from '$lib/types/project';

	export let project: Project;
</script>

<a
	href={project.link}
	target="_blank"
	rel="noopener noreferrer"
	class="bg-initial card variant-ghost card-hover overflow-hidden"
>
	<header>
		<img src={project.image} class="w-full bg-black/50" alt="{project.title} photo." />
	</header>
	<div class="space-y-4 p-8">
		<h2 class="card-title mb-2 text-2xl font-bold">{project.title}</h2>
		<article><p>{project.longDescription}</p></article>
	</div>
</a>
