<script lang="ts">
	import {
		TECHNICAL_SKILLS,
		PROGRAMMING_LANGUAGES,
		PLATFORM_ENGINEERING,
		LANGUAGES,
		TOOLS_AND_TECHNOLOGIES
	} from '../../data/experience';
	import SkillCategory from './SkillCategory.svelte';
</script>

<section class="mx-auto w-full py-12">
	<h2 class="mb-8 text-2xl font-bold">Skills</h2>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<SkillCategory title="Technical Leadership" skills={TECHNICAL_SKILLS} />
		<SkillCategory title="Programming Languages" skills={PROGRAMMING_LANGUAGES} />
	</div>

	<div class="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
		<SkillCategory title="Platform Engineering" skills={PLATFORM_ENGINEERING} />
		<SkillCategory title="Languages" skills={LANGUAGES} />
	</div>

	<!-- Tools & Platforms -->
	<div class="mb-8 pt-4">
		<h3 class="mb-4 text-xl font-semibold">Tools & Platforms</h3>
		<div class="flex flex-wrap gap-2 px-4">
			{#each TOOLS_AND_TECHNOLOGIES as tool}
				<span
					class="chip variant-gradient-secondary-tertiary bg-gradient-to-br hover:variant-gradient-secondary-primary"
					>{tool.name}</span
				>
			{/each}
		</div>
	</div>
</section>
