<script lang="ts">
	import type { Skill } from '$lib/types/experience';
	import { Ratings } from '@skeletonlabs/skeleton';
	import CircleEmpty from './CircleEmpty.svelte';
	import CircleHalf from './CircleHalf.svelte';
	import CircleFull from './CircleFull.svelte';

	export let title: string;
	export let skills: Skill[];
</script>

<div class="mb-8">
	<h3 class="mb-4 text-xl font-semibold">{title}</h3>
	<ul class="space-y-4">
		{#each skills as skill}
			<li class="flex items-center">
				<p class="w-1/2 flex-shrink-0 whitespace-nowrap text-base md:pl-4">{skill.name}</p>
				<div class="flex w-1/2 flex-shrink-0 justify-end">
					<Ratings value={skill.rating} max={5}>
						<svelte:fragment slot="empty"><CircleEmpty /></svelte:fragment>
						<svelte:fragment slot="half"><CircleHalf /></svelte:fragment>
						<svelte:fragment slot="full"><CircleFull /></svelte:fragment>
					</Ratings>
				</div>
			</li>
		{/each}
	</ul>
</div>
