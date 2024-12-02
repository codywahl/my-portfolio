<script>
	import '../../app.css';
	import Experience from './../components/Experience.svelte';
	import FullIntro from './components/FullIntro.svelte';
	import RecommendationCarousel from './components/RecommendationCarousel.svelte';
</script>

<section class="flex w-full flex-col gap-20">
	<!-- About Me Section -->
	<section class="mx-auto">
		<FullIntro />
	</section>

	<!-- Resume Download Section -->
	<section class="mx-auto text-center">
		<a href="/files/Cody_Wahl_TechnologyLeader_Resume.pdf" download="Cody_Wahl_Resume"
			><button class="btn-primary variant-filled-tertiary btn"> Download My Resume </button></a
		>

		<p class="mt-2 text-sm text-gray-600">PDF, 112 KB</p>
	</section>

	<!-- Recommendations Section -->
	<section class="mx-auto w-full">
		<h2 class="mb-6 text-center text-3xl font-bold">Professional Recommendations</h2>
		<RecommendationCarousel />
	</section>

	<!-- Experience Section -->
	<section class="mx-auto">
		<Experience showAboutLink={false} />
	</section>
</section>
