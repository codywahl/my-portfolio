<script lang="ts">
	export let title: string;
	export let description: string;
	export let image: string;
	export let link: string;
</script>

<a
	href={link}
	target="_blank"
	rel="noopener noreferrer"
	class="bg-initial card variant-ghost card-hover overflow-hidden"
>
	<header>
		<img src={image} class="w-full bg-black/50" alt="{title} photo." />
	</header>
	<div class="space-y-4 p-8">
		<h2 class="card-title mb-2 text-2xl font-bold">{title}</h2>
		<article><p>{description}</p></article>
	</div>
</a>
