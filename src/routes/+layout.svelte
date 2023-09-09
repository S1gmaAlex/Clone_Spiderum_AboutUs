<script>
	import '../app.css';
	import '@fontsource/montserrat/700.css';
	import '@fontsource/montserrat/600.css';
	import '@fontsource/montserrat/400.css';
	import '@fontsource/mulish/700.css';
	import '@fontsource/mulish/400.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="h-full overflow-x-hidden">
	<Navbar />
	<slot />
	<Footer />
</div>

<style lang="postcss" global>
	button {
		@apply px-6 py-3 font-sans;
	}
	button.primary {
		@apply bg-primary text-white;
	}

	button.black {
		@apply bg-black text-white hover:text-blue-400 transition-all;
	}
	a.secondary {
		@apply bg-black text-white hover:text-blue-400 transition-all;
	}
</style>
