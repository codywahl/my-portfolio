<script>
	import ResumeDownload from '../components/ResumeDownload.svelte';
	import Experience from './../components/Experience.svelte';
	import FullIntro from './components/FullIntro.svelte';
	import RecommendationCarousel from './components/RecommendationCarousel.svelte';
</script>

<section class="flex w-full flex-col gap-20">
	<!-- About Me Section -->
	<section class="mx-auto">
		<FullIntro />
	</section>

	<!-- Resume Download -->
	<section class="mx-auto">
		<ResumeDownload />
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
