<script lang="ts">
	import { ABOUT_TEXT, CURRENT_WORK_1, CURRENT_WORK_2, PORTFOLIO_TEXT } from '../../../data/about';

	// Array of images for the carousel
	let images = [
		{ src: '/images/cody.jpeg', alt: 'Head-shot of Cody' },
		{ src: '/images/cody-presenting.jpeg', alt: 'Cody presenting at a tech talk' },
		{ src: '/images/cody-family.jpg', alt: 'Cody with his family' }
	];
	let currentIndex = 0;

	// Functions for carousel navigation
	function nextImage() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prevImage() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}
</script>

<section class="mx-auto gap-8">
	<div class="grid grid-cols-1 md:grid-cols-2">
		<!-- Left Column -->
		<div class="space-y-8 pr-6">
			<!-- Portfolio Tech -->
			<div>
				<h3 class="mb-4 text-2xl font-bold">Portfolio Tech</h3>
				<p>
					{PORTFOLIO_TEXT}
				</p>
			</div>

			<!-- About Me -->
			<div>
				<h3 class="mb-4 text-2xl font-bold">About Me</h3>
				<p>
					{ABOUT_TEXT}
				</p>
			</div>
		</div>

		<!-- Right Column: Carousel -->
		<div class="pt-12">
			<div class="relative">
				<!-- Carousel -->
				<div class="flex items-center justify-center overflow-hidden">
					<img
						src={images[currentIndex].src}
						alt={images[currentIndex].alt}
						class="max-h-96 w-full rounded-lg object-cover shadow-md"
					/>
				</div>

				<!-- Navigation Buttons -->
				<button
					type="button"
					class="variant-filled btn-icon absolute -left-8 top-1/2 z-10 -translate-y-1/2 md:left-2"
					on:click={prevImage}
				>
					←
				</button>
				<button
					type="button"
					class="variant-filled btn-icon absolute -right-8 top-1/2 z-10 -translate-y-1/2 md:right-2"
					on:click={nextImage}
				>
					→
				</button>
			</div>
		</div>
	</div>

	<!-- Current Work -->
	<div class="mt-10">
		<h3 class="mb-4 text-2xl font-bold">Current Work</h3>
		<p>
			{CURRENT_WORK_1}
		</p>
		<p>
			{CURRENT_WORK_2}
		</p>
	</div>
</section>
