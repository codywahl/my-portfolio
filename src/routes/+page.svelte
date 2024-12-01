<script lang="ts">
	import '../app.css';
	import QuickIntro from './components/QuickIntro.svelte';
	import HighlightedProjects from './components/HighlightedProjects.svelte';
	import Experience from './components/Experience.svelte';
</script>

<main class="flex flex-col gap-24 px-8 py-12 md:px-16">
	<QuickIntro />

	<HighlightedProjects />

	<Experience />
</main>

<footer class="pt-24"></footer>
