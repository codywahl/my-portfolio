<script lang="ts">
	import { Ratings } from '@skeletonlabs/skeleton';
	import {
		TECHNICAL_SKILLS,
		PROGRAMMING_LANGUAGES,
		PLATFORM_ENGINEERING,
		LANGUAGES,
		TOOLS_AND_TECHNOLOGIES
	} from '../../data/experience';
	import { RATINGS } from './ratings';
</script>

<section class="mx-auto w-full py-12">
	<h2 class="mb-8 text-2xl font-bold">Skills</h2>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<!-- Column 1 -->
		<div>
			<!-- Technical Skills -->
			<div class="mb-8">
				<h3 class="mb-4 text-xl font-semibold">Technical Leadership</h3>
				<ul class="space-y-4">
					{#each TECHNICAL_SKILLS as skill}
						<li class="flex items-center">
							<!-- Skill Name -->
							<p class="w-1/2 flex-shrink-0 whitespace-nowrap text-xs md:pl-4 md:text-base">
								{skill.name}
							</p>
							<!-- Ratings -->
							<div class="flex w-1/2 flex-shrink-0 justify-end">
								<Ratings value={skill.rating} max={5}>
									<svelte:fragment slot="empty">{@html RATINGS.circleEmpty}</svelte:fragment>
									<svelte:fragment slot="half">{@html RATINGS.circleHalf}</svelte:fragment>
									<svelte:fragment slot="full">{@html RATINGS.circleFull}</svelte:fragment>
								</Ratings>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- Column 2 -->
		<div>
			<!-- Programming Languages -->
			<div class="mb-4">
				<h3 class="mb-4 text-xl font-semibold">Programming Languages</h3>
				<ul class="space-y-4">
					{#each PROGRAMMING_LANGUAGES as skill}
						<li class="flex items-center">
							<!-- Skill Name -->
							<p class="w-1/2 flex-shrink-0 whitespace-nowrap text-base md:pl-4">{skill.name}</p>
							<!-- Ratings -->
							<div class="flex w-1/2 flex-shrink-0 justify-end">
								<Ratings value={skill.rating} max={5}>
									<svelte:fragment slot="empty">{@html RATINGS.circleEmpty}</svelte:fragment>
									<svelte:fragment slot="half">{@html RATINGS.circleHalf}</svelte:fragment>
									<svelte:fragment slot="full">{@html RATINGS.circleFull}</svelte:fragment>
								</Ratings>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
		<!-- Column 1 -->
		<div>
			<!-- Cloud & DevOps -->
			<div class="mb-8">
				<h3 class="mb-4 text-xl font-semibold">Platform Engineering</h3>
				<ul class="space-y-4">
					{#each PLATFORM_ENGINEERING as skill}
						<li class="flex items-center">
							<!-- Skill Name -->
							<p class="w-1/2 flex-shrink-0 whitespace-nowrap text-base md:pl-4">{skill.name}</p>
							<!-- Ratings -->
							<div class="flex w-1/2 flex-shrink-0 justify-end">
								<Ratings value={skill.rating} max={5}>
									<svelte:fragment slot="empty">{@html RATINGS.circleEmpty}</svelte:fragment>
									<svelte:fragment slot="half">{@html RATINGS.circleHalf}</svelte:fragment>
									<svelte:fragment slot="full">{@html RATINGS.circleFull}</svelte:fragment>
								</Ratings>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- Column 2 -->
		<div>
			<!-- Languages -->
			<div class="mb-4">
				<h3 class="mb-4 text-xl font-semibold">Languages</h3>
				<ul class="space-y-4">
					{#each LANGUAGES as skill}
						<li class="flex items-center">
							<!-- Skill Name -->
							<p class="w-1/2 flex-shrink-0 whitespace-nowrap pl-4 text-base">{skill.name}</p>
							<!-- Ratings -->

							<div class="flex w-1/2 flex-shrink-0 justify-end">
								<Ratings value={skill.rating} max={5}>
									<svelte:fragment slot="empty">{@html RATINGS.circleEmpty}</svelte:fragment>
									<svelte:fragment slot="half">{@html RATINGS.circleHalf}</svelte:fragment>
									<svelte:fragment slot="full">{@html RATINGS.circleFull}</svelte:fragment>
								</Ratings>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
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
