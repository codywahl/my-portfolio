<script lang="ts">
	import type { Recommendation } from '$lib/types/experience';

	export let recommendation: Recommendation;
</script>

<div class="card variant-soft flex h-full items-center justify-center p-5 shadow-md md:p-10">
	<!-- Recommendation Text -->
	<div>
		<p class="mb-4 italic">"{recommendation.message}"</p>

		<!-- Person Details -->
		<div class="flex items-center">
			<img
				src={recommendation.photo}
				alt={recommendation.name}
				class="mr-4 h-12 rounded-full object-cover"
			/>
			<div>
				<a
					href={recommendation.linkedinUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="group relative inline-block font-semibold"
				>
					{recommendation.name}
					<span
						class="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full dark:bg-white"
					></span>
				</a>

				<p class="text-gray-600 dark:text-gray-300">
					{recommendation.position} at {recommendation.company}
				</p>
				<p class="text-gray-500 dark:text-gray-400">{recommendation.relationship}</p>
			</div>
		</div>
	</div>
</div>
