<script lang="ts">
	import type { Project } from '$lib/types/project';

	// Props
	export let project: Project;

	// Reference for the modal container
	let modalContainer: HTMLDivElement;

	// Scroll to the top when the modal opens
	$: if (modalContainer) {
		modalContainer.scrollTop = 0;
	}
</script>

<div
	bind:this={modalContainer}
	class="bg-surface-100-800-token w-modal-slim modal block h-auto max-h-[90vh] space-y-4 overflow-y-auto p-4 shadow-xl rounded-container-token md:w-modal-wide"
>
	<!-- Modal Header -->
	<header class="modal-header text-2xl font-bold">{project.title}</header>

	<!-- Modal Image -->
	<div class="hidden md:block">
		<div class="flex justify-center">
			<img src={project.image} alt={project.title} class="max-h-3xl mb-4 max-w-3xl rounded-lg" />
		</div>
	</div>

	<!-- Modal Description -->
	<div class="px-8">
		<article class="mb-4">{project.longDescription}</article>

		<!-- Tech Stack -->
		<div class="mb-4 flex flex-wrap gap-2">
			{#each project.techStack as tech}
				<span class="badge-sm variant-filled badge">{tech}</span>
			{/each}
		</div>
	</div>

	<!-- Links -->
	<div class="flex flex-col gap-4 px-4 pb-8 md:flex-row md:items-end md:justify-end md:px-8">
		<a
			href={project.link}
			target="_blank"
			rel="noopener noreferrer"
			class="variant-filled btn btn-sm md:btn-md"
		>
			{project.linkText}
		</a>

		{#if project.link2 !== undefined}
			<a
				href={project.link2}
				target="_blank"
				rel="noopener noreferrer"
				class="variant-filled btn btn-sm md:btn-md"
			>
				{project.linkText2}
			</a>
		{/if}
	</div>
</div>
