<script lang="ts">
	import type { Project } from '$lib/types/project';
	import { PROFESSIONAL_PROJECTS, PERSONAL_PROJECTS } from '../../data/projects';
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import ProjectModal from './components/ProjectModal.svelte';
	import ProjectGrid from './components/ProjectGrid.svelte';

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
	<ProjectGrid
		title="Professional Projects"
		projects={PROFESSIONAL_PROJECTS}
		onProjectClick={triggerModal}
	/>

	{#if PERSONAL_PROJECTS.length > 0}
		<ProjectGrid
			title="Personal Projects"
			projects={PERSONAL_PROJECTS}
			onProjectClick={triggerModal}
		/>
	{/if}
</main>
