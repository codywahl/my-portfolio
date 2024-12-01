<script lang="ts">
	import type { Education } from '../../lib/types/experience';
	export let education: Education;
</script>

<div class="bg-initial card variant-soft card-hover overflow-hidden p-6 shadow-md">
	<!-- Institution Name -->
	<h3 class="text-xl font-bold">{education.institution}</h3>
	<p class="mb-2 text-lg text-gray-700 dark:text-gray-300">{education.degree}</p>

	<!-- Dates and Location -->
	<p class="text-sm text-gray-600 dark:text-gray-400">
		{education.startYear} - {education.endYear} • {education.location}
	</p>

	<!-- Optional Award -->
	{#if education.award}
		<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
			{education.award}
		</p>
	{/if}
</div>
