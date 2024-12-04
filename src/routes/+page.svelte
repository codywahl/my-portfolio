<script lang="ts">
	import '../app.css';
	import QuickIntro from './components/QuickIntro.svelte';
	import HighlightedProjects from './components/HighlightedProjects.svelte';
	import Experience from './components/Experience.svelte';
</script>

<section class="flex flex-col gap-24">
	<QuickIntro />

	<HighlightedProjects />

	<Experience showAboutLink={true} />
</section>
