<script>
	import '../app.css';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { initializeStores, Modal } from '@skeletonlabs/skeleton';
	initializeStores();
</script>

<header class="flex items-center bg-transparent px-8 pb-4 pt-8 text-black dark:text-white md:px-32">
	<!-- Left: Site Name -->
	<a href="/" class="realtive-group flex pl-2 text-lg font-bold">
		<img
			src="/icons/favicon.png"
			alt="Site logo"
			class="hidden h-6 w-6 transition-transform duration-200 hover:scale-110 hover:opacity-80 md:block"
		/>
		<p class="md:pl-2">CODY WAHL</p>
	</a>

	<!-- Right: Navigation Links -->
	<nav class="ml-auto flex items-center gap-2 md:gap-4">
		<!-- Page Links -->
		<a href="/projects" class="group relative">
			Projects
			<span
				class="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full dark:bg-white"
			></span>
		</a>
		<a href="/about" class="group relative"
			>About
			<span
				class="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full dark:bg-white"
			></span>
		</a>

		<!-- GitHub Icon -->
		<a
			href="https://github.com/codywahl"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="GitHub"
			class="hidden md:block"
		>
			<img
				src="/icons/github-mark.svg"
				alt="GitHub Logo"
				class="h-6 w-6 transition-transform duration-200 hover:scale-110 hover:opacity-80 dark:hidden"
			/>
			<img
				src="/icons/github-mark-white.svg"
				alt="GitHub Logo"
				class="hidden h-6 w-6 transition-transform duration-200 hover:scale-110 hover:opacity-80 dark:block"
			/>
		</a>

		<!-- LinkedIn Icon -->
		<a
			href="https://linkedin.com/in/codywahl"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="LinkedIn"
		>
			<img
				src="/icons/In-Blue-26.png"
				alt="LinkedIn Logo"
				class="h-4 w-4 transition-transform duration-200 hover:scale-110 hover:opacity-80 dark:hidden md:h-6 md:w-6"
			/>
			<img
				src="/icons/In-White-26.png"
				alt="LinkedIn Logo"
				class="hidden h-4 w-4 transition-transform duration-200 hover:scale-110 hover:opacity-80 dark:block md:h-6 md:w-6"
			/>
		</a>

		<!-- Light Switch -->
		<LightSwitch />
	</nav>
</header>

<Modal />

<main class="mx-auto max-w-5xl px-8 py-14">
	<slot />
</main>
