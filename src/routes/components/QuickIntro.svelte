<script lang="ts">
	import { INTRO_TEXT, BIO_TEXT } from '../../data/about';
	import { MOST_RECENT_WORK } from '../../data/experience';
</script>

<!-- Quick Intro Section -->
<section class="mx-auto flex w-full max-w-4xl flex-col-reverse items-center gap-8 md:flex-row">
	<!-- Intro Content -->
	<div class="max-w-lg text-center md:text-left">
		<h1 class="mb-4 text-4xl font-bold">Hi, I’m Cody!</h1>
		<p class="mb-4 text-lg">{INTRO_TEXT}</p>
		<p class="text-lg">{BIO_TEXT}</p>

		<!-- Now Working At Section -->
		<div class="mt-8">
			<p class="mb-2 text-base">Now working at</p>
			<img
				src={MOST_RECENT_WORK.logo}
				alt="Employer Logo"
				class="mx-auto mb-2 h-auto w-64 max-w-xs object-contain md:mx-0"
			/>
			<p class="text-sm text-gray-600 dark:text-gray-400">{MOST_RECENT_WORK.company}</p>
		</div>
	</div>

	<!-- Profile Image -->
	<div class="flex-shrink-0">
		<!-- svelte-ignore a11y_img_redundant_alt -->
		<img
			src="/images/cody.jpeg"
			alt="Picture of Cody"
			class="h-48 w-48 rounded-full object-cover shadow-lg md:h-64 md:w-64"
		/>
	</div>
</section>
