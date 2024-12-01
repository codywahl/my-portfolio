<script lang="ts">
	import type { Work } from '../../lib/types/experience';
	export let work: Work;
</script>

<div class="card variant-soft card-hover rounded-lg p-8 shadow-md">
	<div class="flex flex-col items-center gap-4 md:flex-row md:items-start">
		<!-- Logo -->
		<div>
			<img src={work.logo} alt="{work.company} logo" class="h-20 w-24 object-contain dark:hidden" />
			<img
				src={work.logoDark}
				alt="{work.company} logo dark mode"
				class="hidden h-20 w-28 object-contain dark:block"
			/>
		</div>

		<!-- Job Details -->
		<div class="px-4 text-center md:text-left">
			<h3 class="text-xl font-bold">{work.position}</h3>
			<p class="text-gray-600 dark:text-gray-400">{work.company} • {work.location}</p>
			<p class="text-gray-500 dark:text-gray-400">{work.startYear} - {work.endYear}</p>
		</div>
	</div>
</div>
