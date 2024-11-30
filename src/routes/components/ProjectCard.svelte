<script lang="ts">
	export let title: string;
	export let description: string;
	export let image: string;
	export let link: string;
</script>

<div class="card variant-ghost card-hover w-full p-8 shadow-lg">
	<a href={link} target="_blank" rel="noopener noreferrer">
		<header class="card-header">
			<img src={image} alt={title} class="mb-4 h-[30rem] w-full rounded-lg object-cover" />
		</header>
		<section>
			<div class="space-y-4 p-4">
				<h3 class="card-title mb-2 text-2xl font-bold">{title}</h3>
				<article><p>{description}</p></article>
			</div>
		</section>
		<!-- <div class="card-body text-white">
		<h3 class="card-title mb-2 text-2xl font-bold">{title}</h3>
		<p class="text-lg">{description}</p>
		<a href={link} class="btn-secondary btn mt-4">View Details</a>
	</div> -->
	</a>
</div>
