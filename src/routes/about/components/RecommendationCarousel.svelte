<script lang="ts">
	import RecommendationCard from './RecommendationCard.svelte';
	import { RECOMMENDATIONS } from '../../../data/experience';

	let elemCarousel: HTMLDivElement; // Reference to the carousel container

	// Scroll left
	function scrollLeft(): void {
		const atStart: boolean = elemCarousel.scrollLeft === 0;

		let x = atStart
			? elemCarousel.scrollWidth // Loop back to the end
			: elemCarousel.scrollLeft - elemCarousel.clientWidth; // Step left

		elemCarousel.scrollTo({ left: x, behavior: 'smooth' });
	}

	// Scroll right
	function scrollRight(): void {
		const atEnd = elemCarousel.scrollLeft >= elemCarousel.scrollWidth - elemCarousel.clientWidth;

		const x = atEnd
			? 0 // Loop back to the start
			: elemCarousel.scrollLeft + elemCarousel.clientWidth; // Step right

		elemCarousel.scrollTo({ left: x, behavior: 'smooth' });
	}
</script>

<div class="relative flex justify-center">
	<!-- Carousel Container -->
	<div
		bind:this={elemCarousel}
		class="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4"
	>
		{#each RECOMMENDATIONS as recommendation}
			<!-- Recommendation Card -->
			<div class="mx-auto w-[calc(100%)] shrink-0 snap-center md:w-[calc(100%-2rem)]">
				<RecommendationCard {recommendation} />
			</div>
		{/each}
	</div>

	<!-- Navigation Buttons -->
	<button
		type="button"
		class="variant-filled btn-icon absolute -left-7 top-1/2 z-10 -translate-y-1/2 md:left-0"
		on:click={scrollLeft}
		aria-label="Previous Recommendation"
	>
		←
	</button>
	<button
		type="button"
		class="variant-filled btn-icon absolute -right-7 top-1/2 z-10 -translate-y-1/2 md:right-0"
		on:click={scrollRight}
		aria-label="Next Recommendation"
	>
		→
	</button>
</div>
