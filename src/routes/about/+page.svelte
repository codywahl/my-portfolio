<script>
	import '../../app.css';
	import Experience from './../components/Experience.svelte';
	import FullIntro from './components/FullIntro.svelte';
	import RecommendationCarousel from './components/RecommendationCarousel.svelte';
</script>

<main class="flex flex-col gap-20 px-8 py-12 md:px-16">
	<!-- About Me Section -->
	<section class="mx-auto max-w-4xl">
		<FullIntro />
	</section>

	<!-- Resume Download Section -->
	<section class="mx-auto max-w-4xl text-center">
		<button class="btn-primary variant-filled-tertiary btn"> Download My Resume </button>
		<p class="mt-2 text-sm text-gray-600">PDF, 1.2 MB</p>
	</section>

	<!-- Recommendations Section -->
	<section class="mx-auto max-w-4xl">
		<h2 class="mb-6 text-center text-3xl font-bold">Professional Recommendations</h2>
		<RecommendationCarousel />
	</section>

	<!-- Experience Section -->
	<section class="mx-auto max-w-4xl">
		<Experience showAboutLink={false} />
	</section>
</main>
