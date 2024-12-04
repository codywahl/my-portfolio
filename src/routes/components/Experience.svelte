<script lang="ts">
	import { ALL_WORK_EXPERIENCE } from '../../data/experience';
	import { ALL_EDUCATION } from '../../data/experience';
	import EducationCard from './EducationCard.svelte';
	import WorkCard from './WorkCard.svelte';
	import Skills from './Skills.svelte';

	export let showAboutLink: boolean;
</script>

<section class="mx-auto w-full">
	<!-- Work History -->
	<div class="flex items-center justify-between">
		<h2 class="mb-6 text-2xl font-bold">Work History</h2>

		{#if showAboutLink}
			<!-- Conditional "See Full Bio" link -->
			<a href="/about" class="text-sm text-gray-600 hover:underline dark:text-gray-400">
				See Full Bio →
			</a>
		{/if}
	</div>
	<div class="flex flex-col gap-6">
		{#each ALL_WORK_EXPERIENCE as work}
			<WorkCard {work} />
		{/each}
	</div>

	<!-- Education -->
	<h2 class="pt-10 text-2xl font-bold">Education</h2>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		{#each ALL_EDUCATION as education}
			<EducationCard {education} />
		{/each}
	</div>

	<!-- Skills -->
	<Skills />
</section>
