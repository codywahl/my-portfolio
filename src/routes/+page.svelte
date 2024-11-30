<script>
    import '../app.css';
</script>

<main class="px-8 md:px-16 py-12 flex flex-col gap-28">
    <!-- Quick Intro Section -->
    <section class="flex flex-col-reverse md:flex-row items-center gap-8 mx-auto max-w-4xl w-full">
        <!-- Intro Content -->
        <div class="text-center md:text-left max-w-lg">
            <h1 class="text-4xl font-bold mb-4">Hi, I’m Cody!</h1>
            <p class="text-lg mb-4">
                I’m a software engineer with 15 years of experience. I thrive on creating systems that truly matter to businesses and their users. I believe in the power of good craftsmanship, collaboration, and integrity when creating and healthy teams and writing good code.
            </p>
            <p class="text-lg">
                I’ve lived and worked in tech hubs such as Atlanta, Seattle, and Tokyo. Outside of work, I enjoy hiking, weight lifting, judo, and spending time with my growing family.
            </p>

            <!-- Now Working At Section -->
            <div class="mt-8">
                <p class="text-base mb-2">Now working at</p>
                <img src="/images/full-gc-logo.png" alt="Employer Logo" class="w-64 max-w-xs h-auto object-contain mb-2 mx-auto md:mx-0" />
                <p class="text-gray-600 dark:text-gray-400 text-sm">Senior Manager, Solution Architect</p>
            </div>
        </div>

        <!-- Profile Image -->
        <div class="flex-shrink-0">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img
                src="/images/cody.jpeg"
                alt="Picture of Cody"
                class="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover"
            />
        </div>
    </section>

    <section class="mx-auto max-w-4xl w-full">
        <div class="flex justify-between items-center mb-8">
            <h2 class="text-3xl font-bold">Highlighted Projects</h2>
            <a href="/projects" class="text-sm text-gray-600 dark:text-gray-400 hover:underline">See All Projects →</a>
        </div>
    
        <!-- Cards Container -->
        <div class="flex flex-col gap-8 items-center">
            <!-- Card 1 -->
            <div class="card variant-ghost-secondary w-full p-8 shadow-lg">
                <img src="/images/project1.jpg" alt="Project 1" class="rounded-lg mb-4 w-full h-64 object-cover" />
                <div class="card-body text-white">
                    <h3 class="card-title text-2xl font-bold mb-2">Project Name 1</h3>
                    <p class="text-lg">
                        A captivating description of the project that highlights its purpose, features, and unique aspects.
                    </p>
                    <a href="/projects/project-1" class="btn btn-secondary mt-4">View Details</a>
                </div>
            </div>
    
            <!-- Card 2 -->
            <div class="card variant-ghost-secondary w-full p-8 shadow-lg">
                <img src="/images/project2.jpg" alt="Project 2" class="rounded-lg mb-4 w-full h-64 object-cover" />
                <div class="card-body text-white">
                    <h3 class="card-title text-2xl font-bold mb-2">Project Name 2</h3>
                    <p class="text-lg">
                        An engaging summary of this project's key highlights, what it solves, and its impact.
                    </p>
                    <a href="/projects/project-2" class="btn btn-secondary mt-4">View Details</a>
                </div>
            </div>
    
            <!-- Card 3 -->
            <div class="card variant-ghost-secondary w-full p-8 shadow-lg">
                <img src="/images/project3.jpg" alt="Project 3" class="rounded-lg mb-4 w-full h-64 object-cover" />
                <div class="card-body text-white">
                    <h3 class="card-title text-2xl font-bold mb-2">Project Name 3</h3>
                    <p class="text-lg">
                        A short but impactful description of what makes this project special and exciting.
                    </p>
                    <a href="/projects/project-3" class="btn btn-secondary mt-4">View Details</a>
                </div>
            </div>
        </div>
    </section>
</main>