<script lang="ts">
	import type { Project } from '$lib/types/project';
	import '../../app.css';
	import { PROFESSIONAL_PROJECTS, PERSONAL_PROJECTS } from '../../data/projects';
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import ProjectModal from './components/ProjectModal.svelte';

	const modalStore = getModalStore();

	function triggerModal(project: Project): void {
		const modal: ModalSettings = {
			type: 'component',
			component: {
				ref: ProjectModal,
				props: { project }
			},
			modalClasses: 'w-modal-wide'
		};

		modalStore.trigger(modal);
	}
</script>

<main class="mx-auto">
	<!-- Professional Projects -->
	<section class="mb-16">
		<h2 class="mb-8 text-3xl font-bold">Professional Projects</h2>
		<div class="grid grid-cols-2 gap-4 md:grid-cols-3">
			{#each PROFESSIONAL_PROJECTS as project, index}
				<div class="group relative overflow-hidden rounded-lg">
					<!-- svelte-ignore a11y_missing_attribute -->
					<a
						tabindex={index + 1}
						role="button"
						on:click={() => triggerModal(project)}
						on:keydown={(e) => e.key === 'Enter' && triggerModal(project)}
					>
						<img
							class="h-52 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
							src={project.image}
							alt={project.title}
						/>

						<!-- Overlay -->
						<div
							class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						>
							<p class="px-4 text-center text-white">{project.shortDescription}</p>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</section>

	<!-- Personal Projects -->
	{#if PERSONAL_PROJECTS.length > 0}
		<section>
			<h2 class="mb-8 text-3xl font-bold">Personal Projects</h2>
			<div class="grid grid-cols-2 gap-4 md:grid-cols-3">
				{#each PERSONAL_PROJECTS as project, index}
					<div class="group relative overflow-hidden rounded-lg">
						<!-- svelte-ignore a11y_missing_attribute -->
						<a
							tabindex={index + 1}
							role="button"
							on:click={() => triggerModal(project)}
							on:keydown={(e) => e.key === 'Enter' && triggerModal(project)}
						>
							<img
								class="h-52 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
								src={project.image}
								alt={project.title}
							/>

							<!-- Overlay -->
							<div
								class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							>
								<p class="px-4 text-center text-white">{project.shortDescription}</p>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</section>
	{/if}
</main>
