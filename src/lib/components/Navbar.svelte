<script>
	import { fly } from 'svelte/transition';
	let isShow = false;
</script>

<nav
	class="sticky w-full flex items-center justify-between border-b pl-28 py-3 backdrop-blur-xl bg-white/70 md:flex md:flex-row md:justify-between text-center text-sm sm:text-base"
>
	<div class="flex items-center">
		<img src="/images/Spiderum _logo.svg" alt="Spiderum Logo" width={161} height={52} />
		<a href="/" class="hidden pl-4 text-sm font-light leading-8 lg:block">Tới trang tiếng việt</a>
	</div>

	<div class=" hidden space-x-5 md:flex md:items-center">
		<a class=" font-bold text-xl md:text-base" href="/"> Home </a>

		<a class="font-bold text-xl md:text-base" href="/"> ABOUT SPIDERUM </a>

		<a class="font-bold text-xl md:text-base" href="/"> PRODUCTS </a>

		<a class="font-bold text-xl md:text-base" href="/"> PARTNERS </a>

		<a class="font-bold text-xl md:text-base" href="/"> CONTACT US </a>

		<a href="/" class=" secondary hidden text-base font-bold px-8 py-[10px] rounded-xl xl:block"
			>Get our Media Kit</a
		>
		<button class="primary hidden xl:block rounded-xl">
			<svg fill="none" viewBox="0 0 16 16" class="h-5" astro-icon="phone"
				><path
					fill="#F2F6FC"
					d="M0 1a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.036 11.036 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V15a1 1 0 0 1-1 1h-2C5.82 16 0 10.18 0 3V1Z"
				/></svg
			>
		</button>
	</div>
	<div class="block md:hidden">
		<button on:click={() => (isShow = true)}>
			<img src="/images/hamburger.svg" alt="Hamburger" width={24} height={24} />
		</button>
	</div>
</nav>

{#if isShow}
	<div class="fixed top-0 left-0 z-20 w-screen h-screen bg-black opacity-90" transition:fly>
		<button class="fixed top-10 right-10" on:click={() => (isShow = false)}>
			<img src="/images/close.svg" alt="Close" width={36} height={36} />
		</button>
		<div class="z-30 flex flex-col items-center justify-center w-full h-full space-y-12">
			<a class=" text-white font-bold text-xl md:text-base" href="/"> Home </a>

			<a class=" text-white font-bold text-xl md:text-base" href="/"> ABOUT SPIDERUM </a>

			<a class=" text-white font-bold text-xl md:text-base" href="/"> PRODUCTS </a>

			<a class=" text-white font-bold text-xl md:text-base" href="/"> PARTNERS </a>

			<a class=" text-white font-bold text-xl md:text-base" href="/"> CONTACT US </a>
		</div>
	</div>
{/if}
