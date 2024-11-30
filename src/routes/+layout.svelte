<script>
    import '../app.css';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<header class="pt-8 px-8 md:px-32 pb-4 bg-transparent text-black dark:text-white flex items-center">
    <!-- Left: Site Name -->
    <a href="/" class="text-lg font-bold realtive-group">CODY WAHL</a>

    <!-- Right: Navigation Links -->
    <nav class="flex ml-auto gap-4 items-center">
        <!-- Page Links -->
		<a href="/projects" class="relative group">
			Projects
			<span class="absolute bottom-0 left-0 w-0 h-[2px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
		</a>
        <a href="/about" class="relative group">About
			<span class="absolute bottom-0 left-0 w-0 h-[2px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
		</a>

        <!-- GitHub Icon -->
        <a href="https://github.com/codywahl" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img
                src="/icons/github-mark.svg"
                alt="GitHub Logo"
                class="w-6 h-6 hover:scale-110 hover:opacity-80 transition-transform duration-200 dark:hidden"
            />
            <img
                src="/icons/github-mark-white.svg"
                alt="GitHub Logo"
                class="w-6 h-6 hover:scale-110 hover:opacity-80 transition-transform duration-200 hidden dark:block"
            />
        </a>

        <!-- LinkedIn Icon -->
        <a href="https://linkedin.com/in/codywahl" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img
                src="/icons/In-Blue-26.png"
                alt="LinkedIn Logo"
                class="w-6 h-6 hover:scale-110 hover:opacity-80 transition-transform duration-200 dark:hidden"
            />
            <img
                src="/icons/In-White-26.png"
                alt="LinkedIn Logo"
                class="w-6 h-6 hover:scale-110 hover:opacity-80 transition-transform duration-200 hidden dark:block"
            />
        </a>

		<!-- Light Switch -->
		<LightSwitch />
    </nav>
</header>

<main class="pt-8 px-4 md:px-32 mt-4">
    <slot />
</main>