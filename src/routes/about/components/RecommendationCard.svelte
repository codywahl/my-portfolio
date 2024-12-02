<script lang="ts">
	import type { Recommendation } from '$lib/types/experience';

	export let recommendation: Recommendation;
</script>

<div class="card variant-soft p-10 shadow-md">
	<!-- Recommendation Text -->
	<p class="mb-4 italic">"{recommendation.message}"</p>

	<!-- Person Details -->
	<div class="flex items-center">
		<img
			src={recommendation.photo}
			alt={recommendation.name}
			class="mr-4 h-12 rounded-full object-cover"
		/>
		<div>
			<p class="font-semibold">{recommendation.name}</p>
			<p class="text-gray-600 dark:text-gray-300">
				{recommendation.position} at {recommendation.company}
			</p>
			<p class="text-gray-500 dark:text-gray-400">{recommendation.relationship}</p>
		</div>
	</div>
</div>
